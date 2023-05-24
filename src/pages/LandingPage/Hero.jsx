import PublicHeader from "../../components/Header/PublicHeader";
import { motion } from "framer-motion";
import * as constants from "../../utils/Constants";
import { memo } from "react";
import HeroImg from "../../assets/hero_img.jpeg";
import { motionHoverAndTap } from "../../utils/helperFunctions/helperFunctions";

const Hero = ({ activeMenu, onScrollToPageSection }) => {
  const renderStatistics = () => {
    return constants.HERO_STATISTICS.map((statistic, index) => (
      <div className="p-4" key={index}>
        <div className="font-bold text-xl">{statistic.count}</div>
        <div>{statistic.label}</div>
      </div>
    ));
  };

  return (
    <div
      className="relative bg-cover bg-center h-screen px-8"
      id="hero"
      style={{ backgroundImage: `URL(${HeroImg})` }}
    >
      <PublicHeader
        activeMenu={activeMenu}
        onScrollToPageSection={onScrollToPageSection}
      />

      <div className="absolute top-0 left-0 w-full h-screen bg-dark-backgroundColor bg-opacity-60 backdrop-filter backdrop-blur-[2px]"></div>
      <div className="absolute flex mt-24 sm:mt-8 h-full sm:justify-center sm:items-center text-light-cardBgColor ">
        <div className="flex flex-col ">
          <div className="flex font-DM font-bold text-3xl w-8/12 lg:text-5xl lg:w-6/12 ">
            {constants.HERO_HEADING_TEXT}
          </div>
          <p className="lg:text-xl text-sm font-DM py-4 w-11/12 sm:w-8/12 text-light-backgroundColor">
            {constants.HERO_PARAGRAPH_TEXT}
          </p>
          <div className="flex flex-col md:flex-row sm:gap-8 font-bold">
            {motionHoverAndTap(
              <div
                className="py-4 mt-9 w-11/12 sm:w-60 flex justify-center items-center bg-dark-backgroundColor hover:bg-light-cardBgColor hover:text-dark-cardBgColor cursor-pointer"
                onClick={() => onScrollToPageSection("how-it-works")}
              >
                <span>{constants.READ_MORE}</span>
              </div>
            )}
            {motionHoverAndTap(
              <div
                className="py-4 mt-9 w-11/12 sm:w-60 flex justify-center items-center text-dark-backgroundColor bg-light-cardBgColor cursor-pointer hover:bg-dark-backgroundColor hover:text-light-cardBgColor"
                onClick={() => onScrollToPageSection("join-now")}
              >
                <span>{constants.JOIN_NOW}</span>
              </div>
            )}
          </div>
          <div className="flex gap-4 mt-8 justify-start items-end text-light-backgroundColor">
            {renderStatistics()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Hero);
