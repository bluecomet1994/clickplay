import React from "react";
import { DashBoard } from "../../DashBoard/DashBoard";
import { Description } from "../../Description/Description";
import "../../App.css";
import Modal from "../../Modal/Modal";
import Share from "../../share";
import MoreGame from "../../moreGame";
import { Timer } from "../../Settings/Timer";
import { BrowserView, MobileView } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import useContext from "@/hooks/rootContext/useContext";
import useOperator from "@/hooks/rootContext/useOperator";
import Helmet from "../../layouts/Helmet/Helmet";
import { Button } from "@mui/material";

const SpaceBar = () => {
  const navigate = useNavigate();
  const { data, open } = useContext();
  const { changeTimer, changeTestType, changeClickType, handelCloseDialog } =
    useOperator();

  const description =
    "Measure your spacebar speed with our Spacebar Speed Test. Find out how fast you can press the spacebar key within a given time frame. Put your finger dexterity to the test and assess your speed and accuracy. ";
  const title = "Spacebar Test Speed - How Many Spacebar per Second?";

  return (
    <div style={{ width: "100%" }}>
      <BrowserView>
        <Helmet title={title} description={description} />
        <div className="up AppMain">
          <div className="upText">
            <h1 className="fs-2 fw-bold mt-2">Spacebar Counter </h1>
            <p style={{ fontSize: "1.1rem" }}>
              Test how many click per second you can get!
            </p>
          </div>

          <div className="dashboard-container">
            <DashBoard />

            <Timer
              changeTimer={changeTimer}
              timer={data?.timer}
              type={data?.testType}
            />
          </div>
        </div>
      </BrowserView>

      <MobileView>
      <div className="incompatible-container">
          <div className="error-text">
            <h1 className="incompatible-device-error">
            The spacebar test is not compatible with mobile devices!
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
      <Description type="Spacebar" changeTestType={changeTestType} />
      <MoreGame changeTestType={changeTestType} />
      <Modal open={open} onClose={handelCloseDialog} data={data} />
    </div>
  );
};

export default SpaceBar;
