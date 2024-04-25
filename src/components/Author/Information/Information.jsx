import { IoIosNotificationsOutline } from "react-icons/io";
import img from "../../../img/img4.png";
import { FaAngleDown } from "react-icons/fa6";
const Information = () => {
  return (
    <div className="w-full relative">
      <img
        src={img}
        alt="alo"
        className="w-full h-[24vw] object-cover object-[center_top] rounded-t-[16px] "
      />
      <div className="absolute bottom-0 w-full flex justify-between items-center px-6 informationBg">
        <div className="flex items-start my-3">
          <img
            src={require(`../../../img/author1.jfif`)}
            alt="author"
            className="w-[40px] h-[40px] rounded-full"
          />
          <div className="ml-3">
            <p className="text-white text-[24px] font-semibold hover:cursor-pointer hover:text-white">
              ThangNH
            </p>
            <p className="text-[#ffffff99] text-[14px] font-semibold hover:cursor-pointer hover:text-white">
              @ThangNH
            </p>
            <p className="text-[#ffffff99] text-[14px] font-medium">
              891 K Subscribers
            </p>
          </div>
        </div>
        <div className="flex rounded-[20px] h-[40px] cursor-pointer">
          <div className="join text-[20px] text-[#ffffff99] px-6 py-3 rounded-l-[20px] font-semibold flex items-center">
            Join
          </div>

          <div className="subcriber text-[16px] text-white px-6 py-3 rounded-r-[20px] font-semibold flex items-center gap-2">
            <IoIosNotificationsOutline size={20} />
            Subscribed
            <FaAngleDown size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
