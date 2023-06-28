import * as React from "react";
import { MenuItem } from "react-pro-sidebar";

export default function EachItem({
  onClick,
  link,
  defTime,
  content,
  close,
}) {
  return (
    <>
      {onClick ? (
        <MenuItem
          onClick={() => {
            onClick(link, defTime);
            close(false);
          }}
          className="item-menu-sidebar"
        >
           {content}
        </MenuItem>
      ) : (
        <MenuItem
          onClick={() => {
            close(false);
          }}
          href={link}
          className="item-menu-sidebar"
        >
          {content}
        </MenuItem>
      )}
    </>
  );
}
