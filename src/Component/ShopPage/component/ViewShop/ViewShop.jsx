import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ACTION_SUBMIT_ID } from "../../../redux/actions";
import { stateFormatCash } from "../../../redux/selectors";
import viewshop from "./App.module.css";

function ViewShop(props) {
  const { category } = props;
  const formatCash = useSelector(stateFormatCash);
  const dispatch = useDispatch();

  const handleClickProduct = (e) => {
    dispatch(ACTION_SUBMIT_ID(e.target.id));
  };

  return (
    <>
      <div>
        <div className={viewshop.input}>
          <input />
        </div>
        {category.map((elm, index) => (
          <div key={index} className={viewshop.item}>
            <Link to="/Detail">
              <img
                src={elm.img1}
                id={elm._id.$oid}
                onClick={handleClickProduct}
              />
            </Link>
            <h3>{elm.name}</h3>
            <p>{formatCash(elm.price) + " VND"}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ViewShop;
