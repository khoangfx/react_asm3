/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import Popup from "../Popup";
import list from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { SHOW_POPUP } from "../redux/actions";
import { stateDetailSelector } from "../redux/selectors";
import { server } from "fontawesome";

function ListProducts() {
  const [data, setData] = useState([]);
  const [idImg, setIDImg] = useState("");

  //tao 1 ham dispatch
  // luu lai data bang custom hook useSelector
  const showPopup = useSelector(stateDetailSelector);

  // ham ban ra action
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  // ham xu ly su kien click vao img/lisproduct
  function handleCLickProduction(e) {
    dispatch(SHOW_POPUP(e.target.id));
    setIDImg(e.target.id);
  }

  function formatCash(str) {
    return str
      .split("")
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ".") + prev;
      });
  }

  return (
    <>
      <div className={`row ${list.item1}`}>
        <p>Made in hard way</p>
        <h3>Top trending products</h3>
      </div>
      <div className={`row ${list.item2}`}>
        {data.map((elm, index) => (
          <div key={index} className="">
            <img
              src={elm.img1}
              onClick={handleCLickProduction}
              id={elm._id.$oid}
            />
            <p>{elm.name}</p>
            <b>{`${formatCash(elm.price)} VND`}</b>
          </div>
        ))}
      </div>
      {showPopup && <Popup datas={data} formatCash={formatCash} id={idImg} />}
    </>
  );
}

export default ListProducts;
