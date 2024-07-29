const TeamCard = ({ icon, name, description }) => {
  return (
    <>
      {name === "Sanfole" ? (
        <>
          <div className="w-[344px] h-[109px] rounded-[14px] bg-[#E3B748] pl-[26px] flex flex-row gap-[22px] items-center text-[#ffffff] cursor-pointer">
            <img width={68} height={68} src={icon} alt={`${icon}icon`} />
            <div className="flex flex-col gap-[6px] items-start">
              <h3 className="font-[600] text-[24px] leading-[24px] text-[#373737]">
                {name}
              </h3>
              <p className="font-[400] text-[14px] leading-[24px] opacity-40 text-[#000000]">
                {description}
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-fit h-[109px] flex flex-row gap-[22px] items-center text-[#ffffff] cursor-pointer">
            <img width={68} height={68} src={icon} alt={`${icon}icon`} />
            <div className="flex flex-col gap-[6px] items-start">
              <h3 className="font-[600] text-[24px] leading-[24px]">{name}</h3>
              <p className="font-[400] text-[14px] leading-[24px] opacity-40">
                {description}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TeamCard;
