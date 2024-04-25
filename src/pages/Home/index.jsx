import ListVideo from "../../layouts/ListVideo";
import NavBar from "../../layouts/NavBar";
import SideBar from "../../layouts/SideBar";
const Home = () => {
  return (
    <div className="flex flex-wrap">
      <SideBar></SideBar>
      <div className="w-[84%]">
        <NavBar />
        <ListVideo />
      </div>
    </div>
  );
};

export default Home;
