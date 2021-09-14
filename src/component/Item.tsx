import { Button } from '@material-ui/core';
import { CartItemType } from '../App'

type Props = {
    item:CartItemType;
    handleAddToCart: (clickedItem:CartItemType) => void;
}

const Item : React.FC<Props> = ({item,handleAddToCart}) =>  (
   
    <div className="header">
           <div className="content">
           <img src={item.image} alt={item.title}/>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h3>${item.price}</h3>
            </div>
        <Button onClick={() => handleAddToCart(item)}>Add to Cart </Button>
    </div>
   
) 

export default Item;