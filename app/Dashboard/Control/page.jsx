'use client'


import React, {useState, useEffect} from "react";
import "./Control.css";
import { useRouter } from "next/navigation";
import { AiOutlineLogout } from "react-icons/ai";
import Inputmodal from "./Inputmodal";
import Table from "./Table";
// import { connectDB } from "@utils/database";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    if(!localStorage.getItem('username')){
      router.push("/Dashboard");
    }
  }, [])
  

  const [toggleState, setToggleState] = useState(0)

  const toggleTab = (index) => {
      setToggleState(index)
  }
  return (
    <div className="Dashboard">
      <div className="header">

        <div className="header_container container">
          <h3 className="header_title">Welcome Back, Timmy</h3>

          <div className="header_dashboard-icon">
            <AiOutlineLogout className="logout_icon" />
          </div>
        </div>
      </div>

      <Table toggleTab = {toggleTab}/>

      <Inputmodal toggleTab = {toggleTab} toggleState = {toggleState}/>
    </div>
  );
};

export default page;
