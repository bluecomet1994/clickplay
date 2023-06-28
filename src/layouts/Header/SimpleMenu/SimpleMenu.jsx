import * as React from "react";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Menu, Sidebar, MenuItem, SubMenu } from "react-pro-sidebar";
import { HiCursorClick } from "react-icons/hi";
import { MdSpaceBar, MdKeyboardAlt } from "react-icons/md";
import { RiMouseFill } from "react-icons/ri";
import { CgScrollV } from "react-icons/cg";
import { GiClick } from "react-icons/gi";
import EachItem from "./MenuItem";
import { useRouter } from "next/router";

export default function SimpleMenu({ changeTestType }) {
  const [collapse, setCollapse] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  const handleClick = (event) => {
    setCollapse((prev) => !prev);
  };

  const router = useRouter();

  const goTo = (to, defTime) => {
    changeTestType(to, defTime);
    router.push("/" + to);
  };

  return (
    <div>
      {collapse && (
        <div
          className="sidebar-wrapper"
          onClick={() => {
            setCollapse(false);
          }}
        />
      )}
      <button
        style={{
          backgroundColor: "transparent",
          borderRadius: "4px",
          border: "1px solid rgba(255,255,255,.1)",
          right: "20px",
          position: "absolute",
          top: "15px",
        }}
        onClick={handleClick}
        className="btn btn-primary"
      >
        <MenuIcon
          style={{
            color: "rgba(255,255,255,.5)",
            width: "32px",
            height: "32px",
          }}
        />
      </button>
      <Sidebar
        rootStyles={{
          backgroundColor: "#212529",
          position: "fixed",
          top: "0px",
          right: "-1px",
          height: "100vh",
          color: "white",
          borderRight: "1px solid white",
        }}
        collapsed={!collapse}
        collapsedWidth="0px"
      >
        <Menu
          rootStyles={{
            backgroundColor: "#212529 !important",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-between p-3"
            style={{
              borderBottom: "1px solid rgb(58 62 69)",
              marginBottom: "20px",
            }}
          >
            <div className="d-flex">
              <img
                className="mobile-icon-header"
                alt="icon-clickplay"
                src="/white-favicon.png"
              />
              {/* <p className="mobile-header-text">ClickPlay</p> */}
            </div>
            <CloseIcon onClick={handleClick} className="close-button-mobile" />
          </div>
          <div className="side-bar-body">
            <EachItem
              onClick={goTo}
              close={setCollapse}
              link="Click"
              content="CPS Test"
              defTime={5000}
            />
            <EachItem
              onClick={goTo}
              close={setCollapse}
              link="Spacebar"
              content="Spacebar Test"
              defTime={5000}
            />
            <EachItem
              onClick={goTo}
              link="Scroll"
              close={setCollapse}
              content="Scroll Test"
              defTime={1000}
            />
            <EachItem
              onClick={goTo}
              link="Typing"
              close={setCollapse}
              content="Typing Test"
              defTime={30000}
            />
            {/* <SubMenu
            rootStyles={{
              backgroundColor: "#F5F6FB",
            }}
            label="More"
            className={!openMenu ? "sub-menu-sidebar":"sub-menu-sidebar active-menu" }
            onClick={()=>{setOpenMenu(prev => !prev)}}
          >
            <MenuItem className="item-menu-sidebar"> Contact </MenuItem>
            <MenuItem className="item-menu-sidebar"> Privacy </MenuItem>
            <MenuItem className="item-menu-sidebar"> About us </MenuItem>
            <MenuItem className="item-menu-sidebar"> Terms </MenuItem>
          </SubMenu> */}
          </div>
        </Menu>
      </Sidebar>
    </div>
  );
}
