import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./ScrollUp.css";

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 560) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`scrollup ${showScroll ? "show-scroll" : ""}`}
      onClick={scrollToTop}
    >
      <AiOutlineArrowUp className="scrollup_icon" />
    </div>
  );
};

export default ScrollUp;

