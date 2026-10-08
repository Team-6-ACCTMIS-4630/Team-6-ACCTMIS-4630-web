import React from "react";
import { useParams } from "react-router-dom";
import data from "./data";

function OrderDetail() {
    const { id } = useParams();

    const order = data.orders.find(
        (order) => order._id.toString() === id
    );

    if (!order) {
        return <div>Order not found</div>;
    }

    return (
        <div className="content">
            <h2>Order Details</h2>
            <p>Order ID: {order._id}</p>
            <p>User: {order.user.name}</p>
            <p>Date: {order.createdAt}</p>
            <p>Total: {order.totalPrice}</p>
            <p>Paid: {order.isPaid ? "Yes" : "No"}</p>
            <p>Delivered: {order.isDelivered ? "Yes" : "No"}</p>
        </div>
    );
}

export default OrderDetail;