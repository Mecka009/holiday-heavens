import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { auth, sendPasswordReset } from "../../firebase";
import "../SignUp/SignUp.css";
import Navbar from "../../Components/Navbar/Navbar";
function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
    <><Navbar/>
    <div className="reset">
      <div className="reset__container">
        <input
        style={{color:"black"}}
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button
          className="reset__btn"
          onClick={() => sendPasswordReset(email)}
        >
          Send password reset email
        </button>
        <div>
          Don't have an account? <NavLink to="/SignUp">Register</NavLink> now.
        </div>
      </div>
    </div></>
  );
}
export default Reset;