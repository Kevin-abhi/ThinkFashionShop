import React, { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import { useSelector } from "react-redux";

export default function AdminOrders() {
  const { accessToken } = useSelector(state => state.user);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/api/order/all", {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
      .then(res => res.json())
      .then(data => setOrders(data.orders));
  }, [accessToken]);

  const changeStatus = (id, status) => {
    fetch(`/api/order/update/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status })
    }).then(() =>
      setOrders(orders.map(o => o._id === id ? { ...o, status } : o))
    );
  };

  const deleteOrder = id => {
    fetch(`/api/order/delete/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${accessToken}` }
    }).then(() => setOrders(orders.filter(o => o._id !== id)));
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="p-6">
        <h2 className="text-xl mb-4">Orders</h2>
        {orders.map(o => (
          <div key={o._id} className="border p-4 mb-3">
            <p>Order#{o._id} – {o.status}</p>
            <select onChange={e => changeStatus(o._id, e.target.value)} value={o.status}>
              <option>Processing</option>
              <option>Shipped</option>
              <option>Delivered</option>
            </select>
            <button onClick={() => deleteOrder(o._id)} className="btn btn-error btn-sm ml-2">Delete</button>
          </div>
        ))}
      </main>
    </div>
  );
}
