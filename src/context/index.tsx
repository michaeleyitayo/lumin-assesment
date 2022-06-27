/* eslint-disable no-param-reassign */
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

import { CartProvider } from "./cart-context";
import { ProductsProvider } from "./products-context";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      return alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://pangaea-interviews.now.sh/api/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const AppProviders: React.FC = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <ProductsProvider>
        <CartProvider>{children}</CartProvider>
      </ProductsProvider>
    </ApolloProvider>
  );
};

export default AppProviders;
