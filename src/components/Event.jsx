import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Event = () => (
  <section id="event" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Want a fresh start with your great idea{" "}
        <br className="sm:block hidden" /> that stands out from the crowd?
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Get ready to wow our Judges with a superb pitch that makes the
        difference. Bloom the entrepreneur in you! E-Cell NITA is thrilled to
        provide you the perfect opportunity to showcase your entrepreneurial
        potential to startup ecosystem through the Business Pitch Competition
      </p>

      <Button styles={`mt-10`} />

      {/* gradient start */}
      <div className="absolute z-[0] w-[10%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[20%] h-[20%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[15%] h-[30%] right-20 bottom-20 blue__gradient" />
      {/* gradient end */}
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Event;
