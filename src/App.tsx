import React from 'react';
import {useState} from 'react'
import './App.css';
import Musics from './component/Items/items';
import {data} from './data'
import {Imusic} from './Interface'

function App() {

  const [itemsInCart, setItemsInCart] = useState(0)
  const [SideCartOpen, setSideCartOpen]= useState(false)
  const [music,setMusic] = useState<Imusic[]>([])

  const updateCartItem = (id:number) => {
    setItemsInCart(itemsInCart + 1)
    setMusic((data.filter(item=> item.id === id)))
  }

  const showSideCart = () => {

    SideCartOpen ? setSideCartOpen(false) : setSideCartOpen(true)

  }

  return (
    <div className="App">
      <div className="header">
        <h1>Music Store</h1>
        <div className="cart-container">
        
        <button className="cart-btn" onClick={showSideCart}>Cart Items ({itemsInCart})</button>
       
        <aside className={`${SideCartOpen} ? "sidecart show-sidecart" : "sidecart"}`}>
        {/* <aside className="sidecart show-sidecart"> */}
          {
            music.map((item)=> {
              const {Price,ArtistName} = item
              return(
                <div className="inside">
                  <h5> You have purchased Album of {ArtistName}:</h5> <h6> Rs.{Price}</h6>
                </div>
              )
            })
          }
        </aside>

        </div>
        </div>
        <div className="musics">
            <Musics data={data} updateCartItem={updateCartItem}/>
        </div>


    </div>
  );
}

export default App;
