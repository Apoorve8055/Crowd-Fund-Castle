import { memo } from "react";
import { motion } from "framer-motion";
import * as constants from "../../utils/Constants";
import browseComputerImg from "../../assets/computer.png";
import InvestImg from "../../assets/invest.png";
import EarnImg from "../../assets/money.png";

const HowItWork = () => {
  return (
    <section
      id="how-it-works"
      className="flex flex-col w-screen gap-8 sm:gap-16"
    >
      <div className="text-3xl pt-14 pb-2 sm:pt-28 sm:py-18 font-bold flex justify-center">
        {constants.HOWITWORKS_HEADING_TEXT}
      </div>
      <div className="gap-4 flex justify-evenly items-center">
        <motion.img
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          src={browseComputerImg}
          className="hidden sm:block p-8 w-96 bg-blend-screen border"
          alt="Browse Computer"
        />
        <div className="flex flex-col">
          <div className="font-extrabold text-4xl">
            {constants.HOWITWORKS_STEP_1_TITLE}
          </div>
          <div className="font-bold text-2xl py-1">
            {constants.HOWITWORKS_STEP_1_SUBTITLE}
          </div>
          <p className="py-1 text-xl w-72">
            {constants.HOWITWORKS_STEP_1_DESCRIPTION}
          </p>
        </div>
      </div>

      <div className=" flex gap-4 flex-row-reverse justify-evenly items-center">
        <motion.img
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          src={InvestImg}
          className="hidden sm:block p-8 w-96 bg-blend-screen border"
          alt="Browse Computer"
        />
        <div className="flex flex-col ">
          <div className="font-extrabold text-4xl">
            {constants.HOWITWORKS_STEP_2_TITLE}
          </div>
          <div className="font-bold text-2xl py-1">
            {constants.HOWITWORKS_STEP_2_SUBTITLE}
          </div>
          <p className="py-1 text-xl w-72">
            {constants.HOWITWORKS_STEP_2_DESCRIPTION}
          </p>
        </div>
      </div>

      <div className="gap-4 flex justify-evenly items-center">
        <motion.img
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          src={EarnImg}
          className="hidden sm:block p-8 w-96 bg-blend-screen border"
          alt="Browse Computer"
        />
        <div className="flex flex-col">
          <div className="font-extrabold text-4xl">
            {constants.HOWITWORKS_STEP_3_TITLE}
          </div>
          <div className="font-bold text-2xl py-1">
            {constants.HOWITWORKS_STEP_3_SUBTITLE}
          </div>
          <p className="py-1 text-xl w-72">
            {constants.HOWITWORKS_STEP_3_DESCRIPTION}
          </p>
        </div>
      </div>
    </section>
  );
};

export default memo(HowItWork);
