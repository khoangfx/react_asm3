import product from "./App.module.css";

function RelatedProduct(props) {
  const { data, formatCash } = props;
  return (
    <div className={product.wapper + " row"}>
      <h2>Related Product</h2>
      {data.map((elm) => (
        <div key={elm._id.$oid}>
          <img src={elm.img1} />
          <h3>{elm.name}</h3>
          <p>{formatCash(elm.price) + " VND"}</p>
        </div>
      ))}
    </div>
  );
}

export default RelatedProduct;
