import { Button } from "@nextui-org/react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { SiPowerbi } from "react-icons/si";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function HomeMenu() {
  return (
    <>
      <div className="bg-background_menu h-full w-full bg-no-repeat bg-cover flex justify-center items-center flex-wrap gap-4">
        <Link to="/scrap">
          <Button className="bg-primary p-5 text-2xl">
            <SiPowerbi className="text-white" size={21} />
            Top chatarra
          </Button>
        </Link>
        <Link to="/profitability">
          <Button className="bg-primary p-5 text-2xl">
            <FaMoneyBillTrendUp className="text-white" size={21} />
            Rentabilidad Dinámica
          </Button>
        </Link>
        <Link to="/management">
          <Button className="bg-primary p-5 text-2xl">
            <IoSettingsSharp className="text-white" size={21} />
            Gestión de Usuarios
          </Button>
        </Link>
      </div>
    </>
  );
}

export default HomeMenu;
