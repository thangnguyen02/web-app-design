import { useState } from "react";
import { ImHome } from "react-icons/im";
import { GoVideo } from "react-icons/go";
import { CiCamera } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { LuUserSquare } from "react-icons/lu";
import { IoMdPeople } from "react-icons/io";
import { RiPlayList2Fill } from "react-icons/ri";
const menuData = [
  {
    id: 1,
    name: "Home",
    icon: <ImHome size={18} />,
    path: "/",
  },
  {
    id: 2,
    name: "Video",
    icon: <GoVideo size={18} />,
    path: "/",
  },
  {
    id: 3,
    name: "Shorts",
    icon: <GoVideo size={18} />,
    path: "/",
  },
  {
    id: 4,
    name: "Live",
    icon: <CiCamera size={18} />,
    path: "/",
  },
  {
    id: 5,
    name: "Playlist",
    icon: <RiPlayList2Fill size={18} />,
    path: "/",
  },
  {
    id: 6,
    name: "Community",
    icon: <IoMdPeople size={18} />,
    path: "/",
  },
  {
    id: 7,
    name: "Channels",
    icon: <LuUserSquare size={18} />,
    path: "/",
  },
  {
    id: 8,
    name: "About",
    icon: <CiCircleQuestion size={18} />,
    path: "/",
  },
];

const Menu = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="flex px-6 items-center gap-8 text-[18px] category-border menu mt-6 border-b-2 border-[#8015a734]">
      {menuData.map((m) => (
        <div
          key={m.id}
          className={`flex items-center text-[#ffffff99] gap-2 ${
            active == m.id ? "active-Menu" : ""
          } px-6 py-2 cursor-pointer`}
          onClick={() => setActive(m.id)}
        >
          {m.icon}
          <div className="font-semibold">{m.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
