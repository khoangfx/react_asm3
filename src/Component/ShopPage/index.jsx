import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_SHOWSHOP } from "../redux/actions";
import { stateData, stateShopPage } from "../redux/selectors";
import css from "./App.module.css";
import ViewShop from "./component/ViewShop/ViewShop";

function ShopPage() {
  // laays datas tu kho chung .
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  const datas = useSelector(stateData);
  datas.then((data) => setData(data));

  const categories = useSelector(stateShopPage);
  useEffect(() => {
    if (categories.length === 0) {
      return;
    } else {
      categories[0].then((data) => setCategory(data));
    }
  }, [categories]);

  //dispatch
  const dispatch = useDispatch();

  //event
  const handleClickNavbar = (e) => {
    dispatch(ACTION_SHOWSHOP(e.target.innerText));
  };

  return (
    <>
      <div className={css.item1 + " row"}>
        <h3>SHOP</h3>
        <p>shop</p>
      </div>
      <div className={css.item2 + " row"}>
        <div className={css.category + " col-md-3"}>
          <h4>categories</h4>
          <h5>Apple</h5>
          <ul>
            <li onClick={handleClickNavbar}>
              <a href="#">All</a>
            </li>
          </ul>
          <h5 onClick={handleClickNavbar}>iphone & mac</h5>
          <ul>
            <li onClick={handleClickNavbar}>
              <a href="#">iphone</a>
            </li>
            <li onClick={handleClickNavbar}>
              <a href="#">ipad</a>
            </li>
            <li onClick={handleClickNavbar}>
              <a href="#">macbook</a>
            </li>
          </ul>
          <h5>wireless</h5>
          <ul>
            <li onClick={handleClickNavbar}>
              <a href="#">airpod</a>
            </li>
            <li onClick={handleClickNavbar}>
              <a href="#">watch</a>
            </li>
          </ul>
          <h5>other</h5>
          <ul>
            <li>
              <a href="#">mouse</a>
            </li>
            <li>
              <a href="#">keyboard</a>
            </li>
            <li>
              <a href="#">other</a>
            </li>
          </ul>
        </div>
        <div className={css.view + " col-md-9"}>
          <ViewShop category={category} />
        </div>
      </div>
    </>
  );
}

export default ShopPage;
