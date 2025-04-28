import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useState } from "react";

import Img from "./Images/img1.jpg"
import Img1 from "./Images/img2.jpg";
import Img2 from "./Images/img3.jpg";
import Img3 from "./Images/img4.jpg";

const MySlider = () => {
  const slider = [
    { url: Img, ptext: "Authentic Flavors, Unforgettable Moments" },
    { url: Img1, ptext: "Taste the Tradition" },
    { url: Img2, ptext: "Your Favorite Meals, Delivered Fresh" },
    { url: Img3, ptext: "Award-Winning Culinary Experience" },
  ];

  const [activetext, setActivetext] = useState(0);

  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={(swiper) => setActivetext(swiper.realIndex)}
        grabCursor={true}
      >
        {slider.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-96">
              <img src={item.url} className="w-full h-full object-cover" alt={`slide-${index}`} />

              {activetext === index && (
                <motion.div
                  className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <p className="text-white text-xl font-bold bg-black/50 px-4 py-2 rounded-lg text-center">
                    {item.ptext}
                  </p>
                </motion.div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MySlider;
