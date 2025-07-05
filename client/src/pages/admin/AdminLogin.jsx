// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { signInStart, signInSuccess, signInFailure } from "../../redux/user/userSlice";
// import { useNavigate } from "react-router-dom";

// export default function AdminLogin() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async e => {
//     e.preventDefault();
//     dispatch(signInStart());
//     const res = await fetch("/api/users/login", {
//       method: "POST", headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form)
//     });
//     const data = await res.json();
//     if (data.success && data.data.user.isAdmin) {
//       dispatch(signInSuccess({ user: data.data.user, accessToken: data.data.accessToken }));
//       navigate("/admin");
//     } else {
//       dispatch(signInFailure({ message: "Admin authentication failed" }));
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6">
//       <h2 className="text-xl mb-4">Admin Login</h2>
//       <input name="email" placeholder="Email" onChange={handleChange} className="mb-2 input input-bordered w-full" />
//       <input type="password" name="password" placeholder="Password" onChange={handleChange} className="mb-4 input input-bordered w-full" />
//       <button type="submit" className="btn btn-primary w-full">Login</button>
//     </form>
//   );
// }

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(signInStart());
    setErrorMsg("");

    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error("Invalid JSON response from server");
      }

      if (res.ok && data.success && data.data?.user?.isAdmin) {
        dispatch(signInSuccess({ user: data.data.user, accessToken: data.data.accessToken }));
        navigate("/dashboard"); // Redirect to admin dashboard
      } else {
        dispatch(signInFailure({ message: "Admin authentication failed" }));
        setErrorMsg("Invalid admin credentials or not an admin.");
      }
    } catch (err) {
      dispatch(signInFailure({ message: err.message }));
      setErrorMsg(err.message || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="card w-full max-w-md shadow-lg bg-white dark:bg-gray-800 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-100">
          Admin Login
        </h2>

        {errorMsg && <p className="text-red-500 text-sm mb-4 text-center">{errorMsg}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Admin Email"
            onChange={handleChange}
            value={form.email}
            required
            className="input input-bordered w-full"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={form.password}
            required
            className="input input-bordered w-full"
          />
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { signInStart, signInSuccess, signInFailure } from "../../redux/user/userSlice";
// import { useNavigate } from "react-router-dom";

// export default function AdminLogin() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [errorMsg, setErrorMsg] = useState("");

//   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async e => {
//     e.preventDefault();
//     dispatch(signInStart());
//     setErrorMsg(""); // clear old error
//     try {
//       const res = await fetch("/api/users/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const text = await res.text();
//       let data;
//       try {
//         data = JSON.parse(text);
//       } catch (jsonError) {
//         throw new Error("Invalid JSON response from server");
//       }

//       if (res.ok && data.success && data.data?.user?.isAdmin) {
//         dispatch(signInSuccess({ user: data.data.user, accessToken: data.data.accessToken }));
//         navigate("/admin");
//       } else {
//         dispatch(signInFailure({ message: "Admin authentication failed" }));
//         setErrorMsg("Invalid admin credentials or not an admin.");
//       }
//     } catch (err) {
//       dispatch(signInFailure({ message: err.message }));
//       setErrorMsg(err.message || "Something went wrong.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6">
//       <h2 className="text-xl mb-4">Admin Login</h2>
//       {errorMsg && <p className="text-red-500 mb-2">{errorMsg}</p>}
//       <input
//         name="email"
//         placeholder="Email"
//         onChange={handleChange}
//         className="mb-2 input input-bordered w-full"
//         value={form.email}
//         required
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         onChange={handleChange}
//         className="mb-4 input input-bordered w-full"
//         value={form.password}
//         required
//       />
//       <button type="submit" className="btn btn-primary w-full">Login</button>
//     </form>
//   );
// }
