import React from "react";
import { useRouter } from "next/router";
import { BrowserView, MobileView } from "react-device-detect";
import { Button } from "@mui/material";
import { DashBoard } from "@/components/DashBoard/DashBoard";
import { Description } from "@/components/Description/Description";
import Modal from "@/components/Modal/Modal";
import Share from "@/components/Share";
import MoreGame from "@/components/MoreGame";
import useContext from "@/hooks/rootContext/useContext";
import useOperator from "@/hooks/rootContext/useOperator";
import Helmet from "@/layouts/Helmet/Helmet";

const Scroll = () => {
  const router = useRouter();
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
      <Description type="Scroll" changeTestType={changeTestType} />
      <MoreGame changeTestType={changeTestType} />
      <Modal open={open} onClose={handelCloseDialog} data={data} />
    </div>
  );
};

export default Scroll;
