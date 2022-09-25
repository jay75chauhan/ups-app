import { gql } from "@apollo/client";

export const GET_CUSTOMERS = gql`
  query GetCutomer {
    getCutomer {
      name
      value {
        email
        name
      }
    }
  }
`;

export const GET_ORDERS = gql`
  query GetOrder {
    getOrder {
      name
      value {
        Address
        City
        Lat
        carrier
        shippingCost
        trackingId
        createdAt
        Lng
        trackingItems {
          customer_id
          customer {
            email
            name
          }
          items {
            item_id
            name
            price
            quantity
          }
        }
      }
    }
  }
`;
