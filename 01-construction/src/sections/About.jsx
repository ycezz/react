import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { div } from "framer-motion/client";

const About = () => {
  return (
    <div
      className="lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-center gap-[50px]"
      id="about"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl"
        >
          WELCOME TO
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[40px] font-bold"
        >
          Prime Construction
        </motion.h1>
        <div className="w-[120px] h-[6px] bg-yellow-500"></div>
        <p className="text-3xl italic text-gray-50 mt-[60px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          culpa!
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6"
      >
        <p className="text-white text-lg text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
          debitis minus dolorem ipsum obcaecati odio officiis possimus
          repudiandae veniam, voluptatum quae velit at non. Suscipit blanditiis
          distinctio eum assumenda et quo officia ipsum laudantium, ullam
          sapiente rem magni dignissimos animi culpa exercitationem cum
          doloribus odit aperiam illo, soluta nobis ut architecto. Officiis id
          delectus maxime minus quas culpa ipsum aspernatur quia ad similique?
          Quae dolores maxime eligendi unde eveniet natus laboriosam sint
          dignissimos distinctio perferendis, architecto ducimus voluptatem
          molestias maiores inventore blanditiis quas officia quia minus eos
          praesentium doloribus! Alias dolorum tempora similique obcaecati
          voluptatem doloribus eaque sunt, fugit perferendis!
        </p>
        <motion.button
          variants={zoomInVariants}
          className="bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg font-bold text-black"
        >
          READ MORE
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
