import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
export const ProductDisplay = (props) => {
  const {product}=props;
  const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
       <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt=""/>
          <img src={product.image} alt=""/>
          <img src={product.image} alt=""/>
          <img src={product.image} alt=""/>

        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt=""/>
        </div>

       </div>
       <div className="productdisplay-right">
           <h1>{product.name}</h1>
           <div className="productdisplay-right-stars">
            <img src={star_icon} alt=""/>
            <img src={star_icon} alt=""/>
            <img src={star_icon} alt=""/>
            <img src={star_icon} alt=""/>
            <img src={star_dull_icon} alt=""/>
            <p>(122)</p>
           </div>
           <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
            ${product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
            ${product.new_price}
            </div>
            <div className="productdisplay-right-description">
            The mesmerizing design features intricate lace detailing, delicately cascading down the bodice, drawing attention to your feminine charm. Whether you're attending a glamorous soirée or enjoying a romantic dinner.
            </div>
            <div className="productdisplay-right-size">
              <h1>Select Size</h1>
              <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
              </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <div className="a">
            <p><span>Category:</span>Women, T-Shirt, Crop top<br></br>
            <span>Tags:</span>Modern, Latest</p></div>
           </div>
       </div>
    </div>
  )
}
