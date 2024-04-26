import ListVideo from "../../layouts/ListVideo";
import NavBar from "../../layouts/NavBar";
import SideBar from "../../layouts/SideBar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import axiosInstant from "../../config/axiosConfig";
import Loading from "../../Shared/Loading/Loading";
const Home = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const data = await axiosInstant.get("/user/123", { name: 123 });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const { isShow } = useSelector((state) => state.ShowNavSlice);
  const { isLoading } = useSelector((state) => state.LoadingSlice);
  console.log(isLoading);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap backgroundApp">
          <SideBar></SideBar>
          <div
            className={`${
              isShow ? "w-[84%]" : "w-[94%]"
            } transition-all duration-100 delay-100 ease-in`}
          >
            <NavBar />
            <ListVideo />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
