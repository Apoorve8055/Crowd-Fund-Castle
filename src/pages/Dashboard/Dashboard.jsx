import { useSelector } from "react-redux";

const Dashboard = () => {
  const propertiesList = useSelector((state) => state.propertiesList);
  console.log(propertiesList);
  return (
    <div className="p-4">
      <div className="text-xl font-bold">All Properties (15)</div>
      <div className="pt-4 text-x1 text-dark-secondaryTextColor">
        We have not found any Properties yet
      </div>

      <div>
        <div>
          <div>image with scroll</div>
          <div>At right top option Open to invest / Sold Out tags</div>
        </div>
        <div>Property Name</div>
        <div>Location</div>
        <div>
          <div>
            <div>Offering amount</div>
            <div>$1,410,101.00</div>
          </div>
          <div>
            <div>Price per share</div>
            <div>$1.00</div>
          </div>
          <div>Invest now/View property</div>
        </div>
        <div>
          <div>82% funded</div>
          <div>1,623 investors</div>
        </div>
        <div>Progress Bar</div>
      </div>
    </div>
  );
};

export default Dashboard;
