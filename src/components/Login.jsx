import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../css/Login.module.css";
import { auth, get_userData } from "../Redux-Store/Home/Action";

const Login = () => {
  const [loginEmail, setloginEmail] = React.useState("")
  const [loginPassword, setLoginPassword] = React.useState("")
  const initState = {
    email: "",
    password: ""
  }
  const [formData, setFormData] = React.useState(initState)
  // const userData = useSelector((state) => state.userData)
  // const navigate = useNavigate()
  const dispatch = useDispatch()
  // const onLogin = () => {
  //   var data = false
  //   console.log(userData)
  //   for (var i = 0; i < userData.length; i++) {
  //     console.log(userData[i].email, userData[i].Password)
  //     if (userData[i].email === loginEmail && userData[i].Password === loginPassword) {
  //       data = true;
  //     }
  //   }
  //   if (data === true) {

  //     dispatch(auth(true))
  //     navigate("/homepage")
  //   }
  //   else {
  //     console.log(typeof loginEmail, typeof loginPassword)
  //     console.log(loginEmail, loginPassword)
  //     alert("Invalid Credential")
  //     navigate("/")
  //   }
  // }

  // React.useEffect(() => {
  //   fetch("https://netflixd.herokuapp.com/users")
  //     .then((res) => res.json())
  //     .then((res) => dispatch(get_userData(res)))
  //     .catch((err) => console.log(err))
  // }, [])

  const navigate = useNavigate();
  const handleChange = (e) => {
    let { name, value } = e.currentTarget
    setFormData({
      ...formData,
      [name]: value
    })

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.email === "" || formData.password === "") {
      alert("Fill the Credential")
    }

    fetch("http://localhost:8000/users/login", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "content-type": "application/json" }
    })
      .then((res) => res.json())
      .then((res) => {
        JSON.stringify(res)
        setFormData(initState)

        if (res.token) {
          dispatch(auth(true))
          navigate("/homepage")
        }

      })
      .catch((err) => {
        console.log(err)
        alert("Invalid Credential")
        navigate("/")
      })

  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt="" />
      </div>
      <div className={styles.loginbox}>
        <form action="" onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <input className={styles.loginbox_input} type="email" placeholder="Email or phone number" name="email" value={formData.email} onChange={handleChange} />
          <input className={styles.loginbox_input} type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
          <input className={styles.signIn} type="submit" value="Sign In" />
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
