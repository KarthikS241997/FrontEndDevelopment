import React, { useState } from 'react';
import './App.css';
import Product from './Components/Product/Product';
import Cart from './Components/Cart/Cart';

const App = () => {

    const data = [{
        'id': 1,
        'name': 'Iphone 13',
        'price': 899,
        'quantity': 0,
        'url': 'https://lifeonsocial.com/wp-content/uploads/2021/06/iphone-13.jpg'
    }, 
    {   
        'id': 2,
        'name': 'iPhone 13 Pro Max',
        'price': 1299,
        'quantity': 0,
        'url': 'https://www.reliancedigital.in/medias/Apple-MLL93HN-A-Smart-Phones-491997748-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNTMwNDV8aW1hZ2UvanBlZ3xpbWFnZXMvaGM0L2g5YS85Nzc2MDg4NTgwMTI2LmpwZ3wxYjQ0OGE4NzlhN2MzNDljZDNmYjRkZjliZjlhMDEwYTBiM2JhOTZjNmM2YzQ0ZWY0NzU1OGMzZDA1OTY3YmE2'
    },
    {   
        'id': 3,
        'name': 'Airpods Pro',
        'price': 399,
        'quantity': 0,
        'url': 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1572990352299'
    },
    {   
        'id': 4,
        'name': 'Apple Watch Series 7 ',
        'price': 399,
        'quantity': 0,
        'url': 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKU83_VW_34FR+watch-41-alum-midnight-nc-7s_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1632171038000%2C1631661171000'
      } ,
      {   
        'id': 5,
        'name': 'Apple Macbook Pro ',
        'price': 399,
        'quantity': 0,
        'url': 'https://images.idgesg.net/images/article/2018/08/2018-macbook-pro-13-closed-100767456-large.jpg'
      },
      {   
        'id': 6,
        'name': 'Apple Airpods Max ',
        'price': 599,
        'quantity': 0,
        'url': 'https://www.bhphotovideo.com/images/images2500x2500/apple_mgyl3am_a_airpods_max_sky_blue_1610236.jpg'
      }
      
];
const [cartItems, setCartItems] = useState([]);
// const [quantity, setQuantity] = useState(0);

const renderProducts = () => {
    return data.map(item=>{
        return <Product data={item} addToCart={addToCart} cartItems={cartItems}/>
    })
}
//ADDTOCART FUNCTION
const addToCart = (newId) => {
    const index = cartItems.findIndex((x) => x.id === newId);
    const ifExist = cartItems[index];
    console.log("Item is:",ifExist);
    const idx = data.findIndex((item) => item.id === newId);
    if (ifExist) {
      setCartItems(cartItems.map((el) => el.id === newId ? { ...ifExist, 'quantity': ifExist['quantity'] + 1 } : el));
    } else {
      setCartItems([...cartItems, { ...data[idx], 'quantity': 1 }]);
    }
    // console.log(cartItems);
  };
  
  const removeItems = (newId) => {
    const ifExist = cartItems.find((x) => x.id === newId);
    // const idx = data.findIndex((item) => item.id === newId);
    // console.log(exist, idx);
    if (ifExist['quantity'] === 1) {
      setCartItems(cartItems.filter((x) => x.id !== newId));
    }
    else {
      setCartItems(
        cartItems.map((x) =>
          x.id === newId ? { ...ifExist, 'quantity': ifExist['quantity'] - 1 } : x
        )
      );
    }
  }
  return (
    <>
      <body>
      <div className="header">
        <h1> E-K A R T </h1>
        
    </div>
    <div className="body">
        <div className="items">
        {renderProducts()} 
        </div>

        <div className="cart">
        <h2>
         C A R T
      </h2>
            <Cart cartItems={cartItems} addToCart={addToCart} removeItems={removeItems}/>
        </div>
       
        </div>


        
      </body>


    </>
  )
}

export default App