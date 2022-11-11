import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Styles/ProductDetailsPage.css";
import { useDispatch, useSelector } from "react-redux";
import { addCartData } from "../Redux/CartReducer/action";
import { FaStar } from "react-icons/fa";

export const ProductDetailsPage = () => {

  const [currentProduct, setCurrentProduct] = useState([]);
  console.log(currentProduct);
  const {section,id} = useParams();
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (section === "WomenProducts" && id) {
      const womensdata = data.WomenReducer.womensdata;
      const productById = womensdata.find(
        (womensdata) => womensdata.id === Number(id)
      );
      productById && setCurrentProduct(productById);
    } 
    else if(section === "mobileProducts" && id){
      const mobile = data.MobileReducer.mobiletablets
      const productById = mobile.find(mobile => mobile.id === Number(id));
      productById && setCurrentProduct(productById)
    }
  }, [section, id]);

  const handleAddToCart = () => {
    const temp = currentProduct;
    dispatch(addCartData(temp));
    alert("Product added Successfully");
  };

  return (
    <div className='parent-wrapper' style={{marginTop:"100px"}}>
      <div className="top-section-wrapper">
        <div className="img-wrapper">
          <div className="img-details-wrapper">
            <div className="details-img">
              <img className="img" src={currentProduct.images.img1} alt="img1" />
            </div>
            <div className="details-img">
              <img className="img" src={currentProduct.images.img2} alt="img2" />
            </div>
            <div className="details-img">
              <img className="img" src={currentProduct.images.img3} alt="img3" />
            </div>
          </div>
          <div className="main-img-wrapper">
            <img className="img" src={currentProduct.images.img1} alt="img1" />
          </div>
        </div>
        <div className="produt-detail-wrapper">
          <div>
            <h1> {currentProduct.name} </h1>
            <h3> {currentProduct.brand} </h3>
            <h1>₹ {currentProduct.price} </h1>
            <h2> In Stocs </h2>
            <p>
              {" "}
              Inaugural Offer <b>Free Shipping</b>
            </p>
          </div>
          <div className="payment-logo">
            <img
              src="https://www.jiomart.com/assets/version1664452279/smartweb/images/icons/food-icon/sodexo.svg"
              alt="img1"
            />
            <img
              src="https://www.jiomart.com/assets/version1664452279/smartweb/images/icons/food-icon/edenred.svg"
              alt="img1"
            />
            <img
              src="https://www.jiomart.com/assets/version1664452279/smartweb/images/icons/food-icon/paytm_food_wallet.svg"
              alt="img1"
            />
            <p> T&C Apply </p>
          </div>
          <button id="btn" onClick={handleAddToCart}>
            {" "}
            Add to Cart{" "}
          </button>
        </div>
      </div>
      <div className="middle-section-wrapper">
        <div className="heading-wrapper">
          <h1> Description </h1>
        </div>
        <div className="description-para">
          <h3> {currentProduct.name} </h3>
          <p>
            {" "}
            You’re not competing against every product online. You’re competing
            against similar products in your industry. A hammer vs. hammer, for
            example. And while there’s a lot that goes into the buying decision
            process, one of the biggest reasons why shoppers buy your product
            over others is how you choose to describe it. Describe the little
            features. Talk about the nuances. Nothing is too insignificant or
            trivial!{" "}
          </p>
        </div>
      </div>
      <div className="bottom-section-wrapper">
        <div className="heading-wrapper">
          <h1> Product Rating </h1>
        </div>
        <div className="rating-stars">
          Rate Product <FaStar className="icon-star" />
          <FaStar className="icon-star" />
          <FaStar className="icon-star" />
          <FaStar className="icon-star" />
          <FaStar className="icon-star-1" />
        </div>

        <button className="rating-btn">WRITE REVIEW</button>
      </div>
    </div>
  );
}
