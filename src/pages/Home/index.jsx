import ListVideo from "../../layouts/ListVideo";
import NavBar from "../../layouts/NavBar";
import SideBar from "../../layouts/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import axiosInstant from "../../config/axiosConfig";
import Loading from "../../Shared/Loading/Loading";
import { setLoading } from "../../store/LoadingSlice";
const Home = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const fetchData = async () => {
    dispatch(setLoading(true));
    const data = await axiosInstant.get("/user");

    setTimeout(() => dispatch(setLoading(false)), 500);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  const { isShow } = useSelector((state) => state.ShowNavSlice);
  const { isLoading } = useSelector((state) => state.LoadingSlice);
  return (
    <Loading isLoading={isLoading}>
      <div className="flex flex-wrap backgroundApp overflow-hidden">
        <SideBar></SideBar>
        <div
          className={`${
            isShow ? "w-[84%]" : "w-[94%]"
          } transition-all duration-100 delay-100 ease-in h-[100vh] overflow-y-auto`}
        >
          <NavBar />
          <ListVideo />
        </div>
      </div>
    </Loading>
  );
};

export default Home;
