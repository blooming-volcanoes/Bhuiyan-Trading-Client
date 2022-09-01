import React from "react";
import Heading from "../Common/Heading";

export default function BlogOne() {
  return (
    <section>
      <div className="main-container py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <Heading></Heading>
          <div>
            <p className="text-justify text-xl text-black">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              cupiditate, ducimus modi quos veniam facilis eveniet quaerat
              laboriosam illo eum a, dolor quas sit dolores, est repudiandae
              fugiat unde quod optio accusantium quo doloribus ipsa dicta.
              Nesciunt repellendus aperiam quos molestias atque corporis quam,
              ab consequuntur, doloremque minima, laboriosam maiores!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
