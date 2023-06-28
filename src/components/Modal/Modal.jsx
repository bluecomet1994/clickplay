import * as React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import HoverRating from "./Rating";
import useContext from "@/hooks/rootContext/useContext";
import resolvePath from "@/utils/pathResolver";
import { useRouter } from "next/router";

export default function Modal({ open, onClose, data }) {
  const { totalTypesCorrect, correctTypesPerBox, totalTypingText, typingText } =
    useContext();
  // refactor this later and utilize score from setData instead

  const router = useRouter();
  const renderSwitch = () => {
    switch (resolvePath(router.pathname)) {
      case "":
      case "/":
      case "/cps":
      case "/cps/":
      case "/jitter-click":
      case "/jitter-click/":
      case "/kohi-click-test":
      case "/kohi-click-test/":
        return (
          <div style={{ textAlign: "center" }}>
            <h2>Your Score!</h2>
            <p>
              <span
                className="fs-2 fw-semibold"
                style={{ color: "rgb(250 175 0" }}
              >
                {data.clickInsecond}
              </span>{" "}
              Clicks per second
            </p>
            <p>
              {" "}
              <span
                className="fs-3 fw-semibold"
                style={{ color: "rgb(250 175 0" }}
              >
                {data.score}
              </span>{" "}
              clicks in{" "}
              <span style={{ color: "rgb(250, 175, 0)", fontSize: "20px" }}>
                {data.timer / 1000}
              </span>{" "}
              {data.timer / 1000 === 1 ? "second" : "seconds"}
            </p>
          </div>
        );
      case "/spacebar-counter":
      case "/spacebar-counter/":
        return (
          <div style={{ textAlign: "center" }}>
            <h2>Your Score!</h2>
            <p>
              <span
                className="fs-2 fw-semibold"
                style={{ color: "rgb(250 175 0" }}
              >
                {data.clickInsecond}
              </span>{" "}
              Clicks per second
            </p>
            <p>
              {" "}
              <span
                className="fs-3 fw-semibold"
                style={{ color: "rgb(250 175 0" }}
              >
                {data.score}
              </span>{" "}
              clicks in{" "}
              <span style={{ color: "rgb(250, 175, 0)" }}>
                {data.timer / 1000}
              </span>{" "}
              {data.timer / 1000 === 1 ? "second" : "seconds"}{" "}
            </p>
          </div>
        );
      case "/scroll-test":
      case "/scroll-test/":
        return <p></p>;
      case "/typing-speed-test":
      case "/typing-speed-test/":
        return (
          <div style={{ textAlign: "center" }}>
            <h2>Your Score!</h2>
            <p>
              <span
                className="fs-2 fw-semibold"
                style={{ color: "rgb(250 175 0" }}
              >
                {typingText.length * (60 / (data.timer / 1000))}
              </span>{" "}
              Characters per min{" "}
            </p>
            <p>
              {" "}
              <span
                className="fs-3 fw-semibold"
                style={{ color: "rgb(250 175 0" }}
              >
                {(totalTypesCorrect + correctTypesPerBox) *
                  (60 / (data.timer / 1000))}
              </span>{" "}
              words per minute
            </p>
          </div>
        );

      default:
        return <h1>Error</h1>;
    }
  };
  return (
    <Dialog
      className="Dialog"
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" style={{ textAlign: "center" }}>
        <p onClick={() => onClose()} className="muti_sign">
          &#215;
        </p>
      </DialogTitle>
      <DialogContent className="ui-score">
        <DialogContentText id="alert-dialog-description" component={"span"}>
          {renderSwitch()}
          <HoverRating
            gago={calculateRating(
              data.clickInsecond,
              router.pathname.includes("typing-speed-test") ? (totalTypesCorrect + correctTypesPerBox) *
              (60 / (data.timer / 1000)) : data.score,
              router.pathname
            )}
          />
        </DialogContentText>
      </DialogContent>
      <div className="play-again-container">
        <Button onClick={() => onClose()}>Play Again</Button>
      </div>
    </Dialog>
  );
}

const calculateRating = (value, score, testType) => {
  if (testType.includes("typing-speed-test")) {
    if (score <= 15) return 1;
    if (score <= 30) return 2;
    if (score <= 45) return 3;
    if (score <= 60) return 4;
    if (score > 60) return 5;
  } else {
    if (value < 4) return 1;
    else if (value < 4) return 1;
    else if (value < 6) return 2;
    else if (value < 8) return 3;
    else if (value < 10) return 4;
    else if (value >= 10) return 5;
  }
};
