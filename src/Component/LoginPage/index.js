import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { banner } from "../../image";
import { ON_LOGIN } from "../redux/actions";
import login from "./App.module.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataLocal, setDataLocal] = useState([]);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("user"));
  //   setEmail(data.email);
  //   setPassword(data.password);
  // }, []);

  const handleInputChange = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };
  const hanldeClickSubmit = () => {
    const data = getData("users") === null ? [] : getData("users"); // return data on LocalStorage

    //func check mail
    const checkEmail = () => {
      if (data.length === 0) {
        return false; // ko dang nhap duoc
      } else {
        const a = data.filter((elm) => elm.email === email);
        if (a.length === 0) {
          return false;
        } else if (a.length === 1) {
          return true; // dang nhap thanh cong!
        }
      }
    };
    //func check pass
    const checkPass = () => {
      if (data.length === 0) {
        return false; // ko dang nhap duoc
      } else {
        const a = data.filter((elm) => {
          return elm.password === password;
        });
        if (a.length === 0) {
          return false;
        } else {
          return true; // dang nhap thanh cong!
        }
      }
    };

    // xu ly login
    if (validateForm()) {
      if (checkEmail() && checkPass()) {
        saveLocal(true);
        console.log("login thanh cong");
      } else {
        if (!checkEmail()) {
          console.log("nhap email dung!");
        } else if (!checkPass()) {
          console.log("Nhap pass dung !");
          setPassword("");
        } else {
          console.log("Error");
        }
      }
    }
    // dispath 1 action
    dispatch(ON_LOGIN({ email, password }));
  };

  //save data on local
  const saveLocal = (boolean) => {
    const data = getData("users") === null ? [] : getData("users");
    const res = data.filter((elm) => elm.email === email);
    localStorage.setItem(
      "user",
      JSON.stringify({ email, password, name: res[0].name, compolete: boolean })
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

  //validate
  const validateForm = () => {
    if (email === "" && password === "" && password.length < 8) {
      window.alert("nhap chua dung! Vui long nhap day du thong tin");
      return false;
    }
    return true;
  };
  return (
    <div className={login.wapper} style={{ backgroundImage: `url(${banner})` }}>
      <div className={login.item}>
        <h4> Sign In</h4>

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

        <Link to="/">
          <button onClick={hanldeClickSubmit}>Sign In</button>
        </Link>

        <p>
          Create an account?{" "}
          <Link to="/Register">
            <span>Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
