import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../css/Login.module.css";
import { auth, get_userData } from "../Redux-Store/Home/Action";

const Login = () => {
  const [loginEmail, setloginEmail] = React.useState("")
  const [loginPassword, setLoginPassword] = React.useState("")
  const userData = useSelector((state) => state.userData)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onLogin = () => {
    var data = false
    console.log(userData)
    for (var i = 0; i < userData.length; i++) {
      console.log(userData[i].email, userData[i].Password)
      if (userData[i].email === loginEmail && userData[i].Password === loginPassword) {
        data = true;
      }
    }
    if (data === true) {

      dispatch(auth(true))
      navigate("/homepage")
    }
    else {
      console.log(typeof loginEmail, typeof loginPassword)
      console.log(loginEmail, loginPassword)
      alert("Invalid Credential")
      navigate("/")
    }
  }

  React.useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((res) => dispatch(get_userData(res)))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt="" />
      </div>
      <div className={styles.loginbox}>
        <form action="">
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" value={loginEmail} onChange={(e) => setloginEmail(e.currentTarget.value)} />
          <input type="password" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.currentTarget.value)} />
          <button onClick={onLogin}>Sign In</button>
        </form>
      </div>
      <div className={styles.footer}>
        <p>Questions? Call 000-800-040-1843</p>
        <div className={styles.links}>
          <div>
            <p>FAQ</p>
            <p>Cookie Preferences</p>
          </div>
          <div>
            <p>Help Centre</p>
            <p>Corporate Information</p>
          </div>
          <div>
            <p>Terms of Use</p>
          </div>
          <div>
            <p>Privacy</p>
          </div>
        </div>
        <select name="" id="">
          <option value="">English</option>
          <option value="">हिन्दी </option>
        </select>
      </div>
    </div>
  );
};

export default Login;
