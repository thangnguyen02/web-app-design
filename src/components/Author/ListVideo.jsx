import { AiOutlineCaretRight } from "react-icons/ai";
import video from "../../data/film.json";
import SubVideo from "./SubVideo";
const ListVideo = () => {
  return (
    <div className="p-auto min-h-[80vh] px-6">
      <div className="flex items-center text-white gap-4 my-5">
        <div className="font-bold text-[20px]">Videos</div>
        <AiOutlineCaretRight size={20} />
        <div className="font-semibold text-[18px]">Play All</div>
      </div>
      <div className="flex flex-wrap gap-6">
        {video.map((v) => (
          <SubVideo key={v.id} data={v} />
        ))}
      </div>
    </div>
  );
};

export default ListVideo;
