import { memo, useEffect, useState } from "react";
import { IoMenuSharp, IoSearchSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateHeader = ({ isMenuOpen, setIsMenuOpen }) => {
  const [search, setSearch] = useState("");
  const [filteredProperties, setFilteredProperties] = useState([]);
  const propertiesList = useSelector(
    (state) => state.propertySlice.propertiesList
  );
  const navigate = useNavigate();

  useEffect(() => {
    const filteredProp = propertiesList.filter((item) =>
      item.property_name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProperties(filteredProp);
  }, [search, propertiesList]);

  const visitProperties = (id) => {
    setSearch("");
    navigate(`properties/${id}`);
  };

  return (
    <div className="p-4 flex items-center justify-between shadow-custom dark:bg-dark-cardBgColor">
      <div
        className="font-DM text-2xl font-bold capitalize sm:text-3xl cursor-pointer"
        onClick={() => navigate("/")}
      >
        Crowd Fund Castle
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex flex-col items-center shadow-md rounded-lg">
          <div className="hidden sm:flex">
            <input
              className="rounded-l-lg bg-light-backgroundColor outline-none p-2 pl-4 dark:bg-dark-cardBgColor dark:text-light-secondaryTextColor"
              placeholder="Search for properties"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="cursor-pointer p-2 pr-4 rounded-r-lg dark:bg-dark-cardBgColor">
              <IoSearchSharp className="text-2xl dark:text-light-secondaryTextColor" />
            </div>
          </div>
          {search && (
            <div className="absolute w-60 rounded-lg mt-12 px-8 shadow-custom z-20 bg-light-backgroundColor dark:bg-dark-cardBgColor">
              {filteredProperties.map((item) => (
                <div
                  key={item.id}
                  className="p-2 cursor-pointer hover:font-bold"
                  onClick={() => visitProperties(item.id)}
                >
                  {item.property_name}
                </div>
              ))}
            </div>
          )}
        </div>

        {isMenuOpen ? (
          <MdClose
            className="text-3xl sm:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        ) : (
          <IoMenuSharp
            className="text-3xl sm:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        )}
      </div>
    </div>
  );
};

export default memo(PrivateHeader);
