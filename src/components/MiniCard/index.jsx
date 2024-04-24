import img from "../../img/img1.png";
import "./index.css";
const MiniCard = ({ data }) => {
  return (
    <div className="flex group px-1 py-2 mt-3 rounded-[16px] ">
      <div className="w-[40%] relative">
        <img
          src={require(`../../img/${data.thumbnail}`)}
          alt="thumbnail"
          className="w-full h-[8vw] object-cover rounded-l-[16px]"
        />
        <p className="text-[13px] absolute bg-black text-white rounded-[5px] right-3 bottom-3 px-[10px] py-[5px]">
          {data.duration}
        </p>
      </div>
      <div className="w-[60%] group-hover:bg-card-bg rounded-r-[16px] px-3 py-2 miniContent-card">
        <p className="text-white font-bold text-[18px] hover:cursor-pointer">
          {data.title}
        </p>
        <p className="text-[#ffffff99] text-[14px] uppercase font-semibold my-2 hover:cursor-pointer hover:text-white">
          {data.author.name}
        </p>
        <p className="text-[#ffffff99] text-[14px] font-medium">
          {data.view} views - {data.dateAgo} ago.
        </p>
      </div>
    </div>
  );
};

export default MiniCard;
