const Subscribe = () => {
  return (
    <div className="container font-sans text-white max-w-[1245px] mx-auto pt-[108px] pb-[242px]">
      <div className="w-full h-[356px] flex flex-col gap-[42px] justify-center items-center bg-[#47474780]">
        <h2 className="font-[500] text-[55px] leading-[76px] text-center ">
          Subscribe Our Newsletter
        </h2>
        <div className="flex gap-[9px] w-fit h-fit">
          <input
            type="text"
            id="name"
            placeholder="Name:"
            className="bg-[#E4E4E4] pl-[23px] rounded-tl-[8px] rounded-bl-[8px] w-[276px] h-[53px] placeholder:italic text-black"
          />
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            className="bg-[#E4E4E4] pl-[14px] w-[276px] h-[53px] placeholder:italic text-black"
          />
          <button className="bg-[#E3B748] w-[116px] h-[53px] rounded-tr-[8px] rounded-br-[8px] font-[700] text-[14px] leading-[20px] text-center text-[#000000]">
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
