import React from "react";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { BrowserView, MobileView } from "react-device-detect";
import { DashBoard } from "@/components/DashBoard/DashBoard";
import { Description } from "@/components/Description/Description";
import Modal from "@/components/Modal/Modal";
import Share from "@/components/Share";
import MoreGame from "@/components/MoreGame";
import { Timer } from "@/components/Settings/Timer";
import useContext from "@/hooks/rootContext/useContext";
import useOperator from "@/hooks/rootContext/useOperator";
import Helmet from "@/layouts/Helmet/Helmet";

const SpaceBar = () => {
  const router = useRouter();
  const { data, open } = useContext();
  const { changeTimer, changeTestType, changeClickType, handelCloseDialog } = useOperator();

  const title = "Spacebar Test Speed - How Many Spacebar per Second?";
  const description = "Measure your spacebar speed with our Spacebar Speed Test. Find out how fast you can press the spacebar key within a given time frame. Put your finger dexterity to the test and assess your speed and accuracy. ";

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
                  router.push("/");
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
                  router.push("/typing-speed-test");
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
