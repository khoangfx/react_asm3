import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stateData, stateFormatCash } from "../redux/selectors";
import RelatedProduct from "./component/RelatedProduct";
import detail from "./App.module.css";
import { ADD_CART } from "../redux/actions";
import { Link } from "react-router-dom";

function DetailPage({ id }) {
  const [data, setData] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [quantyti, setQuantyti] = useState(1);
  console.log(id);

  //dispacth
  const dispatch = useDispatch();

  //selec
  const datas = useSelector(stateData); // return 1 promise.
  const formatCash = useSelector(stateFormatCash);

  //hooks
  useEffect(() => {
    datas.then((res) => {
      const a = res.filter((elm) => elm._id.$oid === id);
      setData(a[0]);

      //local
      localStorage.setItem("product", JSON.stringify(a[0]));
    });
  }, []);

  useEffect(() => {
    datas.then((res) => {
      setRelatedProduct(
        res.filter((elm) => {
          return (
            elm.category === data.category && elm._id.$oid !== data._id.$oid
          );
        })
      );
    });
  }, [data]);

  // func save local

  // su kien change input quantyti
  const handleInputQuantytiChange = (e) => {
    if (Number(e.target.value) > 0) {
      setQuantyti(Number(e.target.value));
    } else {
      console.log("nhap so lon hon 0");
    }
  };
  // su kien nut ADD
  const handleClickSubmit = () => {
    //lay data tu local
    const data = JSON.parse(localStorage.getItem("product")) || {};
    // tao Obj
    const valueSubmit = {
      image: data.img1,
      product: data.name,
      price: Number(data.price),
      quantyti: Number(quantyti),
      total: data.price * quantyti,
    };
    const dataSubmit = JSON.parse(localStorage.getItem("dataProduct")) || [];
    dataSubmit.push(valueSubmit);
    // luu local
    localStorage.setItem("dataProduct", JSON.stringify(dataSubmit));
    console.log(dataSubmit);
    // dispatch obj.
    dispatch(ADD_CART(valueSubmit));
  };

  return (
    <>
      <div className={detail.item1 + " row"}>
        <div className={detail.itemImg1 + " col-md-2"}>
          <img src={data.img2} />
          <img src={data.img3} />
          <img src={data.img4} />
        </div>
        <div className={detail.itemImg2 + " col-md-4"}>
          <img src={data.img1} />
        </div>
        <div className={detail.itemImg3 + " col-md-6"}>
          <h3>{data.name}</h3>
          <p>{data.price ? formatCash(data.price) + " VND" : ""}</p>
          <p>{data.short_desc}</p>
          <strong>
            CATEGORY: <span>{" " + data.category}</span>
          </strong>
          <form action="#">
            <label>QUANTITY</label>
            <input
              type="number"
              value={quantyti}
              onChange={handleInputQuantytiChange}
            />
            <Link to="/Cart">
              <button onClick={handleClickSubmit}>Add to cart</button>
            </Link>
          </form>
        </div>
      </div>
      <div className={detail.wapperDes + " row"}>
        <div className={detail.itemDes}>DESCRIPTION</div>
        <div>
          <h3>PRODUCT DESCRIPTION</h3>
          <p>{data.long_desc}</p>
        </div>
      </div>

      {relatedProduct ? (
        <RelatedProduct data={relatedProduct} formatCash={formatCash} />
      ) : (
        <></>
      )}
    </>
  );
}

export default DetailPage;
