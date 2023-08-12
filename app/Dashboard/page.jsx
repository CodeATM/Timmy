"use client";

import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./Dashboard.css";

const Inputmodal = ({ toggleTab, toggleState }) => {
  const router = useRouter();
  const [image, setImage] = useState(null);
  const [submitting, setIsSubmitting] = useState(false);
  const [details, setDetails] = useState({
    username: "",
    password: "",
  });

  const createPrompt = async (e) => {
    // e.preventDefau
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify(details),
      });

      if (response.ok) {
        router.push("/Dashboard/Control");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="signIn_container">
      <div className=".signIn_container">
        <h3 className="signIn_title">Login</h3>
        <form onSubmit={createPrompt}>
          <div className="signIn_form-div">
            <label className="signIn_form-tag">Username</label>
            <input
              value={details.username}
              onChange={(e) =>
                setDetails({ ...details, username: e.target.value })
              }
              type="text"
              name="name"
              className="signIn_form-input"
              placeholder="Enter Username"
            />
          </div>

          <div className="signIn_form-div">
            <label className="signIn_form-tag">Password</label>
            <input
              value={details.password}
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              type="password"
              name="Password"
              className="signIn_form-input"
              placeholder="Enter Password"
            />
          </div>
        </form>

        <button onClick={() => createPrompt()} type="submit" className="button">
          Add Project
        </button>
      </div>
    </div>
  );
};

export default Inputmodal;
