import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user}) => {
    const {email, role} = user;
    const makeAdmin = (user) => {
      fetch(`http://localhost:5000/user/admin/${email}`, {
        method: 'PUT',
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res => res.json())
      .then( data => {
        console.log(data);
        toast.success(`successfully made an admin`)
      })
    }
    return (
        <tr>
        <th>1</th>
        <th>{email}</th>
        <th>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</th>
        <th><button className="btn btn-xs">Remove User</button></th>
      </tr>
    );
};

export default UserRow;