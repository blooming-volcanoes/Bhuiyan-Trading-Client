import React from "react";
import future from "../../../assets/Images/future.png";

export default function Future() {
  return (
    <section className="py-4">
      <div className="main-container">
        <div className="grid-cols-2 items-center md:grid">
          <div className="">
            <img className="w-full p-4" src={future} alt="" />
          </div>
          <div className="">
            <p className="text-justify text-xl font-bold text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              repellendus impedit placeat adipisci quibusdam iure vel sequi
              reprehenderit nobis. Facilis tempora nam sapiente sequi, officiis
              dolorem quos inventore aspernatur facere. Autem sint accusamus
              minus corrupti animi, veritatis neque aut distinctio doloremque
              veniam molestiae delectus magni totam eum libero error a?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
