import "./index.css";
import { CiCircleList } from "react-icons/ci";
import { privateRouter, publicRouter } from "../../common/const";
import SubNavigation from "../../components/SubNavigation";
import { useState } from "react";
const SideBar = () => {
  const [showNav, setShowNav] = useState(true);
  return (
    <div
      className={`${
        showNav ? "w-[16%]" : "w-[6%]"
      } sidebar pt-12 transition-all duration-100 delay-100 ease-in`}
    >
      <div className="flex gap-2 items-center px-6 py-2">
        <div
          className="hover:cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        >
          <CiCircleList size={20} color=" #EBEBF599" />
        </div>

        <div
          className={`${
            showNav
              ? "opacity-100 duration-100 delay-300 ease-out"
              : "opacity-0 duration-0 delay-100 ease-in"
          }  text-white text-[34px] font-[700] font-serif hover:cursor-pointer transition-opacity `}
        >
          Papaya
        </div>
      </div>
      <SubNavigation router={publicRouter} showNav={showNav} />
      <SubNavigation
        title="My Channel"
        router={privateRouter}
        showNav={showNav}
      />
      <SubNavigation title="Subscriptions" router={[]} showNav={showNav} />
    </div>
  );
};
export default SideBar;
