import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";

const Homeuser = () => {
  const [User, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
  await axios.delete(`http://localhost:3001/users/${id}`);
  loadUsers();
};

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <Link to="/" class="btn btn-primary m-2 py-2">Goto Home</Link>
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {User.map((User, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{User.name}</td>
                <td>{User.username}</td>
                <td>{User.email}</td>
                <td>
                  <Link class="btn btn-primary btn-sm m-2" to ='view'>View</Link>
                  <Link
                    class="btn btn-outline-primary m-2"
                    to={`/users/edit/${User.id}`}
                  >
                    Edit
                  </Link>
                  <Link class="btn btn-danger btn-sm" onClick={()=> deleteUser(User.id)}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Homeuser;
