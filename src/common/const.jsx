import { GoVideo } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import {
  MdOutlineHistory,
  MdOutlineMusicVideo,
  MdOutlineOndemandVideo,
  MdOutlineWatchLater,
  MdSubscriptions,
  MdVideoLibrary,
} from "react-icons/md";
import { TfiDownload } from "react-icons/tfi";

const publicRouter = [
  {
    id: 1,
    path: "/",
    icon: (
      <IoHomeOutline
        size={16}
        className="absolute m-auto left-0 right-0 top-0 bottom-0 "
      />
    ),
    name: "Home",
  },
  {
    id: 2,
    path: "/shorts",
    icon: (
      <GoVideo
        size={16}
        className="absolute m-auto left-0 right-0 top-0 bottom-0"
      />
    ),
    name: "Shorts",
  },
  {
    id: 3,
    path: "/subscriptions",
    icon: (
      <MdSubscriptions
        size={16}
        className="absolute m-auto left-0 right-0 top-0 bottom-0"
      />
    ),
    name: "Subscriptions",
  },
  {
    id: 4,
    path: "/music",
    icon: (
      <MdOutlineMusicVideo
        size={16}
        className="absolute m-auto left-0 right-0 top-0 bottom-0"
      />
    ),
    name: "Papaya Music",
  },
];
const privateRouter = [
  {
    id: 5,
    path: "/library",
    icon: (
      <MdVideoLibrary
        size={16}
        className="absolute m-auto left-0 right-0 top-0 bottom-0"
      />
    ),
    name: "Library",
  },
  {
    id: 6,
    path: "/history",
    icon: (
      <MdOutlineHistory
        size={16}
        className="absolute m-auto left-0 right-0 top-0 bottom-0"
      />
    ),
    name: "History",
  },
  {
    id: 7,
    path: "/yourVideo",
    icon: (
      <MdOutlineOndemandVideo
        size={16}
        className="absolute m-auto left-0 right-0 top-0 bottom-0"
      />
    ),
    name: "Your Video",
  },
  {
    id: 8,
    path: "/watchLater",
    icon: (
      <MdOutlineWatchLater
        size={16}
        className="absolute m-auto left-0 right-0 top-0 bottom-0"
      />
    ),
    name: "Watch Later",
  },
  {
    id: 9,
    path: "/downloads",
    icon: (
      <TfiDownload
        size={16}
        className="absolute m-auto left-0 right-0 top-0 bottom-0"
      />
    ),
    name: "Downloads",
  },
];

export { publicRouter, privateRouter };
