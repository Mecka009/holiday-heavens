import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../SignUp/SignUp.css";
import Navbar from "../../Components/Navbar/Navbar";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      navigate("/Login")};
  }, [user, loading]);
  return (
    <>
    <Navbar/>
    <div className="login">
      <div className="login__container">
        <input
        style={{color:"black"}}
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
        style={{color:"black"}}
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div style={{color:"black"}}>
          <NavLink to="/reset">Forgot Password</NavLink>
        </div>
        <div style={{color:"black"}}>
          Don't have an account? <NavLink to="/SignUp">Register</NavLink> now.
        </div>
      </div>
    </div>
    </>
  );
}
export default Login;


// import React, { useState } from "react";
// import { useNavigate, NavLink } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase";

// const Login = () => {
//   const [err, setErr] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const email = e.target[0].value;
//     const password = e.target[1].value;

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate("/")
//     } catch (err) {
//       setErr(true);
//     }
//   };
//   return (
//     <div className="formContainer">
//       <div className="formWrapper">
//         <span className="logo">Lama Chat</span>
//         <span className="title">Login</span>
//         <form onSubmit={handleSubmit}>
//           <input type="email" placeholder="email" />
//           <input type="password" placeholder="password" />
//           <button>Sign in</button>
//           {err && <span>Something went wrong</span>}
//         </form>
//         <p>You don't have an account? <NavLink to="/sign-up">Register</NavLink></p>
//       </div>
//     </div>
//   );
// };

// export default Login;