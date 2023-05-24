import { memo, useCallback } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const InfoBox = memo(({ title, value }) => (
  <div className="flex flex-col justify-center min-w-[170px] sm:min-w-[270px]  items-center p-4 rounded-lg shadow-custom hover:scale-105 duration-300 ease-in-out dark:bg-dark-cardBgColor">
    <div className="pb-2">{title}</div>
    <div className="pb-2 font-bold text-2xl">
      ${Number.parseFloat(value).toFixed(2)}
    </div>
  </div>
));

const Portfolio = () => {
  const navigate = useNavigate();
  const portfolio = useSelector((state) => state.propertySlice.portfolio);
  const handleBackClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);
  const scrollIntoView = useCallback((id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  console.log(portfolio);

  return (
    <div className="w-screen flex flex-col-reverse gap-8 lg:p-8 sm:flex-row sm:items-start">
      <div className="hidden w-28 lg:block">
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
            onClick={() => scrollIntoView("portfolio")}
          >
            My portfolio
          </div>

          <div
            className="cursor-pointer hover:font-bold dark:hover:text-dark-primaryTextColor"
            onClick={() => scrollIntoView("summary")}
          >
            Summary
          </div>
          <div
            className="cursor-pointer hover:font-bold dark:hover:text-dark-primaryTextColor"
            onClick={() => scrollIntoView("investment")}
          >
            My investment
          </div>
        </div>
      </div>
      <div className="w-auto h-85vh p-4 sm:py-0  overflow-y-scroll scrollable-content">
        <div id="portfolio">
          <div className="text-2xl pb-4 font-extrabold">My portfolio</div>

          <div className="flex justify-between items-center">
            <div className="grid grid-cols-2 text-x1 gap-4 md:grid-cols-3 font-bold text-dark-secondaryTextColor">
              ({portfolio?.totalProperty}) Properties
            </div>
            <div className="px-3 py-1 sm:px-4 sm:py-2 sm:mr-2 text-sm  bg-dark-cardBgColor font-semibold cursor-pointer text-dark-primaryTextColor shadow-custom rounded-full">
              Withdraw Fund
            </div>
          </div>

          <div className="flex gap-4 py-4">
            <InfoBox
              title="PORTFOLIO VALUE"
              value={portfolio?.portfolio_value}
            />
            <InfoBox title="CASH BALANCE" value={portfolio?.cash_balance} />
          </div>
        </div>

        <div id="summary">
          <div className="text-x1 font-extrabold text-dark-secondaryTextColor">
            Summary
          </div>
          <div className="flex flex-wrap gap-4 py-4">
            <InfoBox title="Rental income" value={portfolio?.rental_income} />
            <InfoBox title="Appreciation" value={portfolio?.appreciation} />
            <InfoBox title="Total return" value={portfolio?.total_return} />
            <InfoBox title="Next payout" value={portfolio?.next_payout} />
          </div>
          <div className="text-dark-secondaryTextColor">
            The portfolio's annualized rate of return, presented in terms of the
            Internal Rate of Return (IRR), serves as an informative metric
            rather than a projection of future performance.
          </div>
        </div>

        <div id="investment">
          <div className="text-x1 py-4 font-extrabold text-dark-secondaryTextColor">
            My investment list
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full ">
              <thead>
                <tr className="text-left text-dark-primaryTextColor bg-dark-cardBgColor border">
                  <th className="p-2">Property name</th>
                  <th className="p-2">Property type</th>
                  <th className="p-2">Location</th>
                  <th className="p-2">Invested amount</th>
                </tr>
              </thead>
              <tbody>
                {portfolio?.my_investment.map((item, index) => (
                  <tr
                    key={index}
                    className="text-left font-bold border cursor-pointer"
                    onClick={() =>
                      navigate(`/dashboard/properties/${item?.id}`)
                    }
                  >
                    <td className="p-2">{item?.property_name}</td>
                    <td className="p-2">{item?.property_type}</td>
                    <td className="p-2">{item?.location?.place}</td>
                    <td className="p-2">{item?.invested_amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
