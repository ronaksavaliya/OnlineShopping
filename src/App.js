import { createContext, useState } from "react";
import "./App.css";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import WishList from "./Components/WishList/WishList";
import Footer from "./Components/Footer/Footer";

/* cart={
  productid : {productdetails,quantity}
  productid : {productdetails,quantity}
}*/

const cartContext = createContext();

function App() {
  const [cart, setcart] = useState({});

  function increseQuantity(product) {
    const tempCart = { ...cart };

    if (!tempCart[product.id]) {
      tempCart[product.id] = {
        id: product.id,
        title: product.title,
        price: product.price.value,
        quantity: 0,
      };
    }

    tempCart[product.id].quantity += 1;
    setcart(tempCart);
  }

  function decreseQuantity(product) {
    const tempCart = { ...cart };

    tempCart[product.id].quantity--;

    if (tempCart[product.id].quantity === 0) delete tempCart[product.id];

    setcart(tempCart);
  }

  return (
    <cartContext.Provider value={{ increseQuantity, decreseQuantity, cart }}>
      <div className="mainAppnew">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
        <Footer />
      </div>
    </cartContext.Provider>
  );
}

export default App;
export { cartContext };
