import './App.css';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Item from './component/Item'
import Cart from './component/Cart';
//component
import LinearProgress from '@material-ui/core/LinearProgress';
import { Badge, Drawer, Grid } from '@material-ui/core';

export type CartItemType = {
  id:number;
  category: string;
  description: string;
  image: string;
  price: number;
  title:string;
  amount: number;  
}

const getProducts = async (): Promise<CartItemType[]> => 
  await (await fetch('https://fakestoreapi.com/products')).json()

function App() {
  
  const [cartOpen,setCartOpen] = useState(false)
  const [cartItems,setCartItems] = useState([] as CartItemType[])
  const {data,isLoading,error} = useQuery<CartItemType[]>('products',getProducts);
  console.log(data);



  const handleAddToCart = (clickedItem:CartItemType) => {
     setCartItems(prev=> {
       
       const isItemInCart = prev.find(item => item.id === clickedItem.id);

       if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
     
      return [...prev, { ...clickedItem, amount: 1 }];

     })
  }

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => (
      prev.reduce((ack,item)=> {

        if(item.id === id) {
          if(item.amount === 1) return ack 
          return [...ack,{...item,amount: item.amount - 1}]
        }
        else
        {
          return[...ack,item]
        }

      },[] as CartItemType[])
    ))
  }

  if(isLoading) return <LinearProgress/>
  if(error) return <div>Something went wrong...</div>
  
  return (
    <div>

      <Drawer open={cartOpen} onClose={()=> setCartOpen(false)} >
        <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart}/>
      </Drawer>

      <button onClick={()=> setCartOpen(true)}>
        Check Out
      </button>
      <br></br>

      <Grid>
            {data?.map(item=> (
                <div key={item.id}>
                  <Item item={item} handleAddToCart={handleAddToCart}/>
                </div>
            ))}
      </Grid>
   </div>
  
  );
}

export default App;
