import {
  motionHoverAndTap,
  renderInput,
} from "../../utils/helperFunctions/helperFunctions";
import * as Constants from "../../utils/Constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogIn } from "../../store/userSlice";
import { memo } from "react";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handelLogin = () => {
    dispatch(userLogIn());
    navigate("/dashboard");
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col gap-4 shadow-custom p-8 m-8">
        <div
          className="font-bold text-2xl sm:text-3xl  text-center"
          onClick={() => navigate("/")}
        >
          {Constants.COMPANY_NAME}
        </div>
        <div className=" text-sm sm:text-xl text-center">
          Log in with your credentials.
        </div>
        <div className="flex flex-wrap py-2 gap-4">
          {renderInput("apoove.verma@cfc.com", "email")}
          {renderInput("********", "password")}
        </div>
        <div className="flex justify-center items-center">
          {motionHoverAndTap(
            <button
              onClick={handelLogin}
              className="px-32 sm:px-56 py-2 w-auto font-bold text-dark-primaryTextColor bg-dark-cardBgColor border border-y-dark-secondaryTextColor rounded-lg cursor-pointer hover:bg-light-backgroundColor hover:text-dark-backgroundColor transition duration-300 ease-in-out"
            >
              Demo Login
            </button>
          )}
        </div>
        <div className=" text-sm sm:text-xl text-center">
          No account yet? &nbsp;
          <b className="cursor-pointer" onClick={() => navigate("/signup")}>
            Sign up
          </b>
        </div>
      </div>
    </div>
  );
};

export default memo(Login);
