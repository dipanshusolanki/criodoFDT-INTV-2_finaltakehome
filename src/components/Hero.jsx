/* eslint-disable react/no-unescaped-entities */
import HeroImage from "../assets/heroImage.svg";
import HeroInputIcon from "../assets/heroInputIcon.svg";

const Hero = () => {
  return (
    <>
      <div className="flex justify-between items-center pt-16 pb-48 font-sans text-white container mx-auto max-w-[1134px]">
        <div className="flex flex-col gap-9">
          <h1 className="font-[500] text-heroheading max-w-[571px] leading-[97px]]">
            You don't have to
            <span className="font-[700]"> Fight them Alone.</span>
          </h1>
          <p className="font-[500] text-lg leading-[30px] text-[#fff] opacity-30 max-w-[560px] text-]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
          <div className="relative w-fit">
            <img
              className="absolute left-[28px] top-[26px] z-[2] w-[22px] h-[22px] opacity-10"
              src={HeroInputIcon}
              alt="heroinputicon"
            />
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-[438px] h-[74px] rounded-[43px] bg-[#292929] placeholder-white placeholder-opacity-10 font-[500] text-[16px] leading-[26px] pl-[62px]"
            />
            <button className="absolute top-[6px] right-[6px] w-[137px] h-[62px] font-[600] text-[16px] leading-[26px] text-[#000] bg-[#e2b648] rounded-[43px]">
              Let's Talk
            </button>
          </div>
        </div>
        <img src={HeroImage} width={468} height={545} alt="heroimage" />
      </div>
    </>
  );
};

export default Hero;
