import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { clients } from "../export";
import { div } from "framer-motion/client";

const Testimonials = () => {
  return (
    <div id="clients" className="w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl"
        >
          TESTIMONIALS
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white text-[40px] font-bold text-center"
        >
          WHAT OUR CLIENTS SAYS
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          className="w-[120px] h-[6px] bg-yellow-500"
        ></motion.div>
        {/* make div for services mapping from export js file */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="lg:w-full w-[90%] grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-8 mt-[30px]"
        >
          {clients.map((item, index) => (
            <div key={index} className="flex flex-col justify-center">
              <div className="border-2 border-white hover:bg-yellow-500 pb-[100px] pt-[30px]">
                <p className="text-white hover:text-black text-lg text-center">
                  {item.about}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[5px]">
                <img
                  src={item.image}
                  className="mt-[-50px]"
                  alt="client image"
                />
                <h1 className="text-white text-[27px] font-semibold uppercase">
                  {item.name}
                </h1>
                <h1 className="text-yellow-500 text-[22px]">{item.post}</h1>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
