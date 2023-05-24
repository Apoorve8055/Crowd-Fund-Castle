import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";

const BuyNow = () => {
  const { id } = useParams();
  const propertyDetails = useSelector((state) =>
    state.propertySlice.propertiesList.find((item) => item.id === parseInt(id))
  );
  return (
    <div className="w-screen flex justify-center items-center m-4">
      <Card item={propertyDetails} buyNowTag open_for_invest showBuyNow />
    </div>
  );
};

export default BuyNow;
