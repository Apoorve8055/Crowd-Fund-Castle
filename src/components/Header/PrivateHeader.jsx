import { IoLogOut, IoMenuSharp, IoSearchSharp } from "react-icons/io5";

const PrivateHeader = () => {
  return (
    <div className="w-screen p-4 flex items-center justify-between shadow-md">
      <div className="text-3xl font-bold capitalize">Crowd Fund Castle</div>
      <div className="flex gap-4 items-center">
        <div className="hidden sm:flex items-center shadow-md rounded-lg">
          <input
            className="rounded-l-lg bg-light-backgroundColor outline-none p-2 pl-4 dark:bg-dark-cardBgColor"
            placeholder="Search for properties"
          />
          <div className="cursor-pointer p-2 pr-4 rounded-r-lg dark:bg-dark-cardBgColor">
            <IoSearchSharp className="text-2xl" />
          </div>
        </div>
        <IoLogOut className="hidden text-3xl sm:flex cursor-pointer" />
        <IoMenuSharp className="text-3xl sm:hidden cursor-pointer" />
      </div>
    </div>
  );
};

export default PrivateHeader;
