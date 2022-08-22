import React from "react";
import whowe from "../../../assets/Images/whowe.png";

export default function WhoWe() {
  return (
    <section className="whowe-bg">
      <div className="container mx-auto flex h-[550px] items-center justify-center px-20">
        <div className="w-[50%]">
          <h3 className="mb-3 text-4xl text-white">Who we are?</h3>
          <p className="text-justify text-xl text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta
            iste nam perferendis fugit. Numquam, repudiandae! Ipsa rerum,
            aspernatur incidunt nemo odio ratione accusamus nam eligendi eius
            eos distinctio, dicta tempore animi. Veritatis blanditiis esse quam
            doloremque assumenda dolorem sed delectus necessitatibus aperiam,
            sint porro, sequi quaerat illum asperiores culpa pariatur ducimus
            eum. Quo perferendis distinctio neque, soluta, id incidunt ullam
            vitae quasi quaerat quis cupiditate nam commodi reiciendis officiis
            odio? Et officiis vero nulla animi saepe sed, at mollitia quod
            tenetur nostrum facere a aut molestiae laboriosam? Sunt minima minus
            laborum doloremque quos ex delectus voluptates quas id neque!
          </p>
        </div>
        <div className="w-[50%]">
          <img className="w-full p-6" src={whowe} alt="" />
        </div>
      </div>
    </section>
  );
}
