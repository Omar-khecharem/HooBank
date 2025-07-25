import React from "react";
import styles from "../Style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
const Hero = () => (
  <section
    id="home"
    className={`flex
 md:flex-row flex-col ${styles.paddingY}

 `}
  >
    <div
      className={` flex-1 ${styles.flexStart}
 flex-col xl:px-0 sm:px-16 px-6

`}
    >
      <div
        className="flex flex-row items-center py-[6px] px-4
      bg-discount-gradient  rounded-[10px] mb-2
      "
      >
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white"> 20% </span>
          Discount for
          <span className="text-white"> 1 Month </span>
          Account
        </p>
      </div>
      <div
        className="flex flex-row 
      justify-between items-center w-full
      "
      >
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] ">
          The next{" "}
          <br
            className="sm:block
          hidden"
          />
          {""}
          <span className="text-gradient">Generation</span>{" "}
        </h1>
        <div className="md:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className="flex-1 font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full ">
        Payment method
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam quos
        dolorum, architecto quam nostrum delectus autem magnam suscipit laborum
        pariatur, impedit esse, ducimus facilis! Eveniet nostrum numquam illo
        vitae cupiditate.
      </p>
    </div>
    <div className={`${styles.flexCenter} flex flex-1 md:my-0 my-10 relative`}>
      <img
        src={robot}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      <div
        className="absolute z-[0] right-0 
      w-[40%] h-[35%] top-0  md:pink__gradient
     
      "
      ></div>
      <div
        className="absolute z-[1] 
      w-[80%] h-[80%] bottom-40 rounded-full   md:white__gradient 
      "
      ></div>
      <div
        className="absolute z-[0] 
      w-[50%] h-[50%] right-20  md:blue__gradient
      "
      ></div>

     
    </div>
    <div className={`${styles.flexCenter}`}>
     <div className={`md:hidden `} >
        <GetStarted />
      </div></div>
  </section>
);

export default Hero;
