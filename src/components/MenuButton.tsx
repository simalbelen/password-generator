import { Button } from "@nextui-org/react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { SiPowerbi } from "react-icons/si";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { string } from "yup";

const MenuButtonProp = {
    
}

function MenuButton({ link, icon, text }) {
  const getIcon = () => {
    switch (icon) {
      case "scrap":
        return <SiPowerbi className="text-white" size={21} />;

      default:
        break;
    }
  };

  return (
    <Link to={link}>
      <Button className="bg-primary p-5">
        <div className="flex text-2xl flex-col">
          {getIcon()}
          <p>{text}</p>
        </div>
      </Button>
    </Link>
  );
}

export default MenuButton;
