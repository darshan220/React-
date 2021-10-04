import {connect} from 'react-redux'
import Home from '../components/Home';
import {addToCart} from '../services/actions/Action'

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))
})
export default Home;