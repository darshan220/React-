import React from 'react';
import { images } from '../images/imgConstants'

const Home = () => {
    return (
        <div>
            <div className="add-to-cart">
                <img className="img-cart" src={images?.cart_img} />
            </div>
            <h1>Home Component</h1>
        <div className="items"> 
            <div className="cart-wrapper">
                <div className="img-wrapper">
                    <img src={images?.product_img}/>
                </div>
                <div className="text-wrapper">
                    <span>
                        Google Pixel 6 
                    </span>
                    <br/>
                    <span>
                        Price: 899$
                    </span>
                </div>
                <div className="btn-wrapper">
                   <button className='btn'>Add to cart</button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Home;