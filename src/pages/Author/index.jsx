import Information from "../../components/Author/Information/Information";
import ListVideo from "../../components/Author/ListVideo";
import Member from "../../components/Author/Member/Member";
import Menu from "../../components/Author/Menu/Menu";
import NavBar from "../../layouts/NavBar";
import SideBar from "../../layouts/SideBar";
import { useSelector } from "react-redux";
const Author = () => {
  const { isShow } = useSelector((state) => state.ShowNavSlice);
  return (
    <div className="flex backgroundApp">
      <SideBar></SideBar>
      <div
        className={`${
          isShow ? "w-[84%]" : "w-[94%]"
        } transition-all duration-100 delay-100 ease-in`}
      >
        <NavBar />
        <Information />
        <Menu />
        <Member />
        <ListVideo />
      </div>
    </div>
  );
};

export default Author;
