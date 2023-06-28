import React from "react";
import { ClickStastistic } from "./StatistiTypes/ClickStastistic";
import { TypingStastitic } from "./StatistiTypes/TypingStastitic";
import useContext from "@/hooks/rootContext/useContext";
import useOperator from "@/hooks/rootContext/useOperator";
import pathResolver from "@/utils/pathResolver";
import { useRouter } from "next/router";

export const Statistics = () => {
  const router = useRouter();
  const { data } = useContext();
  const { refresh } = useOperator();

  const renderSwitch = () => {
    switch (pathResolver(router.pathname)) {
      case "":
      case "/":
      case "/cps":
      case "/cps/":
      case "/jitter-click":
      case "/jitter-click/":
      case "/kohi-click-test":
      case "/kohi-click-test/":
        return (
          <div className="mainStatistics">
            <ClickStastistic />
          </div>
        );
      case "/spacebar-counter":
      case "/spacebar-counter/":
        return (
          <div className="mainStatistics">
            <ClickStastistic />
          </div>
        );
      case "/scroll-test":
      case "/scroll-test/":
        return (
          <div className="scrollHeader">
            <div className="StatisticClickItem">
              <div className="statText">
                <p style={{ marginBottom: "0px" }}>
                  Highscore:{" "}
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      padding: "5px 30px",
                      background: "#2e3236",
                      color: "orange",
                      borderRadius: "5px",
                      marginLeft: "15px",
                      border: "1px solid #95989b",
                    }}
                  >
                    {data.bestScore ? data.bestScore * 100: 0}
                  </span>
                </p>
              </div>
            </div>
          </div>
        );
      case "/typing-speed-test":
      case "/typing-speed-test/":
        return (
          <div className="mainStatistics">
            <TypingStastitic
              refresh={refresh}
            />
          </div>
        );
      default:
        return <h1>Error</h1>;
    }
  };
  return <>{renderSwitch()}</>;
};
