import React from 'react';
import Header from './containers/Header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';

function ShoppingCart() {
    return (
        <div>
            <Router>
                <Header/>
                    <Switch>
                        <Route path='/' exact component={ProductListing}/>
                        <Route path='/product/:productId' exact component={ProductDetails}/>
                    <Route>404 Not Found</Route>
                </Switch>
            </Router>
        </div>
    );
}

export default ShoppingCart;