import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero sequi
          animi provident eos enim placeat, quia asperiores perferendis
          recusandae voluptates, ipsam a. Ex quibusdam molestiae a commodi. Cum,
          corrupti vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          modi optio? Magni quae itaque facere inventore dolores impedit
          pariatur voluptate, temporibus quam, in minima dolor, ullam nihil
          debitis voluptatem ipsam.
        </p>
      </div>
    </div>
  );
};
