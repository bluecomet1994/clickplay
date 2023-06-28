import React from "react";
import { DashBoard } from "@/components/DashBoard/DashBoard";
import { Description } from "@/components/Description/Description";
import Modal from "@/components/Modal/Modal";
import Share from "@/components/Share";
import MoreGame from "@/components/MoreGame";
import { Timer } from "@/components/Settings/Timer";
import useContext from "@/hooks/rootContext/useContext";
import useOperator from "@/hooks/rootContext/useOperator";
import Helmet from "@/layouts/Helmet/Helmet";

const Typing = () => {
  const { data, open } = useContext();
  const { changeTimer, changeTestType, changeClickType, handelCloseDialog } = useOperator();

  const title = "Typing Test Speed - How fast can you type?";
  const description = "Test your typing speed and accuracy with our online Typing Speed Test. Find out how many words you can type per minute and enhance your typing skills with this engaging challenge.";

  return (
    <div style={{ width: "100%" }}>
            <Helmet title={title} description={description} />
      <div className="up AppMain">
        <div className="upText">
          <h1 className="fs-2 fw-bold mt-2">Typing Speed Test</h1>
          <p style={{ fontSize: "1.1rem" }}>
            Take the speed typing test challenge!
          </p>
        </div>
        <div className="dashboard-container">
          <DashBoard />
          <Timer
            changeTimer={changeTimer}
            timer={data.timer}
            type={data?.testType}
          />
        </div>
      </div>
      <Share />
      <Description type="Typing" changeTestType={changeTestType} />
      <MoreGame changeTestType={changeTestType} />
      <Modal open={open} onClose={handelCloseDialog} data={data} />
    </div>
  );
};

export default Typing;
