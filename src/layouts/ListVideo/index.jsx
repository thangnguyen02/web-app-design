import "./index.css";
import Card from "../../components/Card";
import category from "../../data/category.json";
import video from "../../data/film.json";
import { useState } from "react";
const ListVideo = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="w-[100%] px-6 ">
      <div className="category-border">
        <div className="w-[100%] h-10 pl-4 rounded-[20px] shadow border border-transparent backdrop-blur-[20px] justify-around items-center gap-2 inline-flex flex-wrap ">
          {category.map((c) => (
            <div
              key={c.id}
              className={`min-w-20 px-4 h-10 py-1 justify-center items-center gap-1 flex cursor-pointer ${
                active == c.id ? "category-active" : ""
              }`}
              onClick={() => setActive(c.id)}
            >
              <div className="text-white text-opacity-60 text-[15px] font-semibold font-['SF Pro Text'] leading-snug">
                {c.category}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" flex justify-between flex-wrap mx-5 pb-32">
        {video.map((v) => (
          <Card key={v.id} data={v} />
        ))}
      </div>
    </div>
  );
};

export default ListVideo;
