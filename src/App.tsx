import React from "react";
import Header from "./layout/header";
import Products from "./pages/products";
import Cart from "./sections/cart";

const App = () => {
  return (
    <>
      <Header />
      <Products />
      <Cart />
    </>
  );
};

export default App;
