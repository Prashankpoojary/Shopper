import React from "react";
import "./NewsLetter.css";

export const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <input type="email" placeholder="Enter Your Emaid Id" />
      <button>Subscribe</button>
    </div>
  );
};
