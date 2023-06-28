import { Button } from "@mui/material";
import React from "react";

export const ChoseClickType = ({ changeClickType, clickType, className }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className={`SettingsClickTypeMain ${className}`}>
      <div className="SettingsClickTypeBtnGroup">
        <Button
          className="default-button jitter"
          onClick={() => {
            changeClickType("jitter");
            openInNewTab("/jitter-click");
          }}
          style={{ background: "#22AFFB", color: "white" }}
        >
          <p className="social-text">Jitter Click</p>
        </Button>
        <Button
          className="default-button kohi"
          onClick={() => {
            changeClickType("kohi");
            openInNewTab("/kohi-click-test");
          }}
          style={{
            background: "#22AFFB",
            color: "white",
            marginRight: "30px !important",
          }}
        >
          <p className="social-text"> Kohi Click</p>
        </Button>
      </div>
    </div>
  );
};
