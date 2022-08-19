import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const About = () => (
  <section id="about" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/startup-project-2975806-2476882.png"
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>E-CELL NIT AGARTALA</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        The Entrepreneurship Cell in NIT Agartala is a non profit organization
        that helps it's students to explore their entrepreneurial side. For a
        country to move from developing to a developed nation it requires a
        steep curve of innovation engrained within its culture,  in which an
        exponential role is played by entrepreneurs.At E-Cell, we provide a
        rostrum for students to come with the most viable solutions to every
        obstacle.The efficient and optimum level of functioning within the
        E-Cell has helped it in being one of the most sought after student
        bodies within NIT, Agaratala.{" "}
      </p>
    </div>
  </section>
);

export default About;
