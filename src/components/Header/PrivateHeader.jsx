import { IoMenuSharp, IoSearchSharp } from "react-icons/io5";

const PrivateHeader = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className=" p-4 flex items-center justify-between shadow-custom dark:bg-dark-cardBgColor">
      <div className="font-DM text-2xl font-bold capitalize sm:text-3xl">
        Crowd Fund Castle
      </div>
      <div className="flex gap-4 items-center">
        <div className="hidden sm:flex items-center shadow-md rounded-lg">
          <input
            className="rounded-l-lg bg-light-backgroundColor outline-none p-2 pl-4 dark:bg-dark-cardBgColor dark:text-light-secondaryTextColor"
            placeholder="Search for properties"
          />
          <div className="cursor-pointer p-2 pr-4 rounded-r-lg dark:bg-dark-cardBgColor">
            <IoSearchSharp className="text-2xl dark:text-light-secondaryTextColor" />
          </div>
        </div>
        <IoMenuSharp
          className="text-3xl sm:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
    </div>
  );
};

export default PrivateHeader;
