import React from "react";
import styles from "../Style";
import { stats } from "../constants";
import CountUp from "react-countup";

const Stats = () => (
  <section
    className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 w-full`}
    aria-label="Statistics"
  >
    {stats.map((stat, index) => {
      // Extract numeric value for CountUp
      const numericValue = parseInt(stat.value.replace(/\D/g, ""), 10) || 0;
      const suffix = stat.value.replace(/[0-9]/g, "");

      return (
        <div
          key={stat.id}
          className={`flex-1 flex md:flex-row flex-col justify-center items-center transition-transform duration-200 hover:scale-105 group`}
        >
          <h4 className="font-poppins font-semibold text-4xl md:text-[50px] text-[30px] xs:leading-[53px] md:px-9 flex items-center">
            <CountUp end={numericValue} duration={1.5} />
            <span className="ml-1">{suffix}</span>
          </h4>
          <p className="font-poppins font-normal xs:text-[30px] text-[15px] mx-4 leading-[21px] uppercase text-gradient md:text-lg text-nowrap">
            {stat.title}
          </p>
        
          {index !== stats.length - 1 && (
            <div className="hidden md:block h-[40px] w-[3px] rounded-2xl mx-2 bg-slate-400 opacity-60 group-hover:opacity-100 transition-opacity"></div>
          )}
        </div>
      );
    })}
  </section>
);

export default Stats;