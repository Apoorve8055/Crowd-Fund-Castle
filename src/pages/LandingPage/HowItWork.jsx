import { memo } from "react";
import * as constants from "../../utils/Constants";
import browseComputerImg from "../../assets/computer.png";
import InvestImg from "../../assets/invest.png";
import EarnImg from "../../assets/money.png";
import { motionHoverScale } from "../../utils/helperFunctions/helperFunctions";

const steps = [
  {
    imgSrc: browseComputerImg,
    title: constants.HOWITWORKS_STEP_1_TITLE,
    subtitle: constants.HOWITWORKS_STEP_1_SUBTITLE,
    description: constants.HOWITWORKS_STEP_1_DESCRIPTION,
  },
  {
    imgSrc: InvestImg,
    title: constants.HOWITWORKS_STEP_2_TITLE,
    subtitle: constants.HOWITWORKS_STEP_2_SUBTITLE,
    description: constants.HOWITWORKS_STEP_2_DESCRIPTION,
  },
  {
    imgSrc: EarnImg,
    title: constants.HOWITWORKS_STEP_3_TITLE,
    subtitle: constants.HOWITWORKS_STEP_3_SUBTITLE,
    description: constants.HOWITWORKS_STEP_3_DESCRIPTION,
  },
];

const HowItWork = () => {
  return (
    <section
      id="how-it-works"
      className="flex flex-col w-screen gap-8 sm:gap-16 bg-light-backgroundColor text-dark-cardBgColor"
    >
      <div className="text-3xl pt-14 pb-2 sm:pt-28 sm:py-18 font-bold flex justify-center">
        {constants.HOWITWORKS_HEADING_TEXT}
      </div>
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex md:gap-16 ${
            index % 2 !== 0 ? "sm:flex-row-reverse" : ""
          } justify-center lg:justify-evenly items-center`}
        >
          {motionHoverScale(
            <img
              src={step.imgSrc}
              className="hidden md:block p-8 w-96 bg-blend-screen border"
              alt={step.title}
            />
          )}
          <div className="flex flex-col">
            <div className="font-extrabold text-4xl">{step.title}</div>
            <div className="font-bold text-2xl py-1">{step.subtitle}</div>
            <p className="py-1 text-xl w-72">{step.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default memo(HowItWork);
