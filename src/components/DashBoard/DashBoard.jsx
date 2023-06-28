import React from "react";
import { Statistics } from "@/components/Statistics/Statistics";
import { Board } from "./Board";

export const DashBoard = ({
  type,
  startClickTest,
  startTypingTest,
  loading,
  typingText,
  setTypingText,
  userTypingText,
  stop,
  refresh,
  setData,
  data,
  corr,
  setWordsSizeMap,
  currentLineNumber,
}) => {

  return (
      <div className="DashBoardMain">
        <Statistics/>
        <Board
          type={type}
          startClickTest={startClickTest}
          startTypingTest={startTypingTest}
          typingText={typingText}
          setTypingText={setTypingText}
          loading={loading}
          userTypingText={userTypingText}
          stop={stop}
          refresh={refresh}
          setData={setData}
          data={data}
          corr={corr}
          setWordsSizeMap={setWordsSizeMap}
          currentLineNumber={currentLineNumber}
        />
      </div>
  );
};
