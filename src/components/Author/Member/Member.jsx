import img from "../../../img/author6.jfif";
const Member = () => {
  return (
    <div className="flex justify-around">
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
            className="w-[40px] h-[40px] rounded-full border-2 border-[#61368f]"
          />
          <img
            src={img}
            alt="member"
            className="w-[40px] h-[40px] rounded-full border-2 border-[#61368f]"
          />
          <img
            src={img}
            alt="member"
            className="w-[40px] h-[40px] rounded-full border-2 border-[#61368f]"
          />
        </div>
        <button className="px-4 py-2  rounded-[20px] w-fit h-fit font-bold text-blue-300">
          Join
        </button>
      </div>
    </div>
  );
};

export default Member;
