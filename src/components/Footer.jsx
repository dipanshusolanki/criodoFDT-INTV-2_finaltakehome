import Logo from "../assets/logo.svg";
import InstagramIcon from "../assets/Insta.svg";
import FacebookIcon from "../assets/Fb.svg";
import XIcon from "../assets/X.svg";
import PinterestIcon from "../assets/Pinterest.svg";

const Footer = () => {
  return (
    <div className="container font-sans text-white max-w-[1134px] h-[367px] mx-auto flex items-center ">
      <div className="w-full flex gap-[136px] h-[150px]">
        <img src={Logo} alt="icon" className="w-[143px] h-[30px]" />
        <div className="flex max-w-[548px] max-h-[150px] flex-col justify-between items-center">
          <div className="flex w-[548px] gap-[79px]">
            <a href="#" className="font-[600] text-[16px] leading-[26px]">
              Home
            </a>
            <a href="#" className="font-[600] text-[16px] leading-[26px]">
              Attorneys
            </a>
            <a href="#" className="font-[600] text-[16px] leading-[26px]">
              Practice Areas
            </a>
            <a href="#" className="font-[600] text-[16px] leading-[26px]">
              About Us
            </a>
          </div>
          <div className="flex gap-[25px]">
            <a href="#" className="font-[400] text-[14px] leading-[20px]">
              © 2020 Acme. All right reserved.
            </a>
            <a href="#" className="font-[400] text-[14px] leading-[20px]">
              Privacy Policy
            </a>
            <a href="#" className="font-[400] text-[14px] leading-[20px]">
              Terms of Service
            </a>
          </div>
        </div>
        <div className="flex gap-[22px] h-fit">
          <a href="#">
            <img src={InstagramIcon} alt="socialicon" width={30} height={30} />
          </a>
          <a href="#">
            <img src={FacebookIcon} alt="socialicon" width={30} height={30} />
          </a>
          <a href="#">
            <img src={XIcon} alt="socialicon" width={30} height={30} />
          </a>
          <a href="#">
            <img src={PinterestIcon} alt="socialicon" width={30} height={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
