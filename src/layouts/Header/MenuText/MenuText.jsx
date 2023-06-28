import React from "react";
import { useRouter } from "next/router";
import useOperator from "@/hooks/rootContext/useOperator";

export const MenuText = ({ links, type, changeTestType }) => {

  const router = useRouter();

  const goTo = (to, defTime) => {
    changeTestType(to, defTime);
    router.replace(to);
  };
  return (
    <div>
      <ul className="HeaderUl">
        {links.map((el, index) => (
          <li
            className="HeaderMenuTypes"
            onClick={() => goTo(el.href, el.defTime)}
            key={el.id}
            style={{
              color: router.pathname.includes(el.type) ? "#ADE0E4" : "white",
              paddingRight: el.text === "Typing test" ? "0px":"15px"
            }}
          >
            {el.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
