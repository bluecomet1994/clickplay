import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import useContext from "@/hooks/rootContext/useContext";
import useOperator from "@/hooks/rootContext/useOperator";
import paramsResolver from "@/utils/paramsResolver";
import pathResolver from "@/utils/pathResolver";
import { useRouter } from "next/router";

export const Timer = ({ changeTimer, timer, type }) => {
  const router = useRouter();
  const { id } = router.query;
  const { resetTypingTest } = useOperator();
  const [isloading, setIsloading] = useState(true);

  function resolvePathName(str) {
    const lastSlashIndex = str.lastIndexOf("/");
    return str.substring(0, lastSlashIndex + 1);
  }

  useEffect(() => {
    if (id) {
      const num = paramsResolver(id);
      num && changeTimer(num);
    }
    setIsloading(false);
  }, [router]);

  const goTo = (time) => {
    const str = window.location.href;
    const jit = str.split("/").pop(); // extract last part after '/'
    if (jit === "Jitter" || jit === "Kohi") {
      changeTimer(time);
      // navigate(`/${jit}/`+id+`-Seconds`);
      // navigate(`/${jit}`);
    } else {
      changeTimer(time);
      // console.log(id)
      // console.log(location.pathname);
      router.push(
        `${
          id
            ? resolvePathName(router.pathname)
            : router.pathname === "/"
            ? "/cps/"
            : `${router.pathname}/`
        }` +
          time +
          `-Seconds`
      );
    }
  };
  const clickOptions = [1, 3, 5, 10];
  const clickOptions2 =  [ 15, 30, 60, 100];
  const timerOptions = [30, 60, 120, 180];
  const timerOptions2 = [, 240, 300, 420, 600];

  return (
    <div className="game-options">
      <div className="option-lists">
        {router.pathname.includes("typing-speed-test") ? (
          <>
            <div className="timerOptions">
              {timerOptions.map((el) => (
                <p
                  className="SettingsTimerBtn"
                  key={el}
                  onClick={() => {
                    resetTypingTest();
                    goTo(el);
                  }}
                  style={{
                    background:
                      timer === el * 1000 && !isloading ? "#3f474f" : "#212529",
                  }}
                >
                  {el === 30
                    ? 30
                    : el === 60
                    ? 1
                    : el === 120
                    ? 2
                    : el === 180 && 3} {" "}
                  {el < 60 ? "seconds" : el === 60 ? "minute" : "minutes"}
                </p>
              ))}
            </div>
            <div className="timerOptions2">
              {timerOptions2.map((el) => (
                <p
                  className="SettingsTimerBtn"
                  key={el}
                  onClick={() => {
                    resetTypingTest();
                    goTo(el);
                  }}
                  style={{
                    background:
                      timer === el * 1000 && !isloading ? "#3f474f" : "#212529",
                  }}
                >
                  {el === 240
                    ? 4
                    : el === 300
                    ? 5
                    : el === 420
                    ? 7
                    : el === 600
                    ? 10
                    : 30}{" "}
                  {el < 60 ? "seconds" : el === 60 ? "minute" : "minutes"}
                </p>
              ))}
            </div>
          </>
        ) : (
         <>
         <div className="timerOptions">
          { clickOptions.map((el) => (
            <div
              className="SettingsTimerBtn"
              key={el}
              onClick={() => goTo(el)}
              style={{
                background:
                  timer === el * 1000 && !isloading ? "#3f474f" : "#212529",
              }}
            >
              {el} {" "}{el === 1 ? "Second" : "Seconds"}
            </div>
          ))}
         </div>
         <div className="timerOptions2">
         { clickOptions2.map((el) => (
            <div
              className="SettingsTimerBtn"
              key={el}
              onClick={() => goTo(el)}
              style={{
                background:
                  timer === el * 1000 && !isloading ? "#3f474f" : "#212529",
              }}
            >
              {el}{" "} {el === 1 ? "Second" : "Seconds"}
            </div>
          ))}
         </div>
         </>
        )}
      </div>
    </div>
  );
};
