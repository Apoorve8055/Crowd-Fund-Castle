import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";

const Dashboard = () => {
  const propertiesList = useSelector(
    (state) => state.propertySlice.propertiesList
  );

  return (
    <div className="p-5 h-90vh sm:h-85vh  overflow-y-scroll scrollable-content">
      <div className="text-xl pb-4 font-bold">All Properties (15)</div>

      {propertiesList ? (
        <div className="flex flex-wrap gap-8 justify-center sm:justify-start ">
          {propertiesList.map((item, index) => (
            <Card item={item} />
          ))}
        </div>
      ) : (
        <div className="pt-4 text-x1 text-dark-secondaryTextColor">
          We have not found any Properties yet
        </div>
      )}
    </div>
  );
};

export default Dashboard;
