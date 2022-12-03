import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppointment = () => {
  const [appointment, setAppointment] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}` 
        }
      })
        .then((res) => res.json())
        .then((data) => setAppointment(data));
    }
  }, [user]);

  return (
    <div>
      <h3>My Appointment {appointment.length}</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {
                appointment.map( (appoint, i) =>  <tr>
                    <th>{i + 1}</th>
                    <td>{appoint.patientName}</td>
                    <td>{appoint.time}</td>
                    <td>{appoint.slot}</td>
                    <td>{appoint.treatment}</td>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
