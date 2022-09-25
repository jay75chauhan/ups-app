import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { GET_ORDERS } from "../graphql/queries";

const useOrders = () => {
  const { data, loading, error } = useQuery(GET_ORDERS);

  const [orders, setOrders] = React.useState<Order[]>([]);

  useEffect(() => {
    if (!data) return;
    const order: Order[] = data.getOrders.map(({ value }: OrderResponse) => ({
      carrier: value.carrier,
      createdAt: value.createdAt,
      shippingCost: value.shippingCost,
      trackingId: value.trackingId,
      trackingItems: value.trackingItems,
      Address: value.Address,
      City: value.City,
      Lat: value.Lat,
      Lng: value.Lng,
    }));

    setOrders(order);
  }, [data]);

  return { orders, loading, error };
};

export default useOrders;
