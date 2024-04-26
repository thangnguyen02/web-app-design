import "./index.css";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { BiSolidVolumeMute } from "react-icons/bi";
import { PiClosedCaptioning } from "react-icons/pi";
import { SlOptionsVertical } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
const Card = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="group w-[32%] h-[22vw] rounded-[16px] border border-solid border-transparent transition duration-500 hover:scale-110  delay-100 hover:z-10 mt-4">
      <div className="relative">
        <img
          src={require(`../../img/${data.thumbnail}`)}
          alt="Image 1"
          className="w-[100%] h-[12vw] object-cover rounded-t-[16px] object-center"
        />
        <div className="invisible group-hover:visible absolute bg-[#3c3d42] rounded-[5px] flex flex-wrap flex-col gap-1 py-2 items-center w-[8%] top-3 right-3 transition duration-1000 delay-300">
          <div className="cursor-pointer text-[#ffffff99] hover:text-white">
            <SlOptionsVertical size={20}></SlOptionsVertical>
          </div>
          <div className="line-border text-white my-1 "></div>
          <div className="cursor-pointer text-[#ffffff99] hover:text-white">
            <BiSolidVolumeMute size={20}></BiSolidVolumeMute>
          </div>
          <div className="line-border text-white my-1 "></div>
          <div className="cursor-pointer text-[#ffffff99] hover:text-white">
            <PiClosedCaptioning size={20}></PiClosedCaptioning>
          </div>
        </div>
        <p className="text-[13px] absolute bg-black text-white rounded-[5px] right-3 bottom-3 px-[10px] py-[5px]">
          {data.duration}
        </p>
      </div>
      <div className="content-card group-hover:bg-card-bg rounded-b-[16px] transition-colors duration-300 delay-100">
        <div className="flex flex-wrap pt-4 transition duration-500 delay-100">
          <div className="mt-[10px] flex w-[20%] justify-center mb-3">
            <img
              src={require(`../../img/${data.author.thumbnail}`)}
              alt="author"
              className="w-[40px] h-[40px] rounded-full"
            />
          </div>
          <div className="w-[80%] mb-3">
            <p
              className="text-white font-bold text-[20px] hover:cursor-pointer"
              onClick={() => navigate(`/${data.id}`)}
            >
              {data.title}
            </p>
            <p
              className="text-[#ffffff99] text-[16px] uppercase font-semibold my-2 hover:cursor-pointer hover:text-white"
              onClick={() => {
                navigate("/author");
              }}
            >
              {data.author.name}
            </p>
            <p className="text-[#ffffff99] text-[16px] font-medium">
              {data.view} views - {data.dateAgo} ago.
            </p>
          </div>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          <div className="flex items-center justify-items-center flex-col w-[100%] h-[100px] actionHover">
            <div className="font-semibold flex items-center text-violet-100 text-opacity-60 py-2 hover:text-white hover:cursor-pointer">
              <MdOutlineWatchLater size={22} />
              <div className="ml-4 text-[18px]">Watch later</div>
            </div>
            <div className="line-border text-white my-1"></div>
            <div className="font-semibold flex items-center text-violet-100 text-opacity-60 py-2  hover:text-white hover:cursor-pointer">
              <MdOutlineVideoLibrary size={22} />
              <div className="ml-4 text-[18px]">Add to queue</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
