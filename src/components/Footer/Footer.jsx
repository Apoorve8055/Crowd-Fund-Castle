import { MdOutlineFacebook } from "react-icons/md";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineCaretDown,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="bg-dark-cardBgColor px-8 sm:px-16 pt-4 flex flex-col ">
      <div className="flex flex-col items-center">
        <div className="p-4 font-bold text-x1 sm:text-2xl text-dark-primaryTextColor">
          Crowd Fund Castle
        </div>
      </div>
      <div className="text-xs pb-4 text-[#ffffffce] ">
        <p>
          This website is operated by Here Investments Inc. ("the Company"), a
          non-registered broker-dealer. The Company does not provide investment
          advice, endorsement, analysis, or recommendations regarding any
          securities. Any securities listed on this website are offered by Here
          Collection LLC ("the Issuer"), and all information provided on this
          site is the responsibility of the Issuer. The Company has not verified
          the adequacy, accuracy, or completeness of the information. Neither
          the Company, the Issuer, their affiliates, nor any of their respective
          officers, directors, agents, or employees make any warranty, express
          or implied, regarding the adequacy, accuracy, or completeness of the
          information on this site or the use of such information. By accessing
          this site and its pages, you agree to be bound by the terms and
          conditions, privacy policy, and any risk factors stated in an offering
          circular related to the securities offered by the Issuer. This website
          uses the term "share" to refer to interests in a series of Here
          Collection LLC.
        </p>
        <br />
        <p>
          The Issuer conducts public offerings under Regulation A of the
          Securities Act of 1933, as amended. The most recent offering circular
          for Here Collection is available here.
        </p>
        <br />
        <p>
          Periodically, the Issuer may engage in "testing the waters" for
          additional series of securities to be offered under Regulation A. For
          offerings that have not yet been qualified, no money or consideration
          is being solicited, and any sent in response will not be accepted. No
          offer to purchase the securities can be accepted, and no part of the
          purchase price can be received until the offering statement filed by
          the Company with the SEC is qualified. Any such offer may be withdrawn
          or revoked, without obligation or commitment, at any time before
          notice of acceptance is given after the date of qualification. An
          indication of interest involves no obligation or commitment of any
          kind.
        </p>
        <br />
        <p>
          The information provided in this document, presentation, renderings,
          photos, simulated views, floor plans, graphic images, and other
          marketing materials related to this project ("the Information") is
          purely illustrative and educational. It should not be considered real
          estate advice, legal advice, investment advice, or tax advice. We
          recommend conducting independent research and obtaining financial,
          legal, and professional advice before making any investment or
          business decisions. Your personal financial circumstances should be
          taken into account before making any investment decision.
        </p>
        <br />
        <p>
          Securities are offered under Regulation A through Dalmore Group LLC, a
          registered broker-dealer, and a member of FINRA (www.finra.org) and
          SIPC (www.sipc.org), acting as the Broker of Record.
        </p>
        <br />
        <p>
          The securities offered by the Issuer are highly speculative, and
          investing in such securities involves significant risk, including the
          possible loss of the principal investment amount.
        </p>
        <br />
      </div>
      <hr />
      <div className="flex flex-wrap items-center justify-between text-dark-primaryTextColor text-sm font-bold py-4 pb-8 text-center">
        <div className="flex items-center gap-2 cursor-pointer">
          English <AiOutlineCaretDown />
        </div>
        <div className="flex gap-4">
          <MdOutlineFacebook size={20} className="cursor-pointer" />
          <AiFillGithub size={20} className="cursor-pointer" />
          <AiFillTwitterCircle size={20} className="cursor-pointer" />
          <AiFillLinkedin size={20} className="cursor-pointer" />
        </div>
        <div className="flex flex-wrap gap-4 py-4 font-bold text-dark-primaryTextColor">
          <div className="cursor-pointer">Terms & Conditions </div>
          <div className="cursor-pointer">Privacy Policy </div>
          <div className="cursor-pointer">Sitemap </div>
        </div>
        <div>©2023 All Rights Reserved.</div>
      </div>
    </footer>
  );
};
export default Footer;
