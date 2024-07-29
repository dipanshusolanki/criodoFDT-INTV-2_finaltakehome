const ChooseCard = ({ icon, heading, description }) => {
  return (
    <div className="w-[359px] h-[377px] rounded-[14px] border-[1.4px] border-[#FFFFFF1A] flex flex-col gap-[23px] items-start pl-[24px] pt-[28px] hover:bg-[#FFFFFF1A]">
      <img width={101} height={101} src={icon} alt="cardicon" />
      <div className="flex flex-col items-start gap-[26px]">
        <h3 className="font-[600] text-[24px] leading-[24px]">{heading}</h3>
        <p className="max-w-[293px] max-h-[69px] opacity-30 font-[500] text-[14px] leading-[23px]">
          {description}
        </p>
      </div>
      <button className="py-[10px] px-[24px] font-[600] text-[14px] leading-[23px] text-black bg-[#E3B748] rounded-[24px]  h-[43px]">
        Read More
      </button>
    </div>
  );
};

export default ChooseCard;
