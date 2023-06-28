import React from "react";
import { useRouter } from "next/router";
import { DashBoard } from "@/components/DashBoard/DashBoard";
import { Description } from "@/components/Description/Description";
import Modal from "@/components/Modal/Modal";
import Share from "@/components/share";
import MoreGame from "@/components/MoreGame";
import { Timer } from "@/components/Settings/Timer";
import useContext from "@/hooks/rootContext/useContext";
import useOperator from "@/hooks/rootContext/useOperator";
import Helmet from "@/layouts/Helmet/Helmet";

const Kohi = () => {
  const { data, open } = useContext();
  const { changeTimer, changeTestType, changeClickType, handelCloseDialog } = useOperator();
  const router = useRouter();

  const description =
    "Play CPS test free online game. Click Per Second checks the speed of mouse clicks you can make in 10 seconds";
  const title = "CPS Test Speed - Kohi";

  return (
    <div style={{ width: "100%" }}>
      <Helmet title={title} description={description} />
      <div className="up AppMain">
        <div className="upText">
          <h1 className="fs-2 fw-bold mt-2">Kohi Speed Test</h1>
          <p style={{ fontSize: "1.1rem" }}>Test your Kohi speed per second!</p>
        </div>
        <div className="dashboard-container">
        <div className="clicker-container">
            <DashBoard />
            <button
              onClick={() => {
                router.push("/cps");
                window.scrollTo(0, 0);
              }}
              className="default-button click-speed-test-btn"
            >
              click speed test
            </button>
          </div>
          <Timer
            changeTimer={changeTimer}
            timer={data?.timer}
            type={data?.testType}
          />
        </div>
      </div>
      <Share />
      <Description type="Kohi" changeTestType={changeTestType} />
      <MoreGame changeTestType={changeTestType} />
      <Modal open={open} onClose={handelCloseDialog} data={data} />
    </div>
  );
};

export default Kohi;
