import React from "react";
import data from "./data";
import { Link } from "react-router-dom";

function Orders() {
    return (
        <div className="content">
            <h2>Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Paid</th>
                        <th>Delivered</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {data.orders.map((order) => (
                        <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.user.name}</td>
                            <td>{order.createdAt}</td>
                            <td>{order.totalPrice}</td>
                            <td>{order.isPaid ? "Yes" : "No"}</td>
                            <td>{order.isDelivered ? "Yes" : "No"}</td>
                            <td>
                                <Link to={`/orders/${order._id}`}>View</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Orders;