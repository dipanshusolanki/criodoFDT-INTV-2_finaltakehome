import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="text-white font-sans container mx-auto pt-8 flex justify-between items-start max-w-[1134px]">
        <img src={Logo} alt="logo" className="w-[143px] h-[30px] mt-2" />
        <div className="flex gap-[41px] mt-2">
          <a className="font-[600] leading-[26px] text-center" href="#about">
            About
          </a>
          <a
            className="font-[600] leading-[26px] text-center"
            href="#attorneys"
          >
            Attorneys
          </a>
          <a
            className="font-[600] leading-[26px] text-center"
            href="#practiceareas"
          >
            Practice Areas
          </a>
          <a className="font-[600] leading-[26px] text-center" href="#aboutus">
            About Us
          </a>
        </div>
        <button className="border-2 border-white px-[35px] py-[14px]">
          Contact Now
        </button>
      </div>
    </>
  );
};

export default Navbar;
