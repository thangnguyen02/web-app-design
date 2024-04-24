import { IoHomeOutline } from "react-icons/io5";
import ActiveMenu from "../../assets/svg/ActiveMenu";
import { GoVideo } from "react-icons/go";
import { MdOutlineMusicVideo } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
const SubNavigation = ({ title, router, showNav }) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      {title && showNav && (
        <div>
          <div
            className={`${
              showNav
                ? "opacity-100 duration-100 delay-300 ease-out"
                : "opacity-0 duration-0 delay-100 ease-in"
            } text-white text-opacity-50 text-[13px] font-semibold font-['SF Pro Text'] uppercase transition-opacity leading-[16.90px] px-3 py-3`}
          >
            {title}
          </div>
        </div>
      )}
      {router.map((r) => (
        <div
          key={r.id}
          className={`${
            r.path == location.pathname ? "tab-sidebar" : ""
          } cursor-pointer transition duration-200 delay-75 hover:scale-105 group relative z-40`}
          onClick={() => navigate(r.path)}
        >
          {!showNav && (
            <div className="absolute invisible group-hover:visible m-auto left-[60px] top-0 bottom-0 text-white w-full h-fit flex justify-center items-center z-50 bg-black rounded-[16px] py-1 shadow-sm shadow-blue-500/50">
              {r.name}
            </div>
          )}
          <div
            className={`${
              r.path == window.location.pathname
                ? "text-white"
                : "text-violet-100 text-opacity-60"
            } flex items-center gap-2 px-6 py-2`}
          >
            <div className="relative w-[40px] h-[40px] mx-0 my-0 flex items-center justify-center">
              <div className="active-icon invisible  m-auto">
                <ActiveMenu></ActiveMenu>
              </div>
              {r.icon}
            </div>

            <div
              className={`${
                showNav
                  ? "opacity-100 duration-100 delay-300 ease-out"
                  : "opacity-0 duration-0 delay-100 ease-in"
              } text-[17px] font-semibold pl-2 transition-opacity `}
            >
              {r.name}
            </div>
          </div>
          <div className="line-border"></div>
        </div>
      ))}
    </>
  );
};

export default SubNavigation;
