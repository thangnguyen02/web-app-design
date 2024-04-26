import ListVideo from "../../layouts/ListVideo";
import NavBar from "../../layouts/NavBar";
import SideBar from "../../layouts/SideBar";
import { useSelector } from "react-redux";
const Home = () => {
  const { isShow } = useSelector((state) => state.ShowNavSlice);
  return (
    <div className="flex flex-wrap">
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
  );
};

export default Home;
