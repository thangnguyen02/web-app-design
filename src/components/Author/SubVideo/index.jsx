import { BiSolidVolumeMute } from "react-icons/bi";
import { MdOutlineVideoLibrary, MdOutlineWatchLater } from "react-icons/md";
import { PiClosedCaptioning } from "react-icons/pi";
import { SlOptionsVertical } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const SubVideo = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="group w-[18%] h-[12vw] rounded-[16px] border border-solid border-transparent transition duration-500 hover:scale-110  delay-100 hover:z-10 mt-6">
      <div className="relative">
        <img
          src={require(`../../../img/${data.thumbnail}`)}
          alt="Image 1"
          className="w-[100%] h-[9vw] object-cover rounded-t-[16px] object-center"
        />
        <div className="invisible group-hover:visible absolute bg-[#3c3d42] rounded-[5px] flex flex-wrap flex-col gap-1 py-2 items-center w-[10%] top-3 right-3 transition duration-1000 delay-300">
          <div className="cursor-pointer text-[#ffffff99] hover:text-white">
            <SlOptionsVertical size={10}></SlOptionsVertical>
          </div>
          <div className="line-border text-white my-1 "></div>
          <div className="cursor-pointer text-[#ffffff99] hover:text-white">
            <BiSolidVolumeMute size={10}></BiSolidVolumeMute>
          </div>
          <div className="line-border text-white my-1 "></div>
          <div className="cursor-pointer text-[#ffffff99] hover:text-white">
            <PiClosedCaptioning size={10}></PiClosedCaptioning>
          </div>
        </div>
        <p className="text-[13px] absolute bg-black text-white rounded-[5px] right-3 bottom-3 px-[10px] py-[5px]">
          {data.duration}
        </p>
      </div>
      <div className="content-card group-hover:bg-card-bg rounded-b-[16px] transition-colors duration-300 delay-100">
        <div className="flex flex-wrap pt-2 transition duration-500 delay-100">
          <div className="w-[100%] mb-3 px-2 py-2">
            <p
              className="text-white font-bold text-[14px] hover:cursor-pointer"
              onClick={() => navigate(`/${data.id}`)}
            >
              {data.title}
            </p>
            <p className="text-[#ffffff99] text-[12px] font-medium">
              {data.view} views - {data.dateAgo} ago.
            </p>
          </div>
        </div>
        {/* <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
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
        </div> */}
      </div>
    </div>
  );
};

export default SubVideo;
