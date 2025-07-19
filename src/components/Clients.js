import React from "react";
import { clients } from "../constants";
import styles from "../Style";

const Clients = () => (
  <section className="">
    <div className="flex flex-wrap justify-evenly my-7  items-center gap-4 ">
      {clients.map((items, index) => (
        <div key={index} className="flex justify-center  items-center">
          <img src={items.logo} alt={items.id} className="w-[200px] h-auto object-contain" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
