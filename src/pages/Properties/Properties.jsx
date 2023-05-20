import { memo, useState, useCallback } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import Slider from "../../components/Slider/Slider";

const PropertyInfo = memo(({ label, value, list }) => (
  <div className={`${list && "flex flex-row gap-4"}`}>
    <div className="text-sm">{label}</div>
    <div className="font-bold text-base">{value}</div>
  </div>
));

const AmenityItem = memo(({ amenity }) => (
  <div className="font-medium text-sm px-4 py-1 bg-dark-backgroundColor text-dark-primaryTextColor">
    {amenity}
  </div>
));

const Properties = () => {
  const [sliderVisible, setSliderVisible] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const propertyDetails = useSelector((state) =>
    state.propertiesList.find((item) => item.id === parseInt(id))
  );

  const rawPropertyData = propertyDetails?.raw_property_data || {};

  const handleBackClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const renderPropertyInfo = () => {
    const propertyInfoKeys = [
      "Bedrooms",
      "Bathrooms",
      "Beds",
      "Sleeps",
      "Property type",
      "Living space",
      "Lot size",
      "Year built",
      "Location",
    ];
    return Object.entries(rawPropertyData).map(([key, value]) => {
      if (propertyInfoKeys.some((str) => key.includes(str))) {
        return <PropertyInfo key={key} label={key} value={value} />;
      }
      return null;
    });
  };

  const renderFinancingInfo = () => {
    const financing = propertyDetails?.Financing;
    return (
      propertyDetails?.Financing &&
      Object.entries(financing).map(([key, value]) => (
        <PropertyInfo key={key} label={key} value={value} />
      ))
    );
  };
  const renderMarketInfo = () => {
    const market = propertyDetails?.theMarket;

    if (!market) {
      return null;
    }

    return Object.entries(market).map(([key, value]) => (
      <div key={key} className="py-2">
        <div className="font-bold text-x1 pb-2">{key}</div>
        <div className="grid grid-cols-2 md:grid-cols-3">
          {Object.entries(value).map(([subKey, subValue]) => (
            <PropertyInfo
              key={subKey}
              label={subKey}
              value={subValue}
              list={true}
            />
          ))}
        </div>
      </div>
    ));
  };

  const renderAmenities = () => {
    const amenities = rawPropertyData.Amenities || {};
    return Object.entries(amenities).map(([key, value]) => (
      <AmenityItem key={key} amenity={value} />
    ));
  };

  const scrollIntoView = useCallback((id) => {
    document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  return (
    <div className="w-screen flex flex-col-reverse gap-8 lg:p-8 sm:flex-row items-center sm:items-start">
      <div className="hidden w-24 lg:block ">
        <div
          className="text-xl pb-4 font-bold flex items-center gap-2 cursor-pointer"
          onClick={handleBackClick}
        >
          <MdKeyboardBackspace />
          Back
        </div>
        <div className="text-sm flex flex-col gap-3 dark:text-dark-secondaryTextColor">
          <div
            className="cursor-pointer hover:font-bold dark:hover:text-dark-primaryTextColor"
            onClick={() => scrollIntoView("property")}
          >
            The property
          </div>
          <div
            className="cursor-pointer hover:font-bold dark:hover:text-dark-primaryTextColor"
            onClick={() => scrollIntoView("Overview")}
          >
            Overview
          </div>
          <div
            className="cursor-pointer hover:font-bold dark:hover:text-dark-primaryTextColor"
            onClick={() => scrollIntoView("Financials")}
          >
            Financials
          </div>
          <div
            className="cursor-pointer hover:font-bold dark:hover:text-dark-primaryTextColor"
            onClick={() => scrollIntoView("market")}
          >
            The market
          </div>
        </div>
      </div>

      <div className="w-auto h-85vh p-4 lg:w-7/12 dark:bg-dark-cardBgColor overflow-y-scroll scrollable-content">
        <div id="property" className="px-4">
          <div className="text-2xl pb-4 font-extrabold">The property</div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {renderPropertyInfo()}
          </div>
          <div className="py-4">
            <div className="text-2xl pb-4 font-extrabold">Amenities</div>
            <div className="flex flex-wrap gap-4">{renderAmenities()}</div>
          </div>
        </div>
        <div id="Overview" className="px-4">
          <div className="text-2xl pb-4 font-extrabold">Overview</div>
          <div>{rawPropertyData?.Overview}</div>
          <div className="py-4 text-xl font-extrabold">
            Expected Payout Date: {rawPropertyData["Expected Payout Date"]}
          </div>
        </div>
        <div id="Financials" className="px-4 ">
          <div className="text-2xl pb-4 font-extrabold">Financing</div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {renderFinancingInfo()}
          </div>
        </div>

        <div id="market" className="px-4 py-4">
          <div className="text-2xl pb-4 font-extrabold">The market</div>
          {renderMarketInfo()}
        </div>
      </div>

      <div className="min-w-max">
        <Card
          item={propertyDetails}
          showBuyNow
          isThisPropertyPage
          openSlider={() => setSliderVisible(true)}
        />
        {sliderVisible && (
          <Slider
            images={propertyDetails?.property_images}
            openSlider={() => setSliderVisible(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Properties;
