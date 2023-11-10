import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { REMOVE_CART, UPDATE_CART } from "../redux/actions";
import { dataProduct, stateFormatCash } from "../redux/selectors";
import cart from "./App.module.css";

function CartPage() {
  //hooks
  const [total, setTotal] = useState(0);
  const [valueQuantyti, setValue] = useState(1);

  //dispatch
  const dispatch = useDispatch();

  //selec
  const listProduct = useSelector(dataProduct); // return [...]
  const formatCash = useSelector(stateFormatCash);

  useEffect(() => {
    const total = listProduct.reduce((total, elm) => {
      return total + elm.total;
    }, 0);
    setTotal(total);
  }, [listProduct]);

  //func
  const handleClickRemove = (e) => {
    // xoa data on local
    // xoa on store
    dispatch(REMOVE_CART(e.target.id));
  };

  const hanldeInputChange = (e) => {
    // dispatch action update store
    dispatch(UPDATE_CART({ value: e.target.value, id: e.target.id }));
    // update local
  };

  return (
    <div className={cart.wapper}>
      <div className={cart.item1 + " row"}>
        <h3>CART</h3>
        <p>CART</p>
      </div>
      <h3 className="row">SHOPPING CART</h3>
      <div className={cart.item2 + " row"}>
        <div className={cart.table + " col-md-8"}>
          <table>
            <thead>
              <tr>
                <th scope="col">IMAGE</th>
                <th scope="col">PRODUCT</th>
                <th scope="col">PRICE</th>
                <th scope="col">QUANTYTI</th>
                <th scope="col">TOTAL</th>
                <th scope="col">REMOVE</th>
              </tr>
            </thead>
            <tbody>
              {listProduct.length === 0 ? (
                <>
                  <div style={{ padding: "50px" }}></div>
                </>
              ) : (
                listProduct.map((elm, index) => (
                  <tr key={index}>
                    <td>
                      <img src={elm.image} />
                    </td>
                    <td id={index + 1}>{elm.product}</td>
                    <td>{formatCash(elm.price)}</td>
                    <td>
                      <input
                        id={index}
                        type="number"
                        value={elm.quantyti}
                        onChange={hanldeInputChange}
                      />
                    </td>
                    <td>{formatCash(elm.total)}</td>
                    <td>
                      <i
                        id={index}
                        className="fa fa-trash"
                        aria-hidden="true"
                        onClick={handleClickRemove}
                      ></i>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <div className={cart.btn + " row"}>
            <Link to="/Shop">
              <button id="prev-btn">
                <i className="fa fa-long-arrow-left" aria-hidden="true"></i>{" "}
                Continue Shopping
              </button>
            </Link>
            <Link to="/Checkout">
              <button id="next-btn">
                Proceed to checkout{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </button>
            </Link>
          </div>
        </div>
        <div className={cart.total + " col-md-4"}>
          <h3>CART TOTAL</h3>
          <h6>
            SUBTOTAL: <span>{formatCash(total)}</span>
          </h6>
          <p>
            TOTAL: <span>{formatCash(total)}</span>
          </p>
          <input placeholder="Enter your coupon" />
          <button>
            <i className="fa fa-gift" aria-hidden="true"></i> Apply coupon
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
