import { useParams } from "react-router-dom";
import data from "../../data/film.json";
import NavBar from "../../layouts/NavBar";
import SubDescription from "../../components/DetailVideo/SubDescription";
import category from "../../data/category.json";
import video from "../../data/film.json";
import { useEffect, useState } from "react";
import "./index.css";
import MiniCard from "../../components/MiniCard";
import { useDispatch, useSelector } from "react-redux";
import axiosInstant from "../../config/axiosConfig";
import { setLoading } from "../../store/LoadingSlice";
import Loading from "../../Shared/Loading/Loading";
const Nae = () => {
  const { id } = useParams();
  const dataVideo = data.find((d) => d.id == id);
  const [active, setActive] = useState(1);
  const { isLoading } = useSelector((state) => state.LoadingSlice);
  const dispatch = useDispatch();
  const fetchData = async () => {
    dispatch(setLoading(true));
    const data = await axiosInstant.get("/user/123");
    if (data) {
      setTimeout(() => dispatch(setLoading(false)), 500);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Loading isLoading={isLoading}>
      <div className=" w-full h-full backgroundApp">
        <NavBar></NavBar>
        <div className="flex">
          <div className="w-[70%] px-5 mt-2">
            <img
              src={require(`../../img/${dataVideo.thumbnail}`)}
              alt="anh"
              className="w-[100%] h-[34vw] object-cover object-center rounded-t-[10px]"
            />
            <SubDescription data={dataVideo} />
          </div>
          <div className="w-[30%] px-1 ">
            <div className=" w-[100%]  ">
              <div className="category-border">
                <div className="categoryItemScroll w-[100%] h-10  rounded-[20px] overflow-x-auto overflow-y-hidden max-w-[100%] shadow border border-transparent backdrop-blur-[20px] justify-around items-center gap-2 inline-flex ">
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
            </div>
            <div>
              {video.map((v) => (
                <MiniCard key={v.id} data={v} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Loading>
  );
};

export default Nae;
