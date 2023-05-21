import { useState } from "react";
import Avatar from "react-avatar";

const Account = () => {
  const [menu, setMenu] = useState("accountMenu");

  const handleMenuSwitch = (menu) => {
    setMenu(menu);
  };

  return (
    <div className="flex w-screen justify-center items-center m-1">
      <div className="flex flex-col gap-1 dark:bg-dark-cardBgColor rounded-lg shadow-custom">
        <div className="flex flex-col items-center gap-2 p-2 border-x-dark-secondaryTextColor">
          <Avatar name="Apoorve Verma" round />
          <div className="font-bold text-2xl">Apoorve Verma</div>
          <div className="text-dark-secondaryTextColor text-xl">
            vapoorve@gmail.com
          </div>
        </div>
        <hr />
        <div className="p-8 sm:w-144 h-96">
          <div className="flex gap-4 text-dark-secondaryTextColor">
            <div
              className={`px-4 py-2 cursor-pointer ${
                menu === "accountMenu" &&
                "border-b-2 text-dark-backgroundColor dark:text-dark-primaryTextColor dark:border-dark-primaryTextColor border-dark-backgroundColor"
              }`}
              onClick={() => handleMenuSwitch("accountMenu")}
            >
              Account
            </div>
            <div
              className={`px-4 py-2 cursor-pointer ${
                menu === "bankMenu" &&
                "border-b-2 text-dark-backgroundColor dark:text-dark-primaryTextColor dark:border-dark-primaryTextColor border-dark-backgroundColor"
              }`}
              onClick={() => handleMenuSwitch("bankMenu")}
            >
              Bank Accounts
            </div>
            <div
              className={`px-4 py-2 cursor-pointer ${
                menu === "credMenu" &&
                "border-b-2 text-dark-backgroundColor dark:text-dark-primaryTextColor dark:border-dark-primaryTextColor border-dark-backgroundColor"
              }`}
              onClick={() => handleMenuSwitch("credMenu")}
            >
              Credentials
            </div>
          </div>

          <div className="flex justify-center items-center h-64">
            {menu === "accountMenu" && (
              <div className="flex flex-col py-4 gap-4">
                <div className="flex flex-wrap py-4 gap-4">
                  <input
                    type="text"
                    className="w-full bg-light-backgroundColor dark:bg-dark-cardBgColor py-2 px-4 border-[0.5px] outline-none"
                    placeholder="Enter First Name"
                  />
                  <input
                    type="text"
                    className="w-full bg-light-backgroundColor dark:bg-dark-cardBgColor py-2 px-4 border-[0.5px] outline-none"
                    placeholder="Enter Last Name"
                  />
                  <input
                    type="tel"
                    className="w-full bg-light-backgroundColor dark:bg-dark-cardBgColor py-2 px-4 border-[0.5px] outline-none"
                    placeholder="Enter Phone Number"
                  />
                </div>

                <div className="flex justify-center items-center gap-2">
                  <button className="w-full py-2 font-bold text-dark-primaryTextColor bg-dark-cardBgColor border border-y-dark-secondaryTextColor rounded-lg cursor-pointer hover:bg-light-backgroundColor hover:text-dark-backgroundColor transition duration-300 ease-in-out">
                    Save
                  </button>
                </div>
              </div>
            )}

            {menu === "bankMenu" && (
              <button
                disabled={true}
                className="w-full py-2 font-bold text-dark-primaryTextColor bg-dark-cardBgColor border border-y-dark-secondaryTextColor rounded-lg cursor-pointer hover:bg-light-backgroundColor hover:text-dark-backgroundColor transition duration-300 ease-in-out disabled:bg-light-secondaryTextColor disabled:cursor-default disabled:hover:bg-light-secondaryTextColor disabled:hover:text-dark-primaryTextColor "
              >
                Add New Back Account
              </button>
            )}
            {menu === "credMenu" && (
              <div className="flex flex-col py-4 gap-4">
                <div className="flex flex-wrap py-4 gap-4">
                  <input
                    type="email"
                    className="w-full bg-light-backgroundColor dark:bg-dark-cardBgColor py-2 px-4 border-[0.5px] outline-none"
                    value="vapoorve@gmail.com"
                  />
                  <input
                    type="Password"
                    className="w-full bg-light-backgroundColor dark:bg-dark-cardBgColor py-2 px-4 border-[0.5px] outline-none"
                    value="Password"
                  />
                </div>

                <div className="flex justify-center items-center gap-2">
                  <button className="w-full py-2 font-bold text-dark-primaryTextColor bg-dark-cardBgColor border border-y-dark-secondaryTextColor rounded-lg cursor-pointer hover:bg-light-backgroundColor hover:text-dark-backgroundColor transition duration-300 ease-in-out">
                    Save
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
