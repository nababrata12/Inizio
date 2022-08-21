import React from "react";
import { clients } from "../constants";
import styles from "../style";

const Sponsers = () => (
  <section id="sponsers" className={`${styles.flexCenter} my-4`}>
    <div>
      <h2 className="flex-1 font-poppins flex justify-center items-center font-semibold ss:text-[50px] text-[40px] text-white ss:leading-[100.8px] leading-[75px]">
        OUR SPONSOR
      </h2>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
          >
            <img
              src={client.logo}
              alt="client_logo"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Sponsers;
