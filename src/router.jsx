import Home from "./pages/Home";
import DetailVideo from "./pages/DetailVideo";
import Author from "./pages/Author";
import Error from "./Shared/Error/Error";
const router = [
  {
    id: 1,
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    id: 2,
    path: "/shorts",
    name: "Shorts",
    element: <Home />,
  },
  {
    id: 3,
    path: "/subscriptions",
    name: "Subscriptions",
    element: <Home />,
  },
  {
    id: 4,
    path: "/music",
    name: "Papaya Music",
    element: <Home />,
  },
  {
    id: 5,
    path: "/library",
    name: "Library",
    element: <Home />,
  },
  {
    id: 6,
    path: "/history",
    name: "History",
    element: <Home />,
  },
  {
    id: 7,
    path: "/yourVideo",
    name: "Your Video",
    element: <Home />,
  },
  {
    id: 8,
    path: "/watchLater",
    name: "Watch Later",
    element: <Home />,
  },
  {
    id: 9,
    path: "/downloads",
    name: "Downloads",
    element: <Home />,
  },
  {
    id: 12,
    path: "/404",
    name: "Error",
    element: <Error />,
  },
  {
    id: 10,
    path: "/:id",
    name: "Details",
    element: <DetailVideo />,
  },
  ,
  {
    id: 11,
    path: "/author",
    name: "Details",
    element: <Author />,
  },
];
export { router };
