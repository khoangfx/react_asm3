import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { banner } from "../../image";
import register from "./App.module.css";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dataLocal, setDataLocal] = useState([]);

  //save data on local
  const saveLocal = (data) => {
    localStorage.setItem(
      "users",
      JSON.stringify([...data, { name, email, password, phone }])
    );
  };
  // get data on local
  const getData = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };
  useEffect(() => {
    const data = getData("users") === null ? [] : getData("users");
    setDataLocal(data);
  }, []);
  const validateForm = () => {
    //func check email ton tai
    const checkEmail = () => {
      const data = getData("users") === null ? [] : getData("users");
      if (data.length === 0) {
        return false;
      } else {
        const res = data.filter((elm) => elm.email === email);
        if (res.length === 0) {
          return false;
        } else {
          return true;
        }
      }
    };
    //check cac input
    if (name === "" && email === "" && password === "" && phone === "") {
      window.alert("vui long dien day du thong tin!");
      return false;
    }
    if (password.length < 8) {
      window.alert("Password bat buoc phai tu 8 ki tu tro len");
      return false;
    }
    if (checkEmail()) {
      window.alert("Trung email!! Moi nhap email khac!");
      return false;
    }
    return true;
  };

  const handleInputChange = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    } else if (e.target.id === "phone") {
      setPhone(e.target.value);
    }
  };

  const hanldeClickSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      saveLocal(dataLocal);
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      window.location.replace("/Login");
    }
  };

  return (
    <div
      className={register.wapper}
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className={register.item}>
        <h4> Sign Up</h4>
        <input
          value={name}
          id="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={email}
          id="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email       "
        />
        <input
          value={password}
          id="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
        />
        <input
          value={phone}
          id="phone"
          onChange={handleInputChange}
          type="text"
          placeholder="Phone       "
        />
        <button onClick={hanldeClickSubmit}>Sign Up</button>
        <p>
          Login? <a href="#">Click</a>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
