import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import UserRow from './UserRow';

const Allusers = () => {
    const {data: users, isLoading} = useQuery('users', () => fetch('http://localhost:5000/user', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}` 
      }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading />;
    }
    return (
        <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>
            <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map( user => <UserRow
                    key={user._id}    
                    user={user} 
                />)
            }
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default Allusers;