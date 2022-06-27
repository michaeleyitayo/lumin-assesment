import React, { createContext, useState, useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_PRODUCTS } from "../graphql/queries";

type ContextValueType = { [key: string]: any };

export const ProductsContext = createContext<ContextValueType>({});
export const useProducts = () => useContext(ProductsContext);

export interface Product {
  id: number;
  title: string;
  price: number;
  image_url: string;
}

export const ProductsProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[] | null>(null);

  const { error, loading, data } = useQuery(LOAD_PRODUCTS);

  useEffect(() => {
    setProducts(products);
  }, [data, products]);

  return (
    <ProductsContext.Provider
      value={{
        error,
        loading,
        data,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
