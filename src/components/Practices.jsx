import Image1 from "../assets/gridimage1.png";
import Image2 from "../assets/gridimage2.png";
import Image3 from "../assets/gridimage3.png";
import Image4 from "../assets/gridimage4.png";
import Image5 from "../assets/gridimage5.png";
import Image6 from "../assets/gridimage6.png";

const Practices = () => {
  return (
    <div className="container font-sans text-white pt-[90px] pb-[93px] max-w-[1134px] mx-auto flex flex-col gap-[65px] items-center">
      <h2 className="font-[600] text-[54px] leading-[77px] text-white">
        Area of Practices
      </h2>
      <div className="flex flex-col gap-[30px]">
        <div className="grid grid-cols-[752px_358px] gap-[30px]">
          <div className="relative h-[342px] rounded-[14px]">
            <img
              src={Image1}
              alt="Business Law"
              className="w-full h-full object-cover rounded-[14px]"
            />
            <div className=" rounded-[14px] absolute bottom-[41px] left-[286px] bg-opacity-70">
              <span className="font-[600] text-[24px] leading-[24px] text-[#fffbf2]">
                BUSINESS LAW
              </span>
            </div>
          </div>
          <div className="relative h-[342px] rounded-[14px]">
            <img
              src={Image2}
              alt="Partnership Law"
              className="w-full h-full object-cover rounded-[14px]"
            />
            <div className="rounded-[14px] absolute bottom-[41px] left-[81px] bg-opacity-70">
              <span className="font-[600] text-[24px] leading-[24px] text-[#fffbf2]">
                PARTNERSHIP LAW
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[358px_752px] gap-[30px]">
          <div className="relative h-[342px] rounded-[14px]">
            <img
              src={Image3}
              alt="Real Estate Law"
              className="w-full h-full object-cover rounded-[14px]"
            />
            <div className="rounded-[14px] absolute bottom-[41px] left-[71px] bg-opacity-70">
              <span className="font-[600] text-[24px] leading-[24px] text-[#fffbf2]">
                REAL ESTATE LAW
              </span>
            </div>
          </div>
          <div className="relative h-[342px] rounded-[14px]">
            <img
              src={Image4}
              alt="Business Law"
              className="w-full h-full object-cover rounded-[14px]"
            />
            <div className="rounded-[14px] absolute bottom-[41px] left-[286px] bg-opacity-70">
              <span className="font-[600] text-[24px] leading-[24px] text-[#fffbf2]">
                BUSINESS LAW
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[752px_358px] gap-[30px]">
          <div className="relative h-[342px] rounded-[14px]">
            <img
              src={Image5}
              alt="Landlord Disputes"
              className="w-full h-full object-cover rounded-[14px]"
            />
            <div className="rounded-[14px] absolute bottom-[41px] left-[245px] bg-opacity-70">
              <span className="font-[600] text-[24px] leading-[24px] text-[#fffbf2]">
                LANDLORD DISPUTES
              </span>
            </div>
          </div>
          <div className="relative h-[342px] rounded-[14px]">
            <img
              src={Image6}
              alt="Elder Abuse"
              className="w-full h-full object-cover rounded-[14px]"
            />
            <div className="rounded-[14px] absolute bottom-[41px] left-[98px] bg-opacity-70">
              <span className="font-[600] text-[24px] leading-[24px] text-[#fffbf2]">
                ELDER ABUSE
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practices;
