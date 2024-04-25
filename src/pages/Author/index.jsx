import Information from "../../components/Author/Information/Information";
import ListVideo from "../../components/Author/ListVideo";
import Member from "../../components/Author/Member/Member";
import Menu from "../../components/Author/Menu/Menu";
import NavBar from "../../layouts/NavBar";
import SideBar from "../../layouts/SideBar";

const Author = () => {
  return (
    <div className="flex">
      <SideBar></SideBar>
      <div className="w-[84%]">
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
