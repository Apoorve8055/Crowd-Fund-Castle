import { Line } from "rc-progress";
import { useState } from "react";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Card = (props) => {
  const { item, showBuyNow, isThisPropertyPage, openSlider, buyNowTag } = props;
  const navigate = useNavigate();
  const [amount, setAmount] = useState(null);

  return (
    <article
      key={item?.id}
      className={`sm:shadow-custom dark:bg-dark-cardBgColor  rounded-lg dark:text-dark-secondaryTextColor font-bold text-x1 ${
        !isThisPropertyPage && "max-w-xs md:max-w-sm shadow-custom"
      }`}
    >
      <div className="relative hover:scale-105 ease-in-out duration-500">
        <img
          className="w-96 h-64 bg-cover rounded-lg"
          src={item?.property_images[0]}
        />
        <div className="absolute top-0 right-0">
          {isThisPropertyPage && (
            <div
              className="bg-dark-backgroundColor text-sm font-bold text-light-cardBgColor px-2 py-1 m-2 rounded-lg cursor-pointer flex justify-center items-center gap-2"
              onClick={openSlider}
            >
              <MdOutlinePhotoLibrary /> Show all photos
            </div>
          )}
          {!isThisPropertyPage &&
            (item?.open_for_invest === true ? (
              <div className="bg-dark-backgroundColor text-sm font-bold text-light-cardBgColor px-2 py-1 m-2 rounded-lg">
                Open to invest
              </div>
            ) : (
              <div className="bg-dark-backgroundColor text-sm font-bold text-light-cardBgColor px-2 py-1 m-2 rounded-lg">
                Sold Out
              </div>
            ))}
        </div>
      </div>
      <div
        className="px-4 pt-4 text-2xl font-extrabold dark:text-dark-primaryTextColor cursor-pointer"
        onClick={() => navigate(`properties/${item?.id}`)}
      >
        {item?.property_name}
      </div>
      <div className="px-4  text-lg">{item?.location.place}</div>

      <div className="px-4 pt-4 flex justify-between">
        <div>Offering amount</div>
        <div className="font-extrabold">${item?.offering_amount}</div>
      </div>

      <div className="px-4 pt-2  flex justify-between">
        <div>Price per share</div>
        <div className="font-extrabold">${item?.price_per_share}</div>
      </div>

      {buyNowTag && (
        <div className="px-4 pt-2  flex  flex-col justify-between">
          <div>Enter quantity of shares:</div>
          <div className="flex flex-wrap gap-2 py-4">
            <div
              className="px-3  py-1 border cursor-pointer"
              onClick={() => setAmount(500)}
            >
              +500
            </div>
            <div
              className="px-3 py-1 border cursor-pointer"
              onClick={() => setAmount(1000)}
            >
              +1,000
            </div>
            <div
              className="px-3 py-1 border cursor-pointer"
              onClick={() => setAmount(5000)}
            >
              +5,000
            </div>
            <div
              className="px-3 py-1 border cursor-pointer"
              onClick={() => setAmount(10000)}
            >
              +10,000
            </div>
          </div>
          <input
            type="text"
            className="w-full bg-light-backgroundColor dark:bg-dark-cardBgColor py-2 px-4 border-[0.5px] outline-none"
            placeholder="Enter an amount"
            value={amount}
            onChange={(e) => setAmount(e.target.vale)}
          />
        </div>
      )}

      <div
        className="font-DM text-dark-primaryTextColor font-extrabold flex justify-center rounded-full items-center cursor-pointer m-4  p-2 hover:bg-light-backgroundColor border border-y-dark-secondaryTextColor ease-in-out duration-300 hover:text-dark-backgroundColor bg-dark-cardBgColor "
        onClick={() => {
          if (showBuyNow && item?.open_for_invest !== true) return;
          if (showBuyNow && item?.open_for_invest === true) {
            navigate(`/dashboard/properties/${item?.id}/buynow`);
          } else {
            navigate(`properties/${item?.id}`);
          }
        }}
      >
        {showBuyNow && item?.open_for_invest === true
          ? "Buy Shares"
          : showBuyNow
          ? "Sold out"
          : item?.open_for_invest
          ? "Invest now"
          : "View property"}
      </div>

      <div className="flex justify-between p-4">
        <div className="font-extrabold">{item?.funded_percentage} funded</div>
        <div>{item?.total_investors} investors</div>
      </div>
      <Line
        className="p-1 rounded-bl-lg rounded-br-lg"
        percent={item?.funded_percentage}
        strokeWidth={2}
        strokeColor={"#e3bb61"}
      />
    </article>
  );
};
export default Card;
