import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const api = "https://jsonplaceholder.typicode.com/users"
  const res = await fetch(
    api, 
    { cache: 'no-store' },
  );
  const users: User[] = await res.json();

  return (
    <div className="overflow-x-auto">
      <h1>Users</h1>
      <p>{ new Date().toLocaleTimeString()}</p>
      <table className="table table-bordered">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
        )}
      </tbody>
      </table>
      
    </div>
  );
};

export default UsersPage;
