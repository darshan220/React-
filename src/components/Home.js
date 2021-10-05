import React from 'react';
import { images } from '../images/imgConstants'


const Home = (props) => {
    console.warn("props",props.data);
    return (
        <div>
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
                   <button onClick={()=> props.addToCartHandler({price: 899,name: 'Google pixel 6'})} 
                    className='btn'>
                       Add to cart
                    </button>
                    <button onClick={()=> props.removeToCartHandler()} 
                    className='btn'>
                       Remove to cart
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Home;