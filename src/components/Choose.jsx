import ChooseCard from "./ChooseCard";
import ChooseIcon from "../assets/chooseicon.svg";

const Choose = () => {
  return (
    <div className="font-sans pt-[85px] pb-[90px] max-w-[1134px] mx-auto container text-white flex flex-col gap-[97px] items-center">
      <h2 className="font-[600] text-[54px] leading-[78px] text-white">
        Why Choose us?
      </h2>
      <div className="flex gap-[31px] justify-center">
        <ChooseCard
          icon={ChooseIcon}
          heading={"98% Success Rate"}
          description={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer"
          }
        />
        <ChooseCard
          icon={ChooseIcon}
          heading={"100% Success Rate"}
          description={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
          }
        />
        <ChooseCard
          icon={ChooseIcon}
          heading={"100% Success Rate"}
          description={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
          }
        />
      </div>
    </div>
  );
};

export default Choose;
