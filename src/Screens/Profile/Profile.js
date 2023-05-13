import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import "./Profile.css"
import Navbar from "../../Components/Navbar/Navbar";
import { images } from "../../Constant/index";
import { auth, db, Logout, storage } from "../../firebase";
import { query, collection, getDocs, where, updateDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      setEmail(data.email);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/sign-up");
    fetchUserName();
  }, [user, loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];

    //Create a unique image name
    const date = new Date().getTime();
    const storageRef = ref(storage,`profile/${name}`);
    const userRef = query(collection(db, "users"), where("uid", "==", user?.uid));
    const findUsers = await getDocs(userRef);
    findUsers.forEach( async (user) => {
      const getUser = doc(db, 'users', user.id);
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateDoc(getUser, {
              photoURL: downloadURL,
            });
            navigate("/profile")
          } catch {
            console.log(err);
            setErr(true);
          }
        });
      }); 
    });
  };

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div className="text">Logged in as</div>
        <div className="text">{name}</div>
        <div className="text">{email}</div>
        <NavLink to="/edit">
          <button className="dashboard__btn">Edit</button>
        </NavLink>
        <button className="dashboard__btn" onClick={Logout}>
          Logout
        </button>
      </div>
      <div className="picture">
        <form onSubmit={handleSubmit} className="form">
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img
              src={images.logo}
              style={{ height: "50px", marginLeft: "20px" }}
              alt=""
            />
            <span style={{ marginLeft: "20px" ,color:"white" }}>Add an avatar</span>
            <button style={{ borderRadius: "20px", marginLeft: "20px", color:'white'}}>
              Upload
            </button>
          </label>
        </form>
      </div>
    </div>
  );
}
export default Dashboard;
