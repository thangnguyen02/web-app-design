import "./index.css";
import { IoVideocamOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
const NavBar = () => {
  return (
    <>
      <div className="flex justify-between py-3 px-5">
        <div></div>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            className="absolute left-2 top-2"
          >
            <g id="Search">
              <path
                id="Icon / magnifyingglass"
                d="M10.9007 15.7086C11.9649 15.7086 12.9464 15.3677 13.7493 14.7996L16.77 17.7917C16.9102 17.9306 17.0951 18 17.2926 18C17.7069 18 18 17.6844 18 17.2804C18 17.091 17.9363 16.9079 17.7961 16.7754L14.7945 13.7959C15.4254 12.9753 15.8014 11.959 15.8014 10.8543C15.8014 8.18411 13.5964 6 10.9007 6C8.21136 6 6 8.1778 6 10.8543C6 13.5245 8.20499 15.7086 10.9007 15.7086ZM10.9007 14.6607C8.79766 14.6607 7.05789 12.9374 7.05789 10.8543C7.05789 8.77117 8.79766 7.04787 10.9007 7.04787C13.0037 7.04787 14.7435 8.77117 14.7435 10.8543C14.7435 12.9374 13.0037 14.6607 10.9007 14.6607Z"
                fill="#EBEBF5"
                fill-opacity="0.6"
              />
            </g>
          </svg>
          <input
            type="text"
            placeholder="Enter to search"
            name="search"
            className="input-search border border-solid border-[#FFFFFF80] pl-[40px] py-[8px] w-[500px] rounded-[40px] text-white text-[20px] focus:outline-none"
          />
        </div>
        <div className="flex gap-4  items-center ">
          <div>
            <IoVideocamOutline className="text-white text-opacity-60 text-[24px] font-bold hover:cursor-pointer" />
          </div>
          <div>
            <IoIosNotificationsOutline className="text-white text-opacity-60 text-[24px] font-bold hover:cursor-pointer" />
          </div>
          <div className="w-8 h-8 px-[9px] py-1 bg-cyan-400 rounded-[40px] justify-center items-center inline-flex hover:cursor-pointer">
            <div className="text-center text-white text-xl font-medium font-['SF Pro Text']">
              A
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
