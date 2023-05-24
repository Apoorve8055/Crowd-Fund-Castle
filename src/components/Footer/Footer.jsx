import { MdOutlineFacebook } from "react-icons/md";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineCaretDown,
} from "react-icons/ai";
import * as Constants from "../../utils/Constants";

const Footer = () => {
  const menuItems = ["Terms & Conditions", "Privacy Policy", "Sitemap"];

  return (
    <footer className="bg-dark-cardBgColor px-8 sm:px-16 pt-4 flex flex-col">
      <div className="flex flex-col items-center">
        <div className="p-4 font-bold text-x1 sm:text-2xl text-dark-primaryTextColor">
          {Constants.COMPANY_NAME}
        </div>
      </div>
      <div className="text-xs pb-4 text-[#ffffffce]">
        {Constants.FOOTER_TEXT.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
      <hr />
      <div className="flex flex-wrap items-center justify-between text-dark-primaryTextColor text-sm font-bold py-4 pb-8 text-center">
        <div className="flex items-center gap-2 cursor-pointer">
          English <AiOutlineCaretDown />
        </div>
        <div className="flex gap-4">
          <MdOutlineFacebook size={20} className="cursor-pointer" />
          <AiFillGithub size={20} className="cursor-pointer" />
          <AiFillTwitterCircle size={20} className="cursor-pointer" />
          <AiFillLinkedin size={20} className="cursor-pointer" />
        </div>
        <div className="flex flex-wrap gap-4 py-4 font-bold text-dark-primaryTextColor">
          {menuItems.map((item, index) => (
            <div key={index} className="cursor-pointer">
              {item}
            </div>
          ))}
        </div>
        <div>©2023 All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
