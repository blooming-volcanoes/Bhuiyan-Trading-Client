import React from "react";
import fish from "../../../assets/Images/pict-fish.png";
import BottomText from "../Common/BottomText";
import Heading from "../Common/Heading";

export default function BlogThree() {
  return (
    <section>
      <div className="main-container py-20">
        <div className="my-3 grid gap-4 md:grid-cols-2">
          <div></div>
          <Heading></Heading>
          <div>
            <img className="w-full" src={fish} alt="" data-aos="zoom-in" />
          </div>
          <div>
            <p className="text-justify text-xl text-black" data-aos="fade-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              cupiditate, ducimus modi quos veniam facilis eveniet quaerat
              laboriosam illo eum a, dolor quas sit dolores, est repudiandae
              fugiat unde quod optio accusantium quo doloribus ipsa dicta.
              Nesciunt repellendus aperiam quos molestias atque corporis quam,
              ab consequuntur, doloremque minima, laboriosam maiores!
            </p>
          </div>
        </div>
        <BottomText></BottomText>
      </div>
    </section>
  );
}
