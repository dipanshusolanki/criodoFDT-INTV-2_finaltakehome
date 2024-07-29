import "./Faq.css";

const Faq = () => {
  return (
    <div className="container font-sans text-white max-w-[1134px] mx-auto flex gap-[19px] pt-[98px] pb-[108px] justify-between items-start">
      <div className="w-[557px] flex flex-col gap-[14px] items-start">
        <h2 className="font-[600] text-[54px] leading-[75px]">FAQ</h2>
        <p className="font-[500] text-[18px] leading-[30px] max-w-[420px] h-[58px] opacity-30">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </div>
      <div className="w-[539px] max-h-[540px] mt-[90px] overflow-scroll hide-scrollbar">
        <details className="cursor-pointer relative w-full">
          <summary className="font-[600] text-[24px] leading-[24px] w-full mb-[39px]">
            Do I need a personal injury report?
          </summary>
          <p className="font-[500] text-[18px] leading-[30px] max-w-[420px] min-h-[145px] opacity-30">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </p>
        </details>
        <hr className="my-[39px] w-full opacity-5 border-2 border-white" />
        <details className="cursor-pointer relative w-full">
          <summary className="font-[600] text-[24px] leading-[24px] w-full mb-[39px]">
            How much is my case worth?
          </summary>
          <p className="font-[500] text-[18px] leading-[30px] max-w-[420px] min-h-[58px] opacity-30">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </p>
        </details>
        <hr className="my-[39px] w-full opacity-5 border-2 border-white" />
        <details className="cursor-pointer relative w-full">
          <summary className="font-[600] text-[24px] leading-[24px] w-full mb-[39px]">
            What should I do right after car accidect
          </summary>
          <p className="font-[500] text-[18px] leading-[30px] max-w-[420px] min-h-[58px] opacity-30">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </p>
        </details>
        <hr className="my-[39px] w-full opacity-5 border-2 border-white" />
        <details className="cursor-pointer relative w-full">
          <summary className="font-[600] text-[24px] leading-[24px] w-full mb-[39px]">
            How much is my case worth?
          </summary>
          <p className="font-[500] text-[18px] leading-[30px] max-w-[420px] min-h-[58px] opacity-30">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </p>
        </details>
      </div>
    </div>
  );
};

export default Faq;
