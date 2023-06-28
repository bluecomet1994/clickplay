import React from "react";
import Helmet from "@/layouts/Helmet/Helmet";
import { DashBoard } from "@/components/DashBoard/DashBoard";
import { Description } from "@/components/Description/Description";
import Modal from "@/components/Modal/Modal";
import Share from "@/components/Share";
import MoreGame from "@/components/MoreGame";
import { Timer } from "@/components/Settings/Timer";
import { ChoseClickType } from "@/components/Settings/ChoseClickType";
import useContext from "@/hooks/rootContext/useContext";
import useOperator from "@/hooks/rootContext/useOperator";

const Click = () => {
  const { data, open } = useContext();
  const { changeTimer, changeTestType, changeClickType, handelCloseDialog } = useOperator();

  const title = "CPS Test Speed - How Many Clicks per Second?";
  const description = "Play CPS test free online game. Click Per Second checks the speed of mouse clicks you can make in 10 seconds";

  return (
    <div style={{ width: "100%" }}>
      <Helmet title={title} description={description} />
      <div className="up AppMain">
        <div className="upText">
          <h1 className="fs-2 fw-bold mt-2">Click Per Second Speed Test</h1>
          <p style={{ fontSize: "1.1rem" }}>
            How many clicks per second you can get?
          </p>
        </div>
        <div className="dashboard-container">
          <div className="clicker-container">
            <DashBoard />
            <ChoseClickType changeClickType={changeClickType} />
          </div>
          <Timer
            changeTimer={changeTimer}
            timer={data?.timer}
            type={data?.testType}
          />
        </div>
      </div>
      <ChoseClickType
        className="mobile-jitter-kohi-button"
        changeClickType={changeClickType}
      />
      <Share />
      <Description type="Click" changeTestType={changeTestType} />
      <MoreGame changeTestType={changeTestType} />
      <Modal open={open} onClose={handelCloseDialog} data={data} />
    </div>
  );
};

export default Click;
