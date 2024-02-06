import React from "react";
import TopIcon from "../../../assets/icons/roles/TopIcon.png";
import JungleIcon from "../../../assets/icons/roles/JungleIcon.png";
import MiddleIcon from "../../../assets/icons/roles/MiddleIcon.png";
import BottomIcon from "../../../assets/icons/roles/BottomIcon.png";
import SupportIcon from "../../../assets/icons/roles/SupportIcon.png";
import { useNavigate } from "react-router-dom";
import "./RolesButtons.css";

interface LabelItemProps {
  labelItem: string;
}

function RoleButton({ labelItem }: LabelItemProps) {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
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
        return <img src={TopIcon} alt="Top Icon" className="img-roles" />;
      case "jungle":
        return <img src={JungleIcon} alt="Jungle Icon" className="img-roles" />;
      case "middle":
        return <img src={MiddleIcon} alt="Middle Icon" className="img-roles" />;
      case "bottom":
        return <img src={BottomIcon} alt="Bottom Icon" className="img-roles" />;
      case "support":
        return (
          <img src={SupportIcon} alt="Support Icon" className="img-roles" />
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
