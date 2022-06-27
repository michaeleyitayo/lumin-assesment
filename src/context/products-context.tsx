import React, { createContext, useState, useContext, useEffect } from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

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
  const [currency, setCurrency] = useState("USD");
  const [displayCurrency, setDisplayCurrency] = useState("USD");
  const [currencies, setCurrencies] = useState<null | string[]>(null);

  const { error, loading, data, refetch } = useQuery(
    gql`
  query {
    products {
      id
      title
      image_url
      price(currency: ${currency})
    }
  }
`,
    {
      variables: { currency },
    }
  );

  const {
    error: errorCurrencies,
    loading: loadingCurrencies,
    data: dataCurrencies,
  } = useQuery(
    gql`
      query {
        currency
      }
    `,
    {
      variables: { currency },
    }
  );

  useEffect(() => {
    if (dataCurrencies) setCurrencies(dataCurrencies.currency);
  }, [dataCurrencies]);

  useEffect(() => {
    refetch();
  }, [currency, refetch]);

  useEffect(() => {
    if (data) {
      setProducts(data.products);
      setDisplayCurrency(currency);
    }
  }, [data, currency]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        error,
        loading,
        data,
        displayCurrency,
        setCurrency,
        errorCurrencies,
        loadingCurrencies,
        dataCurrencies,
        currencies,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
