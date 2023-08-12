'use client'

import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./ScrollUp.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");

    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });
  return (
    <a href="#" className="scrollup">
      <AiOutlineArrowUp className="scrollup_icon" />
    </a>
  );
};

export default ScrollUp;
