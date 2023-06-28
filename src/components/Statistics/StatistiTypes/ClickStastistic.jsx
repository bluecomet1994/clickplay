import React from "react";
import useContext from "@/hooks/rootContext/useContext";

export const ClickStastistic = () => {

  const { data } = useContext();

  function millisecondsToString(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let ms = Math.floor((milliseconds % 1000) / 10);
    return `${seconds < 10 ? seconds : seconds}:${ms < 10 ? "0" + ms : ms}`;
  }
  return (
    <>
      <div className="StatisticClickItem timer">
        <div className="statText">
          <p style={{ marginBottom: "0px", fontSize: "14px" }}>Timer: </p>
        </div>
        <div className="innerStatusBox">
          {data.score === 0 ? "0" : millisecondsToString(data.currentTimer)}
        </div>
      </div>
      <div className="StatisticClickItem clickpersecond">
        <div className="statText">
          <p className="stats-text">Clicks per second:</p>
        </div>
        <div className="innerStatusBox">
          {data.clickInsecond === 0 ? "0" : data.clickInsecond}
        </div>
      </div>
      <div className="StatisticClickItem clickpersecond">
        <div className="statText">
          <p className="stats-text">Score:</p>
        </div>
        <div className="innerStatusBox">{data.score}</div>
      </div>
    </>
  );
};
