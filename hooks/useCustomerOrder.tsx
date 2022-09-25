import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { GET_ORDERS } from "../graphql/queries";

function useCustomerOrder(userId: string) {
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

    const filteredOrders = order.filter(
      (order) => order.trackingItems.customer_id === userId
    );
    setOrders(filteredOrders);
  }, [data, userId]);

  return { orders, loading, error };
}

export default useCustomerOrder;
