import { useDispatch } from "react-redux";
import { HIDE_POPUP } from "../redux/actions";
import detail from "./App.module.css";

function Popup(props) {
  console.log(props);
  const { datas, formatCash, id } = props;
  const [data] = datas.filter((elm) => elm._id.$oid === id);
  const dispatch = useDispatch();

  const handleClickBtnClose = () => {
    dispatch(HIDE_POPUP());
  };
  return (
    <>
      <div className={detail.wapper}>
        <div className={detail.container + " row"}>
          <div className={detail.item1 + " col-md-6"}>
            <img src={data.img1} />
          </div>
          <div className={detail.item2 + " col-md-6 "}>
            <div onClick={handleClickBtnClose}>
              <button>x</button>
            </div>
            <h3>{data.name}</h3>
            <p>{formatCash(data.price) + " VND"} </p>
            <p>{data.long_desc}</p>
            <button>
              <i className="fa fa-cart-arrow-down " aria-hidden="true"></i> View
              Detail
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
