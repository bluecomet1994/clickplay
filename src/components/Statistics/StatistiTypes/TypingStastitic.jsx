import React from "react";
import { Button } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import useOperator from "@/hooks/rootContext/useOperator";
import useContext from "@/hooks/rootContext/useContext";

export const TypingStastitic = ({ stats }) => {
  const { resetTypingTest, generateNewWords, changeTimer } = useOperator();
  const { data } = useContext();

  let secondes =
    data.timer / 1000 - parseInt(data.currentTimer / 1000) === 0
      ? data.timer / 1000
      : data.timer / 1000 - parseInt(data.currentTimer / 1000);
  // secondesToMinutes functon to output mm:ss
  function secondesToMinutes(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  }
  return (
    <>
      <div className="main">
        <div className="StatisticClickItem">
          <div className="statText">
            <p style={{ marginBottom: "0px" }}>
              Timer:{" "}
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "orange",
                  padding: "5px 22px",
                  background: "#2e3236",
                  borderRadius: "5px",
                  marginLeft: "30px",
                  border: "1px solid #95989b",
                }}
              >
                {secondesToMinutes(secondes)}
              </span>
            </p>
          </div>
        </div>
        <button
          className="reset-typing"
          onClick={() => {
            resetTypingTest();
            generateNewWords();
            changeTimer(data.timer/1000);
          }}
        >
          <RestartAltIcon className="icon-restart" />
        </button>
      </div>
    </>
  );
};
