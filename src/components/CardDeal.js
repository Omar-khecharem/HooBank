import React from "react";
import Button from "./Button";
import styles from "../Style";
import { card } from "../assets";
const CardDeal = () => (
  <section className={`md:${styles.flexCenter}  `}>
    <div className="  md:w-[50%]">
      <h2 className={`md:${styles.heading2}  md:text-nowrap  `}>
        Find a better card deal {" "}
        <br className="hidden md:block" />
        in few easy steps.
      </h2>
      <p className={`${styles.paragraph} my-5 max-w-[500px] `}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button />
    </div>
    <div className="md:max-w-[50%] flex justify-center  mt-10">
      <img src={card} alt="" className="w-[85%]" />
    </div>
  </section>
);
export default CardDeal;
