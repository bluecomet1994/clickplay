import React from "react";
import { DashBoard } from "../../DashBoard/DashBoard";
import { Description } from "../../Description/Description";
import "../../App.css";
import Modal from "../../Modal/Modal";
import Share from "../../share";
import MoreGame from "../../moreGame";
import { useNavigate } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import useContext from "../../Hooks/rootContext/useContext";
import useOperator from "../../Hooks/rootContext/useOperator";
import Helmet from "../../layouts/Helmet/Helmet";
import { Button } from "@mui/material";

const Scroll = () => {
  const navigate = useNavigate();
  const { data, open } = useContext();
  const { changeTimer, changeTestType, changeClickType, handelCloseDialog } =
    useOperator();

  const description =
    "Challenge yourself and strive for greater scrolling efficiency with our Scroll Speed Test. Improve your scrolling technique and aim for optimal performance in this engaging assessment.";
  const title = "Scroll Test Speed - Scroll fast as you can!";

  return (
    <div style={{ width: "100%" }}>
      <Helmet title={title} description={description} />
      <BrowserView>
        <div className="up AppMain">
          <div className="upText">
            <h1 className="fs-2 fw-bold mt-2">Scroll Speed Test</h1>
            <p style={{ fontSize: "1.1rem" }}>
              Test your scroll speed per second!
            </p>
          </div>
          <DashBoard />
        </div>
      </BrowserView>
      <MobileView>
        <div className="incompatible-container">
          <div className="error-text">
            <h1 className="incompatible-device-error">
              The mouse scroll test is not compatible with mobile devices!
            </h1>
            <div className="alternative-game-mobile">
              <label> TRY </label>
              <Button
                className="default-button error"
                onClick={() => {
                  changeTestType("Click", 5000);
                  navigate("/");
                }}
                size="sm"
              >
                <p className="social-text">Click Per Second Test</p>
              </Button>
              <label> OR</label>
              <Button
                className="default-button error"
                onClick={() => {
                  changeTestType("Typing", 5000);
                  navigate("/Typing");
                }}
                size="sm"
              >
                <p className="social-text">Typing Test</p>
              </Button>
            </div>
          </div>
        </div>
      </MobileView>
      <Share />
      <Description type="Scroll" changeTestType={changeTestType} />
      <MoreGame changeTestType={changeTestType} />
      <Modal open={open} onClose={handelCloseDialog} data={data} />
    </div>
  );
};

export default Scroll;
