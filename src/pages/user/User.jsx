import React, { useEffect, useState } from "react";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Users</h1>
      {users.length === 0 ? (
        <p className="text-center text-gray-500">No users found.</p>
      ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 p-4"
          >
            <img
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
              className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold">
                {user.firstName} {user.lastName}
              </h3>
              <p className="text-sm text-gray-500">{user.age} years</p>
              <p className="text-sm text-gray-500">{user.gender}</p>
              <p className="text-xs text-gray-400">{user.email}</p>
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default User;
