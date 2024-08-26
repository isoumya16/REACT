import "../css/product-comp.css";
import axios from "axios";
import { useState } from "react";
const Productcomp = (props) => {
  console.log(props.finalData);
  const [buttonValue, setButtonValue] = useState("Submit");
  const [productname, setProductName] = useState("");
  const [productbrand, setProductBrand] = useState("");
  const [productmodel, setProductModel] = useState("");
  const [productquantity, setProductQuantity] = useState("");
  const [productdescription, setProductDescription] = useState("");
  const [productprice, setProductPrice] = useState("");

  const handleProductName = (e) => {
    setProductName(e.target.value);
  };

  const handleProductBrand = (e) => {
    setProductBrand(e.target.value);
  };

  const handleProductModel = (e) => {
    setProductModel(e.target.value);
  };

  const handleProductQuantity = (e) => {
    setProductQuantity(e.target.value);
  };

  const handleProductDescription = (e) => {
    setProductDescription(e.target.value);
  };

  const handleProductPrice = (e) => {
    setProductPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productname, productbrand, productmodel, productquantity, productdescription, productprice);
    const formData = {
      productname: productname,
      productbrand: productbrand,
      productmodel: productmodel,
      productquantity: productquantity,
      productdescription: productdescription,
      productprice: productprice
    };
    axios.post("http://localhost:8080/products/add", formData).then((response) => {
        console.log(response);
      });
  };

  return (

      <div id="form-top-container">
        <div id="form-container">
          <div className="header-form">Product Form</div>
          <form className="form">
            <div className="input-box">
              <label for="productname">Product Name</label>
              <input
                type="text"
                value={productname}
                placeholder="Product Name"
                onChange={handleProductName}
              />
            </div>
            <div className="input-box">
              <label for="productbrand">Product Brand</label>
              <input
                type="text"
                value={productbrand}
                placeholder="Product Brand"
                onChange={handleProductBrand}
              />
            </div>
            <div className="input-box">
              <label for="productmodel">Product Model</label>
              <input
                type="text"
                value={productmodel}
                placeholder="Product Model"
                onChange={handleProductModel}
              />
            </div>
            <div className="input-box">
              <label for="productquantity">Product Quantity</label>
              <input
                type="text"
                value={productquantity}
                placeholder="Product Quantity"
                onChange={handleProductQuantity}
              />
            </div>

            <div className="input-box">
              <label for="productdescription">Product Description</label>
              <input
                type="text"
                value={productdescription}
                placeholder="Product Description"
                onChange={handleProductDescription}
              />
            </div>

            <div className="input-box">
              <label for="productprice">Product Price</label>
              <input
                type="text"
                value={productprice}
                placeholder="Product Price"
                onChange={handleProductPrice}
              />
            </div>

            <input type="submit" value={buttonValue} onClick={handleSubmit} />
          </form>
        </div>
      </div>
  );
};
export default Productcomp;
