import React from "react";
import styles from "../Style";
import Button from "./Button";
const Testimonials = () => (
  <section className={` ${styles.paddingX} p-10 bg-black-gradient rounded-xl md:flex mt-10 items-center `}>
    <div className="">
      <h1 className={` ${styles.heading2}`}>Let’s try our service now!</h1>
      <p className={`${styles.paragraph} my-5 sm:max-w-[40%]`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <Button />
  </section>
);

export default Testimonials;
