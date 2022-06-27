import React, { createContext, useState, useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_PRODUCTS } from "../graphql/queries";

type ContextValueType = {
  products: IProduct[] | null;
  [key: string]: any;
};

export const ProductsContext = createContext<ContextValueType>({
  products: null,
});
export const useProducts = () => useContext(ProductsContext);

export interface IProduct {
  id: number;
  title: string;
  price: number;
  image_url: string;
}

export const ProductsProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<IProduct[] | null>(null);

  const { error, loading, data } = useQuery(LOAD_PRODUCTS);

  useEffect(() => {
    if (data) setProducts(data.products);
  }, [data]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        error,
        loading,
        data,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
