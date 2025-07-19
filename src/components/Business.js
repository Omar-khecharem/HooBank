import React from "react";
import { features } from "../constants";
import styles, { layout } from "../Style";
import Button from "./Button";
const Business = () => (
  <section id="features" className={`${layout.section} ${styles.paddingX}`}>
    <div className={`${layout.sectionInfo} `}>
      <h2 className={`${styles.heading2}`}>
        You do the business
        <br className="sm:block hidden" />
        we’ll handle the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] my-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <div className="">
        <Button />
      </div>
    </div>

    <div>
      {features.map((feature, index) => (
        <div
          key={index}
          className={` cursor-pointer  p-5 
         flex my-8 rounded-xl feature-card`}
        >
          <div
            className={`${styles.flexCenter}  bg-black-gradient h-[50px] w-[80px]  sm:w-[60px] sm:h-[60px]  rounded-full`}
          >
            <img src={feature.icon} alt="icon" className="object-contain  " />
          </div>

          <div className="ml-8">
            <h1 className="font-bold text-xl">{feature.title}</h1>
            <p className="max-w-[450px] text-dimWhite">{feature.content}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Business;
