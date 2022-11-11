import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

// import BakeryItem from BakeryItem.js;

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [totalCost, setCost] = useState(0)
  const [cart, addToCart] = useState([])
  // const setCart = new Set(cart)

  function handleAddToCart(item) {
    setCost(totalCost+item.price);

    addToCart([...cart, {name: item.name, price: item.price}]); 
  }
  // function numberOfItem(n) {
  //   return cart.filter(i => i.name === n).length;
  // }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem key={index} item={item} addCounter={handleAddToCart}/> // replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>
        <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
        <h3>Items: </h3>
        {cart.map((item, index) => (
          <div> {index+1}. {item.name}, price: {item.price}</div>
          // <div> {index+1}. {item.name}, price: {item.price}, count: {numberOfItem(item.name)}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
