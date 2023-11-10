import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { dataProduct, stateFormatCash } from "../redux/selectors";
import check from "./App.module.css";
function CheckoutPage() {
  //selec
  const listProduct = useSelector(dataProduct);
  const formatCash = useSelector(stateFormatCash);

  //hooks
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = listProduct.reduce((total, elm) => {
      return total + elm.total;
    }, 0);
    setTotal(total);
  }, [listProduct]);

  return (
    <>
      <div className={check.wapper}>
        <div className={check.item1 + " row"}>
          <h3>CHECKOUT</h3>
          <p>
            HOME/CART/<span>CHECKOUT</span>
          </p>
        </div>
        <div className="row">
          <div className={check.form + " col-md-8"}>
            <label>FULL NAME:</label>
            <input placeholder="Enter your full name here!" />
            <label>EMAIL:</label>
            <input placeholder="Enter your email here!" />
            <label>PHONE NUMBER:</label>
            <input placeholder="Enter your phone number here! " />
            <label>ADDRESS:</label>
            <input placeholder="Enter your address here!" />
            <button>Place order</button>
          </div>
          <div className={check.order + " col-md-4"}>
            <h3>YOUR ORDER</h3>
            <ul>
              {listProduct.length === 0 ? (
                <>
                  <ul style={{ padding: "30px" }}></ul>
                </>
              ) : (
                listProduct.map((elm, index) => (
                  <li key={index}>
                    <span>{elm.product}</span>{" "}
                    <span>{formatCash(elm.price)}</span>x
                    <span>{elm.quantyti}</span>
                  </li>
                ))
              )}
            </ul>
            <p>{`TOTAL: ${formatCash(total)}`}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
