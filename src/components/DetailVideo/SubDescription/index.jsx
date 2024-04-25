import "./index.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { SlOptions } from "react-icons/sl";
import Comment from "../Comment";
const SubDescription = ({ data }) => {
  return (
    <div className="px-3 py-2 subDes">
      <p className="text-white font-bold text-[24px]">{data.title}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center my-3">
          <img
            src={require(`../../../img/${data.author.thumbnail}`)}
            alt="author"
            className="w-[50px] h-[50px] rounded-full"
          />
          <div className="ml-3">
            <p className="text-[#ffffff99] text-[16px] uppercase font-semibold hover:cursor-pointer hover:text-white">
              {data.author.name}
            </p>
            <p className="text-[#ffffff99] text-[16px] font-medium mt-1">
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
        <div className="join flex rounded-[20px] h-[40px] ">
          <div className="text-[16px] text-[#ffffff99] px-6 py-3 flex items-center gap-2">
            <SlLike /> 890
          </div>
          <div className="line-border-hoz"></div>
          <div className="text-[16px] text-[#ffffff99] px-6 py-3 flex items-center gap-2">
            <SlDislike />
          </div>
          <div className="line-border-hoz"></div>

          <div className="text-[16px] text-[#ffffff99] px-6 py-3 flex items-center gap-2">
            <IoIosNotificationsOutline size={20} />
            Share
          </div>
          <div className="line-border-hoz"></div>

          <div className="text-[20px] text-[#ffffff99] px-6 py-3 flex items-center">
            <SlOptions />
          </div>
        </div>
      </div>
      <div className="description min-h-[50px] my-6">
        <p className="text-[#ffffff99] text-[16px] font-medium my-3">
          {data.view} views - {data.dateAgo} ago.
        </p>
        <p className="text-[#ffffff99] text-[16px] font-medium">
          Design a Web app design inspire by Discord and Slack in the Figma
          design tool.
        </p>
        <p className="text-[#ffffff99] text-[16px] font-medium">
          Sponsored by &nbsp;
          <span className="underline cursor-pointer">https://reve.app</span> -
          create beautiful animated assets for app,sites and games
        </p>
        <div className="text-white text-[18px] font-bold hover:decoration-1 hover:underline cursor-pointer w-fit">
          Show More
        </div>
      </div>
      <Comment id={data.id} />
    </div>
  );
};

export default SubDescription;
