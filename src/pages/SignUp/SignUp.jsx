import {
  motionHoverAndTap,
  renderInput,
} from "../../utils/helperFunctions/helperFunctions";
import * as Constants from "../../utils/Constants";
import { useNavigate } from "react-router-dom";
import { memo } from "react";
const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col gap-4 shadow-custom p-8 m-8">
        <div className="font-bold text-2xl sm:text-3xl  text-center">
          {Constants.COMPANY_NAME}
        </div>
        <div className=" text-sm sm:text-xl text-center">
          Log in with your credentials.
        </div>
        <div className="flex flex-wrap py-2 gap-4 sm:w-128">
          {renderInput("Enter Full Name", "text")}
          {renderInput("Enter Email", "email")}
          {renderInput("Enter Password", "password")}
        </div>
        <div className="flex justify-center items-center">
          {motionHoverAndTap(
            <button className="px-32 sm:px-56 py-2 w-auto font-bold text-dark-primaryTextColor bg-dark-cardBgColor border border-y-dark-secondaryTextColor rounded-lg cursor-pointer hover:bg-light-backgroundColor hover:text-dark-backgroundColor transition duration-300 ease-in-out">
              SignUp
            </button>
          )}
        </div>
        <div className=" text-sm sm:text-xl text-center">
          Already have an account? &nbsp;
          <b className="cursor-pointer" onClick={() => navigate("/login")}>
            Login
          </b>
        </div>
      </div>
    </div>
  );
};

export default memo(SignUp);
