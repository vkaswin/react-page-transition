import React from "react";
import { useNavigate } from "react-router-dom";

export const Container = ({ bg }) => {
  const navigate = useNavigate();

  const links = [
    {
      label: "Home",
      to: "/home",
    },
    {
      label: "About",
      to: "/about",
    },
    {
      label: "Contact",
      to: "/contact",
    },
  ];

  const handleNavigate = (to) => () => {
    navigate(to);
  };

  return (
    <div className={`container ${bg}`}>
      <div className="box">
        {links.map(({ label, to }) => {
          return (
            <button key={to} onClick={handleNavigate(to)}>
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
