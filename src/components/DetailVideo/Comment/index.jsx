import { PiSortAscendingBold } from "react-icons/pi";
import img from "../../../img/author6.jfif";
import { FaCommentDots } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { BiLike, BiDislike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
const listComment = [
  {
    id: 1,
    author: { name: "ThangNH", thumbnail: "author1.jfif" },
    content: "Video khá hay và chất lượng",
    totalLike: 100,
    totalDislike: 4,
    time: "1h ago",
    action: "Like",
  },
  {
    id: 2,
    author: { name: "ThangNH2", thumbnail: "author1.jfif" },
    content: "Video khá chán",
    totalLike: 10,
    totalDislike: 30,
    time: "1 month ago",
    action: "DisLike",
  },
  {
    id: 3,
    author: { name: "ThangNH2", thumbnail: "author1.jfif" },
    content: "Video khá chán that",
    totalLike: 10,
    totalDislike: 30,
    time: "1 month ago",
    action: null,
  },
];
const Comment = () => {
  return (
    <div className="mt-6 border-t">
      <div className="flex items-center gap-6">
        <p className="text-white font-bold text-[28px]">
          {listComment.length} Comments
        </p>
        <div className="text-white text-[20px] font-semibold flex items-center">
          <PiSortAscendingBold size={30} />
          Sort by
        </div>
      </div>
      <div className="formComment my-6">
        <form onSubmit={() => {}}>
          <div className="flex items-center gap-5">
            <div>
              <img
                src={img}
                alt="author"
                className="w-[50px] h-[50px] rounded-full"
              />
            </div>
            <div className="w-[100%]">
              <p className="text-white text-[20px] font-bold">ThangNH</p>
              <div className="flex items-end gap-3 mt-2">
                <input
                  className="text-[20px] py-1 w-full bg-transparent placeholder:italic placeholder:text-[#7d7a7aab] border-b border-[#89848499] text-[#7d7a7aab] focus:outline-none  focus:text-[#ffffff99] px-2 focus:border-b focus:border-white"
                  placeholder="Enter Your Comment"
                />
                <button type="submit" className="text-white justify-items-end">
                  <FaCommentDots size={30} />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="listComment mt-5">
        {listComment.map((comment) => (
          <div className="group my-5" key={comment.id}>
            <div className="flex gap-5">
              <div>
                <img
                  src={require(`../../../img/${comment.author.thumbnail}`)}
                  alt="author"
                  className="w-[50px] h-[50px] rounded-full"
                />
              </div>
              <div className="w-[90%]">
                <div className="flex items-center gap-2">
                  <p className="text-white text-[20px] font-semibold cursor-pointer">
                    @{comment.author.name}
                  </p>
                  <p className="text-[#ffffff99] text-[16px]  cursor-pointer hover:text-white">
                    {comment.time}
                  </p>
                </div>

                <div className="">
                  <div className="text-[18px] w-full bg-transparent text-white">
                    {comment.content}
                  </div>
                  <div className="flex gap-5 ml-4 mt-2">
                    <div className="text-white flex gap-1">
                      {comment.action == "Like" ? (
                        <BiSolidLike size={24} />
                      ) : (
                        <BiLike size={24} />
                      )}
                      {comment.totalLike}
                    </div>
                    <div className="text-white flex gap-1">
                      {comment.action == "DisLike" ? (
                        <BiSolidDislike size={24} />
                      ) : (
                        <BiDislike size={24} />
                      )}
                      {comment.totalDislike}
                    </div>
                  </div>
                </div>
              </div>
              <div className="invisible group-hover:visible px-1 py-1 m-2 rounded-[5px] bg-transparent w-fit h-fit text-white cursor-pointer">
                <SlOptionsVertical size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
