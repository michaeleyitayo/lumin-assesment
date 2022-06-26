/* eslint-disable no-param-reassign */
import React from "react";

import { CartProvider } from "./cart-context";

const AppProviders: React.FC = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default AppProviders;
