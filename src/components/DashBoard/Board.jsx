import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import potentiallyTypingText from "@/hooks/giveTypingText/giveTypingText";
import useContext from "@/hooks/rootContext/useContext";
import useOperator from "@/hooks/rootContext/useOperator";
import matchTypedItems from "@/utils/matchedTypesItems";
import fetchRandomItems from "@/utils/fetchRandomItems";
import pathResolver from "@/utils/pathResolver";

let timeOut;

export const Board = () => {
  const router = useRouter();
  const {
    data,
    setData,
    typingText,
    setTypingText,
    totalTypesCorrect,
    setTotalTypesCorrect,
    correctTypesPerBox,
    setCorrectTypesPerBox,
    generatedWords,
    setGeneratedWords,
    scrollHighScore,
    setScrollHighScore,
    maximumCharPerBox,
    setMaximumCharPerBox,
    setTotalTypingText,
    typeHeight,
    setTypeHeight,
  } = useContext();

  const { loading } = data;
  const { startTypingTest, startClickTest, resetTypingTest } = useOperator();

  const wheelTimeout = useRef();
  const spaceTimout = useRef();
  const divRef = useRef(null);
  const pRefs = useRef([]);

  const [isBlurred, setIsBlurred] = useState(true);

  const onWheel = () => {
    // ... some code I needed ...
    if (!data?.loading) {
      setData((prev) => ({ ...prev, loading: true }));
      timeOut = setTimeout(() => {
        setData((prev) => ({ ...prev, score: 0, loading: false }));
      }, 1000);
    }
    data.score + 1 > data.bestScore &&
      setData((prev) => ({ ...prev, bestScore: prev.bestScore + 1 }));
    setData((prev) => ({
      ...prev,
      score: prev.score + 1,
    }));

    // while wheel is moving, do not release the lock
    clearTimeout(wheelTimeout.current);

    // flag indicating to lock page scrolling (setTimeout returns a number)
    wheelTimeout.current = setTimeout(() => {
      wheelTimeout.current = false;
    }, 10);
  };

  useEffect(() => {
    const cancelSpace = (e) => {
      if (spaceTimout.current) {
        spaceTimout.current.focus();
        e.preventDefault();
      } else {
        return false;
      }
    };
    const cancelWheel = (e) => wheelTimeout.current && e.preventDefault();
    document.body.addEventListener("wheel", cancelWheel, { passive: false });
    document.body.addEventListener("keydown", cancelSpace, { passive: false });
    return () => {
      document.body.removeEventListener("wheel", cancelWheel);
      document.body.removeEventListener("keydown", cancelSpace);
    };
  }, []);

  const clickRef = useRef();

  const onClick = (e, type) => {
    startClickTest();

    var myDiv = document.getElementsByClassName("DashBoardBoardBtn")[0];

    var newElement = document.createElement("div");
    newElement.className = "circle1";
    var circlesDiv = document.createElement("div");
    circlesDiv.className = "circles";
    circlesDiv.appendChild(newElement);

    var rect = e.currentTarget.getBoundingClientRect();
    circlesDiv.style.left = e.clientX - rect.left - 150 + "px";
    circlesDiv.style.top = e.clientY - rect.top - 150 + "px";

    myDiv.appendChild(circlesDiv);

    setTimeout(function () {
      removeCirclesDiv();
    }, 1000);

    function removeCirclesDiv() {
      if (myDiv.contains(circlesDiv)) {
        myDiv.removeChild(circlesDiv);
      }
    }
  };

  useEffect(() => {
    setGeneratedWords(fetchRandomItems(potentiallyTypingText));

    return () => {
      resetTypingTest();
    };
  }, []);

  useEffect(() => {
    if (loading) {
      setCorrectTypesPerBox(matchTypedItems(typingText, generatedWords));
    }
  }, [typingText]);

  useEffect(() => {
    if (loading) {
      resetBoxText();
    }
  }, [loading, typingText]);

  function resetBoxText() {
    const divElement = divRef.current;
    const firstAffectedIndex = pRefs?.current?.findIndex((pElement) => {
      const pElementRect = pElement?.getBoundingClientRect();
      const divElementRect = divElement?.getBoundingClientRect();

      return (
        pElementRect?.bottom >
        divElementRect?.bottom - divElementRect.height / 2
      );
    });

    if (firstAffectedIndex !== -1) {
      const firstAffectedElement = pRefs.current[firstAffectedIndex];
      setMaximumCharPerBox(firstAffectedIndex);
    }
  }

  const startTyping = (e) => {
    if (!loading) {
      startTypingTest();
    }

    console.log(isBlurred);

    setTypingText(e.target.value);

    if (typingText.length === maximumCharPerBox - 2 - generatedWords.join(" ").length) {
      // setTotalTypesCorrect(correctTypesPerBox);
      // setTotalTypingText(typingText.length);
      // setCorrectTypesPerBox(0);
      // setTypingText("");
      const generatedWords = fetchRandomItems(potentiallyTypingText, 10);
      setGeneratedWords((prev) => [...prev, ...generatedWords]);
      pRefs.current = [];
      setTypeHeight((prev) => prev - 60);
    }
  };

  const inputRef = useRef(null);

  useEffect(() => {
    if (router?.pathname.includes("typing-speed-test")) {
      var handleBlur = () => {
        setIsBlurred(true);
      };

      var handleFocus = () => {
        setIsBlurred(false);
      };

      var inputElement = inputRef.current;

      inputElement?.addEventListener("blur", handleBlur);
      inputElement?.addEventListener("focus", handleFocus);
    }

    return () => {
      inputElement?.removeEventListener("blur", handleBlur);
      inputElement?.removeEventListener("focus", handleFocus);
    };
  }, [router.pathname]);

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
          <button
            ref={clickRef}
            onClick={onClick}
            className="DashBoardBoardBtn An"
          >
            {!loading && "Click here to start"}
            {/* Click me start Test */}
          </button>
        );
      case "/spacebar-counter":
      case "/spacebar-counter/":
        return (
          <button
            autoFocus
            className="DashBoardBoardBtn"
            ref={spaceTimout}
            onKeyDown={(e) => onClick(e, "spacebar")}
          >
            {!loading && 'Press the "Space bar" to start'}
            {/* Click me start Test */}
          </button>
        );
      case "/scroll-test":
      case "/scroll-test/":
        return (
          <button className="scrollBtn" onWheel={onWheel} ref={wheelTimeout}>
            <p style={{ margin: "0px", fontSize: "50px" }}>
              {data.score * 100}
            </p>
            <p style={{ margin: "0px" }}> Pixels per second</p>
          </button>
        );

      case "/typing-speed-test":
      case "/typing-speed-test/":
        return (
          <div className="typing-container">
            <div className="typing-area" ref={divRef}>
              <input
                value={typingText}
                onChange={(e) => startTyping(e)}
                className="type-input-area"
                ref={inputRef}
              />
              {generatedWords.length
                ? generatedWords.map((item, i, arr) => {
                    const previousWordsLength = arr
                      .slice(0, i)
                      .reduce((total, word) => total + word.length + 1, 0);

                    pRefs.current = [];

                    return `${item} `.split("").map((letter, si) => {
                      return letter !== " " ? (
                        <span
                          className={
                            typingText.length === previousWordsLength + si
                              ? "each-letter active"
                              : "each-letter"
                          }
                          key={si}
                          style={{
                            color:
                              typingText.length > previousWordsLength + si &&
                              typingText[previousWordsLength + si] !==
                                letter.toLocaleLowerCase() &&
                              typingText[previousWordsLength + si] !==
                                letter.toLocaleUpperCase()
                                ? "rgb(248,113,113)"
                                : typingText.length <
                                  previousWordsLength + si + 1
                                ? ""
                                : "rgb(52,211,153)",
                            top: typeHeight,
                          }}
                          ref={(el) => pRefs.current.push(el)}
                        >
                          {letter}
                        </span>
                      ) : (
                        <span
                          className={
                            typingText.length === previousWordsLength + si
                              ? "space-type active"
                              : "space-type"
                          }
                          key={si}
                          ref={(el) => pRefs.current.push(el)}
                          style={{
                            top: typeHeight,
                          }}
                        >
                          {letter}
                        </span>
                      );
                    });
                  })
                : ""}
            </div>
            {!loading && (
              <div
                className="start-type"
                style={{
                  backgroundColor: !isBlurred
                    ? "rgb(209,250,229)"
                    : "rgb(254,226,226)",
                }}
              >
                {!isBlurred
                  ? "Start typing to begin the test"
                  : "Click on the test and start typing to begin"}
              </div>
            )}
          </div>
        );
      default:
        return <h1>Error</h1>;
    }
  };
  return <div className="DashBoardBoard">{renderSwitch()}</div>;
};
