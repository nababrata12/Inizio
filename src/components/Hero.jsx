import styles from "../style";
import { bulb, inizio } from "../assets";
import Getstarted from "./Getstarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Dare To <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Initiate</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <Getstarted />
          </div>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          E-Cell NITA is thrilled to provide you the perfect opportunity to
          showcase your entrepreneurial potential and gain exposure to startup
          ecosystem through the Business Pitch Competition
        </p>
        <h5
          className={`text-lg text-white font-bold font-serif ml12   max-w-[470px] mt-5`}
        >
          - INIZIO
        </h5>
        <a href={inizio} target="_blank" rel="noopener noreferrer">
          <button
            type="button"
            className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] mt-8 outline-none ${styles}`}
          >
            Download Brochure
          </button>
        </a>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={bulb}
          alt="bulb"
          className="w-[80%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <Getstarted />
      </div>
    </section>
  );
};

export default Hero;
