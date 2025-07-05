import React, { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import { useSelector } from "react-redux";

export default function AdminComments() {
  const { accessToken } = useSelector(state => state.user);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("/api/comment", {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
      .then(res => res.json())
      .then(data => setComments(data.comments || []));
  }, [accessToken]);

  return (
    <div className="flex">
      <Sidebar />
      <main className="p-6 space-y-4">
        <h2 className="text-xl mb-4">Comments</h2>
        {comments.map(c => (
          <div key={c._id} className="border p-3">
            <p><strong>{c.userEmail}</strong> on <em>{c.productName}</em></p>
            <p>{c.text}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
