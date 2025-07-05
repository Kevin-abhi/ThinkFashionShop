import React, { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import { useSelector } from "react-redux";

export default function AdminUsers() {
  const { accessToken } = useSelector(state => state.user);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users/getUsers", {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
      .then(res => res.json())
      .then(data => setUsers(data.users));
  }, [accessToken]);

  const deleteUser = id => {
    if (confirm("Delete this user?")) {
      fetch(`/api/users/deleteUser/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      setUsers(users.filter(u => u._id !== id));
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="p-6">
        <h2 className="text-xl mb-4">Users</h2>
        {users.map(u => (
          <div key={u._id} className="flex justify-between border p-2 mb-2">
            <span>{u.email}</span>
            <button onClick={() => deleteUser(u._id)} className="btn btn-error btn-sm">Delete</button>
          </div>
        ))}
      </main>
    </div>
  );
}
