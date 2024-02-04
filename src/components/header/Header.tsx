import React from "react";
import BackgroungImg from "../../assets/League_of_Legends.png";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <header className="header">
      <img
        src={BackgroungImg}
        alt="Background"
        className="header-logo"
        onClick={handleClick}
      />
    </header>
  );
}

export default Header;
