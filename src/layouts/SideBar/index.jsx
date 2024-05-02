import "./index.css";
import { CiCircleList } from "react-icons/ci";
import { privateRouter, publicRouter } from "../../common/const";
import SubNavigation from "../../components/SubNavigation";
import { useDispatch, useSelector } from "react-redux";
import { setShowNav } from "../../store/ShowNavSlice";
const SideBar = () => {
  const { isShow } = useSelector((state) => state.ShowNavSlice);
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        isShow ? "w-[16%]" : "w-[6%]"
      } sidebar pt-12 transition-all duration-100 delay-100 ease-in h-[100vh] overflow-x-hidden overflow-y-auto`}
    >
      <div className="flex gap-2 items-center px-6 py-2">
        <div
          className="hover:cursor-pointer"
          onClick={() => dispatch(setShowNav(!isShow))}
        >
          <CiCircleList size={20} color=" #EBEBF599" />
        </div>

        <div
          className={`${
            isShow
              ? "opacity-100 duration-100 delay-300 ease-out"
              : "opacity-0 duration-0 delay-100 ease-in"
          }  text-white text-[34px] font-[700] font-serif hover:cursor-pointer transition-opacity `}
        >
          Papaya
        </div>
      </div>
      <SubNavigation router={publicRouter} />
      <SubNavigation title="My Channel" router={privateRouter} />
      <SubNavigation title="Subscriptions" router={[]} />
    </div>
  );
};
export default SideBar;
