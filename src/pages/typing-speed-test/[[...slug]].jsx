import React from "react";
import { DashBoard } from "../../DashBoard/DashBoard";
import { Description } from "../../Description/Description";
import "../../App.css";
import Modal from "../../Modal/Modal";
import Share from "../../share";
import MoreGame from "../../moreGame";
import { Timer } from "../../Settings/Timer";
import useContext from "../../Hooks/rootContext/useContext";
import useOperator from "../../Hooks/rootContext/useOperator";
import Helmet from "../../layouts/Helmet/Helmet";

const Typing = () => {
  const { data, open } = useContext();
  const { changeTimer, changeTestType, changeClickType, handelCloseDialog } =
    useOperator();

  const description =
    "Test your typing speed and accuracy with our online Typing Speed Test. Find out how many words you can type per minute and enhance your typing skills with this engaging challenge.";
  const title = "Typing Test Speed - How fast can you type?";

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
