import { Line } from "rc-progress";
const Card = ({ item }) => {
  return (
    <article
      key={item?.id}
      className="max-w-xs md:max-w-sm dark:bg-dark-cardBgColor shadow-custom rounded-lg dark:text-dark-secondaryTextColor "
    >
      <div className="relative hover:scale-105 ease-in-out duration-500">
        <img
          className="w-96 h-64 bg-cover rounded-lg"
          src={item?.property_images[0]}
        />
        <div className="absolute top-0 right-0">
          {item?.open_for_invest ? (
            <div className="bg-dark-backgroundColor text-sm font-bold text-light-cardBgColor px-2 py-1 m-2 rounded-lg">
              Open to invest
            </div>
          ) : (
            <div className="bg-dark-backgroundColor text-sm font-bold text-light-cardBgColor px-2 py-1 m-2 rounded-lg">
              Sold Out
            </div>
          )}
        </div>
      </div>
      <div className="px-4 pt-4 text-2xl font-bold dark:text-dark-primaryTextColor">
        {item?.property_name}
      </div>
      <div className="px-4  text-lg">{item?.location.place}</div>

      <div className="px-4 pt-4 flex justify-between">
        <div>Offering amount</div>
        <div className="font-bold">${item?.offering_amount}</div>
      </div>
      <div className="px-4 pt-2  flex justify-between">
        <div>Price per share</div>
        <div className="font-bold">${item?.price_per_share}</div>
      </div>
      <div className="font-DM text-dark-primaryTextColor font-bold flex justify-center rounded-full items-center border cursor-pointer m-4  p-2 hover:bg-light-backgroundColor ease-in-out duration-300 hover:text-dark-backgroundColor bg-dark-backgroundColor">
        {item?.open_for_invest ? "Invest now" : "View property"}
      </div>

      <div className="flex justify-between px-4 py-2">
        <div className="font-bold">{item?.funded_percentage} funded</div>
        <div>{item?.total_investors} investors</div>
      </div>
      <Line
        percent={item?.funded_percentage}
        strokeWidth={3}
        strokeColor={item?.funded_percentage === 100 ? "#202020" : "#ea912a"}
      />
    </article>
  );
};
export default Card;
