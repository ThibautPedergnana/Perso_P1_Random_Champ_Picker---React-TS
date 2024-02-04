import React from "react";
import TopIcon from "../../../assets/roles/icons/TopIcon.png";
import JungleIcon from "../../../assets/roles/icons/JungleIcon.png";
import MiddleIcon from "../../../assets/roles/icons/MiddleIcon.png";
import BottomIcon from "../../../assets/roles/icons/BottomIcon.png";
import SupportIcon from "../../../assets/roles/icons/SupportIcon.png";
import { useNavigate } from "react-router-dom";
import "./RolesButtons.css";

function RoleButton({ labelItem }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    switch (labelItem) {
      case "top":
        return navigate("/champ/top");
      case "jungle":
        return navigate("/champ/jungle");
      case "middle":
        return navigate("/champ/middle");
      case "bottom":
        return navigate("/champ/bottom");
      case "support":
        return navigate("/champ/support");
      default:
        <></>;
    }
  };

  const getRoleItem = () => {
    switch (labelItem) {
      case "top":
        return (
          <img
            src={TopIcon}
            alt="Top Icon"
            value={labelItem}
            className="img-roles"
          />
        );
      case "jungle":
        return (
          <img
            src={JungleIcon}
            alt="Jungle Icon"
            value={labelItem}
            className="img-roles"
          />
        );
      case "middle":
        return (
          <img
            src={MiddleIcon}
            alt="Middle Icon"
            value={labelItem}
            className="img-roles"
          />
        );
      case "bottom":
        return (
          <img
            src={BottomIcon}
            alt="Bottom Icon"
            value={labelItem}
            className="img-roles"
          />
        );
      case "support":
        return (
          <img
            src={SupportIcon}
            alt="Support Icon"
            value={labelItem}
            className="img-roles"
          />
        );

      default:
        <></>;
    }
  };
  return (
    <button className={"button-" + labelItem} onClick={handleClick}>
      {getRoleItem()}
    </button>
  );
}

export default RoleButton;
