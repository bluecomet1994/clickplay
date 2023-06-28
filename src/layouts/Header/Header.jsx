import React, { useEffect, useState, memo } from "react";
import { useRouter } from "next/router";
import { MenuText } from "./MenuText/MenuText";
import SimpleMenu from "./SimpleMenu/SimpleMenu";
import useContext from '@/hooks/rootContext/useContext';
import useOperator from '@/hooks/rootContext/useOperator';
import './style.module.css';

const Header = () => {
  const [width, setWidth] = useState(null);
  const router = useRouter();

  const { data } = useContext();
  const { changeTestType } = useOperator();

  const links = [
    { id: "1", text: "Click speed test", type: "Click", href: "/cps", defTime: 5000 },
    { id: "2", text: "Spacebar counter", type: "Spacebar", href: "/spacebar-counter", defTime: 5000 },
    { id: "3", text: "Scroll speed test", type: "Scroll", href: "/scroll-test", defTime: 1000 },
    { id: "4", text: "Typing test", type: "Typing", href: "/typing-speed-test", defTime: 30000 },
  ];

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <nav className="default-nav navbar fixed-top bg-theme d-flex">
      <div className="header-container">
        <div className="clickPlay">
          <button
            onClick={() => {
              changeTestType("Click", 5000);
              router.push("/");
            }}
          >
            <img alt="header-icon" src="/white-favicon.png" className="header-mouse-icon-white" />
            <span className="HeaderLogo">Click Play</span>
          </button>
        </div>
        <div className="HeaderMenu">
          {width > 1100 ? (
            <MenuText
              changeTestType={changeTestType}
              type={data?.testType}
              time={data?.timer}
              links={links}
            />
          ) : (
            <SimpleMenu
              changeTestType={changeTestType}
              type={data?.testType}
              time={data?.timer}
              links={links}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default memo(Header);
