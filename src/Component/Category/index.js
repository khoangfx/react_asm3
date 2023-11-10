import category from "./App.module.css";
import { product1, product2, product3, product4, product5 } from "../../image";
import { Link } from "react-router-dom";

function Category() {
  return (
    <>
      <div className={category.wapper}>
        <div className={`row  ${category.title}`}>
          <p>Carefully created collections</p>
          <h3>browse our categories</h3>
        </div>
        <div className={`row ${category.item1}`}>
          <Link className="col-md-6" to="/Shop">
            <img src={product1} />
          </Link>
          <Link className="col-md-6" to="/Shop">
            <img src={product2} />
          </Link>
        </div>
        <div className={`row ${category.item2}`}>
          <Link className="col-md-4" to="/Shop">
            <img src={product3} />
          </Link>
          <Link className="col-md-4" to="/Shop">
            <img src={product4} />
          </Link>
          <Link className="col-md-4" to="/Shop">
            <img src={product5} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Category;
