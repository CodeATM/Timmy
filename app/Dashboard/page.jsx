"use client";

import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useState, useCallback} from "react";
import { useRouter } from "next/navigation";
import "./Dashboard.css";

const Inputmodal = ({ toggleTab, toggleState }) => {
  const router = useRouter();
  const [image, setImage] = useState(null);
  const [submitting, setIsSubmitting] = useState(false);
  const [variant, setVariant] = useState('login')


  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login'? 'register': 'login')
  }, [])


  const [details, setDetails] = useState({
    username: "",
    password: "",
  });

  const createPromptlogin =useCallback(async (e) => {
    // e.preventDefau
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify(details),
      });

      if (response.ok) {
        localStorage.setItem("username", details.username);
        router.push("/Dashboard/Control");
        console.log(localStorage)
      }
    } catch (error) {
      console.log(error);
    } finally {
      alert('You are logged in')
      setIsSubmitting(false);
    }
  },[details.email, details.password]);


  const createPromptregister =useCallback(async (e) => {
    // e.preventDefau
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/user/new", {
        method: "POST",
        body: JSON.stringify(details),
      });

      if (response.ok) {
        localStorage.setItem("username", details.username);
        router.push("/Dashboard/Control");
        console.log(localStorage)
      }
    } catch (error) {
      console.log(error);
    } finally {
      alert('You are logged in')
      setIsSubmitting(false);
    }
  },[details.email, details.password]);



  return (
    <div className="signIn_container">
      <div className=".signIn_container">
        <h3 className="signIn_title">
          {variant === 'login'? 'SignIn' : 'Add an account'}
        </h3>
        <form>
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

        <button onClick={() => {variant == 'login' ? createPromptlogin() :createPromptregister()  }} type="submit" className="button">
         {variant === 'login' ? 'sign In': 'Add user'}
        </button>

        <p className="p" onClick = {() => toggleVariant()}>Add Account</p>
      </div>
    </div>
  );
};

export default Inputmodal;
