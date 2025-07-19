import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../Style";
const Billing = () => (
  <section
    id="product"
    className={`${layout.sectionReverse} ${styles.paddingX} `}
  >
    <div className={`${layout.sectionImgReverse}  md:flex-row flex flex-col ${styles.paddingY}`}>
      <img
        src={bill}
        alt="biling"
        className="w-[100%] h-[100%]  relative z-[5] md:max-w-[50%]"
      />
      <div className="asolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
      <div className="asolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
      <div className="asolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>

      <div className={` h-full justify-center flex md:flex-col gap-5 flex-col items-start`}>
        <h2 className={`${styles.heading2}  md:text-nowrap  `}>
          {" "}
          Easily control your <br className="sm:block hidden " />
          billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} `}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className={`${styles.flexCenter} gap-2`}>
          <img
            src={apple}
            alt="apple"
            className="cursor-pointer hover:ring-1 hover:rounded-md "
          />
          <img
            src={google}
            alt="google"
            className="cursor-pointer hover:ring-1 hover:rounded-md "
          />
        </div>
      </div>
    </div>
  </section>
);

export default Billing;
