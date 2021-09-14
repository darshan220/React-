import { CartItemType } from "../App";
import CartItem from "./CartItem";

type Props={
    cartItems: CartItemType[]
    addToCart: (clickeditem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({cartItems,addToCart,removeFromCart})=> {

    const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

    return (
        <div className="show">
            <div >
            <h2>
                Your Shopping cart
            </h2>
            {cartItems.length === 0? <p>No items in cart.</p>: null}
            {cartItems.map(item => (
                <CartItem 
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart} 
                />
            ))}
            </div>
            <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
        </div>
    )
}
export default Cart