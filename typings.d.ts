type Customer = {
  name: string;
  email: string;
};

type CustomerList = {
  name: string;
  email: string;
};

type TrackingItems = {
  customer_id: ID;
  customer: Customer;
  items: Item[];
};

type Item = {
  item_id: ID;
  name: string;
  price: number;
  quantity: number;
};
type OrderResponse = {
  value: Order;
};

type CustomerResponse = {
  name: ID;
  value: Customer;
};

type Order = {
  Address: string;
  City: string;
  Lat: number;
  carrier: string;
  shippingCost: number;
  trackingId: string;
  createdAt: string;
  Lng: number;
  trackingItems: TrackingItems;
};
