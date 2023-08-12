'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import img from "../../public/assets/work1.jpg";
import Image from "next/image";
import { FiGithub, FiGlobe, FiTool } from "react-icons/fi";

const WorkCard = () => {
  const [allPosts, setAllPosts] = useState([]);
  const fetchPosts = async () => {
    const response = await fetch("/api/projects");
    const data = await response.json();

    setAllPosts(data);
    console.log(allPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);


  return (
    <>
    {allPosts.map((allPosts) => (
    <div className="work_container grid" key ={allPosts._id}>
      <Image
        src={allPosts.image}
        alt="about Image"
        width={500}
        height={500}
        className="work_img"
      />

      <div className="work_info">
        <h3 className="work_title">Simple Note taking App</h3>
        <p className="work_description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          repudiandae consequatur, est atque a fugit? Saepe sit incidunt
          praesentium sed aspernatur ea quod culpa accusamus nesciunt,
          dignissimos deleniti, iure voluptates!
        </p>

        <div className="work_links grid">
          <div className="work_link-button">
            <FiTool className="work_button-icon" />
            <span className="work_button-label">Frontend</span>
          </div>

          <div className="work_link-button">
            <Link href="/">
              <FiGithub className="work_button-icon" />
              <span className="work_button-label">Repository</span>
            </Link>
          </div>

          <div className="work_link-button">
            <Link href="/">
              <FiGlobe className="work_button-icon" />
              <span className="work_button-label">View</span>
            </Link>
          </div>
        </div>
      </div>
    </div>))}
    </>
  );
};

export default WorkCard;
