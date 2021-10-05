import React from 'react';
import { images } from '../images/imgConstants'
function Header(props) {
    console.log("Header",props.data);
    return (
        <div>
             <div className="add-to-cart">
                <span className="cart-count">{props.data.cartItem.length}</span>
                <img className="img-cart" src={images?.cart_img} />
            </div>
        </div>
    );
}

export default Header;