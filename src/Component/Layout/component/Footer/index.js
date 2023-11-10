import footer from "./App.module.css";

function Footer() {
  return (
    <>
      <div className={footer.wapper + " row"}>
        <div className="{'col-md-3'}">
          <h3>Customer services</h3>
          <a href="#">Help & Contact Us</a>
          <a href="#">Returns & Refunds</a>
          <a href="#">Online Store</a>
          <a href="#">Terms & Conditions</a>
        </div>
        <div className="{'col-md-3'}">
          <h3>Company</h3>
          <a href="#">What We Do</a>
          <a href="#">Available Services</a>
          <a href="#">Latest Posts</a>
          <a href="#">FAQs</a>
        </div>
        <div className="{'col-md-3'}">
          <h3>Sociakl media</h3>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">Facebooks</a>
          <a href="#">Pinterest</a>
        </div>
      </div>
    </>
  );
}

export default Footer;
