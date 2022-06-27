import { gql } from "@apollo/client";

export const LOAD_PRODUCTS = gql`
  query {
    products {
      id
      title
      image_url
      price(currency: USD)
    }
  }
`;
