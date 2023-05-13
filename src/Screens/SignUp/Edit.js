import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import {
  auth,
  db,
  useAuth
} from "../../firebase";
import { updateEmail, updateUser } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import "../SignUp/SignUp.css";
import { query, collection, getDocs, where } from "firebase/firestore";
function Edit() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const currentUser = useAuth();

    const fetchUserName = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setName(data.name);
        setEmail(data.email)
      } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
    };

    const updateUser = async () => {
        const userRef = query(collection(db, "users"), where("uid", "==", user?.uid));
        const findUsers = await getDocs(userRef);
        findUsers.forEach( async (user) => {
         const getUser = doc(db, 'users', user.id);
         await updateDoc(getUser, {
          name: name,
          email: email
         });
        });
        if (user) navigate("/profile");
        updateEmail(auth.currentUser, email).then(() => {
          console.log("Email Updated...!")
        }).catch((err) => {
          console.log(err);
        })
       } 
    useEffect(() => {
      if (loading) return;
      if (!user) navigate("/Profile");
      fetchUserName();
    }, [user, loading]);
    return (
        <><Navbar/>
      <div className="register">
        <div className="register__container">
          <input
          style={{color:"black"}}
            type="text"
            className="register__textBox"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
          <input
          style={{color:"black"}}
            type="text"
            className="register__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <button className="register__btn" onClick={updateUser}>
            Update
          </button>
        </div>
      </div>
      </>
    );
  }
export default Edit;