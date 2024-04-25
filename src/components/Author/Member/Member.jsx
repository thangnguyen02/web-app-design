import img from "../../../img/author6.jfif";
const Member = () => {
  return (
    <div className="flex justify-between w-full px-6 py-10 border-b-2 border-[#8015a734]">
      <div>
        <div className="text-white text-[20px] font-semibold">Our Member</div>
        <div className="text-[#ffffff99] text-[18px]">
          Thank you channel members
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex gap-4 items-center">
          <img
            src={img}
            alt="member"
            className="w-[40px] h-[40px] rounded-full border-2 border-[#61368f] cursor-pointer"
          />
          <img
            src={img}
            alt="member"
            className="w-[40px] h-[40px] rounded-full border-2 border-[#61368f] cursor-pointer"
          />
          <img
            src={img}
            alt="member"
            className="w-[40px] h-[40px] rounded-full border-2 border-[#61368f] cursor-pointer"
          />
          <div className="w-[40px] h-[40px] rounded-full border-2 border-[#61368f] text-white items-center justify-center flex cursor-pointer">
            +11
          </div>
        </div>
        <button className="join-button px-4 py-2  rounded-[20px] w-fit h-fit font-bold text-blue-300">
          Join
        </button>
      </div>
    </div>
  );
};

export default Member;
