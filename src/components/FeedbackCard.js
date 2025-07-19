import React from "react";
import styles from "../Style";
import { feedback } from "../constants";
import { quotes } from "../assets";
const FeedbackCard = () => (
  <section className="flex flex-col" id="clients">
    <div className={`md:${styles.flexCenter} ${styles.marginY}`}>
      <h1 className={`${styles.heading2}`}>
        What people are
        <br className="" />
        saying about us
      </h1>
      <p className={`${styles.paragraph}`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className="flex md:max-w-1/3 flex-wrap justify-center md:justify-between ">
      {feedback.map((items, index) => (
        <div
          key={index}
          className={`feature-card rounded-xl  ${styles.flexCenter}  flex-col p-[50px] m-[10px] cursor-pointer `}
        >
          <img src={quotes} alt="quotes" className="py-3" />
          <p className={` ${styles.paragraph} w-[300px] text-justify py-6`}>{items.content}</p>
          <div className={`flex items-center w-full  gap-5 mt-8 `}>
            <img src={items.img} alt="" className=" max-w-[50px]" />
            <h4 className={`text-2xl`}>{items.name}</h4>
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default FeedbackCard;
