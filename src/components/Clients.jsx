import { useState } from "react";
import BackArrow from "../assets/clientsbackarrow.svg";
import ForwardArrow from "../assets/clientsforwardarrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ClientImage1 from "../assets/ClientImage1.png";
import ClientImage2 from "../assets/ClientImage2.png";
import ClientImage3 from "../assets/ClientImage3.png";

const Clients = () => {
  const [clients, setClients] = useState([
    {
      icon: ClientImage1,
      name: "Jane Cooper",
      desgination: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    },
    {
      icon: ClientImage2,
      name: "Devon Lane",
      desgination: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    },
    {
      icon: ClientImage3,
      name: "Robert Fox",
      desgination: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    },
    {
      icon: ClientImage1,
      name: "Jane Cooper",
      desgination: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    },
    {
      icon: ClientImage2,
      name: "Devon Lane",
      desgination: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    },
    {
      icon: ClientImage3,
      name: "Robert Fox",
      desgination: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    },
  ]);
  const [swiperInstance, setSwiperInstance] = useState(null);
  return (
    <div className="container font-sans text-white max-w-[1134px] mx-auto flex flex-col gap-[104px] items-center py-[93px]">
      <div className="w-full flex flex-row gap-[px] justify-between items-end">
        <h1 className="font-[600] text-[54px] leading-[78px] max-w-[424px] max-h-[154px]">
          What our happy Clients Say
        </h1>
        <div className="flex gap-[19px]">
          <button onClick={() => swiperInstance && swiperInstance.slidePrev()}>
            <img width={91} height={91} src={BackArrow} alt="backarrow" />
          </button>
          <button
            width={91}
            height={91}
            onClick={() => swiperInstance && swiperInstance.slideNext()}
          >
            <img src={ForwardArrow} alt="forwardarrow" />
          </button>
        </div>
      </div>
      <div className="w-full">
        <Swiper
          loop={true}
          modules={[Navigation]}
          spaceBetween={28}
          slidesPerView={3}
          onSwiper={setSwiperInstance}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="w-[359px] h-[368px] rounded-[14px] border-[1.4px] border-[#FFFFFF1A] flex flex-col gap-[23px] items-start pl-[24px] pt-[28px] hover:bg-[#FFFFFF1A]">
                <img
                  width={105}
                  height={102}
                  src={client.icon}
                  alt="cardicon"
                />
                <div className="flex flex-col items-start gap-[26px]">
                  <h3 className="font-[600] text-[24px] leading-[24px]">
                    {client.name}
                  </h3>
                  <p className="font-[400] text-[14px] leading-[23px]">
                    {client.desgination}
                  </p>
                  <p className="max-w-[293px] max-h-[92px] opacity-30 font-[500] text-[14px] leading-[23px]">
                    {client.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Clients;
