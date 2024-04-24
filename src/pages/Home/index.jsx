import ListVideo from "../../layouts/ListVideo";
import NavBar from "../../layouts/NavBar";
import SideBar from "../../layouts/SideBar";
const Home = () => {
  return (
    <div className="flex">
      <SideBar></SideBar>
      <div>
        <NavBar />
        <ListVideo />
      </div>
    </div>
  );
};

export default Home;
