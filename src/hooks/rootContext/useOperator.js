import React from "react";
import { useState, useEffect } from "react";
import useContext from "./useContext";
import fetchRandomItems from "../../utils/fetchRandomItems";
import potentiallyTypingText from "../giveTypingText/giveTypingText";

let interval = null;
let timeout = null;

const useOperator = () => {
  const {
    data,
    setData,
    setOpen,
    open,
    setTypingText,
    setTotalTypesCorrect,
    setCorrectTypesPerBox,
    setMaximumCharPerBox,
    setGeneratedWords,
    setTotalTypingText,
    setTypeHeight,
  } = useContext();

  const startClickTest = () => {
    if (!data?.loading && !open) {
      const startTime = Date.now();
      setData((prev) => ({
        ...prev,
        currentTimer: 0,
        loading: true,
        score: data.score + 1,
      }));

      timeout = setTimeout(() => {
        clearInterval(interval);
        setData((prev) => ({
          ...prev,
          loading: false,
          currentTimer: prev.timer,
          clickInsecond: formatedClickPerSecond(
            parseInt(prev.score / (prev.timer / 100000)) / 100
          ),
        }));
        clearTimeout(timeout);
        setOpen(true);
      }, data?.timer);

      interval = setInterval(() => {
        setData((prev) => ({
          ...prev,
          currentTimer: Date.now() - startTime,
          clickInsecond: isFinite(prev.score / prev.currentTimer)
            ? formatedClickPerSecond(
                parseInt(prev.score / (prev.currentTimer / 100000)) / 100
              )
            : "00:00",
        }));
      }, 10);
    } else {
      setData((prev) => ({ ...prev, score: data.score + 1 }));
    }
  };

  const formatedClickPerSecond = (value) => {
    const result = value.toFixed(2);
    return result;
  };


  const resetTypingTest = () => {
    setTypingText("");
    setMaximumCharPerBox(null);
    setTotalTypingText(0);
    setTotalTypesCorrect("");
    setCorrectTypesPerBox("");
    setTypeHeight(0);
    setMaximumCharPerBox(null);
  }
  
  const generateNewWords = () => {
    setGeneratedWords(fetchRandomItems(potentiallyTypingText));
  }

  const startTypingTest = () => {
    if (!data?.loading && !open) {
      const startTime = Date.now();
      setData((prev) => ({
        ...prev,
        currentTimer: 0,
        loading: true,
        score: 0,
      }));

      timeout = setTimeout(() => {
        clearInterval(interval);
        setData((prev) => ({
          ...prev,
          loading: false,
          currentTimer: prev.timer,
        }));

        clearTimeout(timeout);
        setOpen(true);
      }, data?.timer);

      interval = setInterval(() => {
        setData((prev) => ({
          ...prev,
          currentTimer: Date.now() - startTime,
        }));
      }, 10);
    }
  };

  const changeTimer = (value) => {
    setData((prev) => ({
      ...prev,
      timer: value * 1000,
      currentTimer: value * 1000,
      clickInsecond: 0,
      score: 0,
    }));
  };

  const changeClickType = (type) =>
    setData((prev) => ({
      ...prev,
      clickType: type,
      timer: prev.timer,
      currentTimer: prev.timer,
      clickInsecond: 0,
      score: 0,
    }));

  const changeTestType = (type, defTime) => {
    setData((prev) => ({
      ...prev,
      testType: type,
      timer: defTime,
      currentTimer: defTime,
      clickInsecond: 0,
      score: 0,
    }));
    window.scrollTo(0, 0);
  };

  const handelCloseDialog = () => {
    setOpen(false);
    setData((prev) => ({ ...prev, score: 0, clickInsecond: 0 }));
    generateNewWords();
    resetTypingTest();
  };

  const refresh = () => {
    if (data?.loading) {
      setData((prev) => ({
        ...prev,
        currentTimer: prev.timer,
        loading: false,
      }));
      clearTimeout(timeout);
      clearInterval(interval);
    }
  };

  useEffect(() => {
    if (
      data?.currentTimer >= data?.timer &&
      data?.loading &&
      data?.testType !== "Scroll"
    ) {
      clearInterval(interval);
      clearTimeout(timeout);
      setData((prev) => ({ ...prev, loading: false }));
    }
  }, [data]);

  return {
    startClickTest,
    startTypingTest,
    changeTimer,
    changeClickType,
    changeTestType,
    handelCloseDialog,
    refresh,
    resetTypingTest,
    generateNewWords
  };
};

export default useOperator;
