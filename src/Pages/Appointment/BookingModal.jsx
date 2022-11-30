import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from 'react-toastify';

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
  const {_id, name, slots } = treatment;
  const [user] = useAuthState(auth);
  const formattedDate = format(date, 'PP');

  const handleBooking = event => {
    event.preventDefault();
    let slot = event.target.slot.value;
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patientName: user.displayName,
      patient: user.email,
      phone: event.target.phone.value
    }

    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      if(data.success) {
        toast(`Appointment is set, ${formattedDate} at ${slot}`);
      }
      else{
        toast.error(`Already have an Appointment on ${data.booking?.date} at ${data.booking?.slot}`);
      }
      refetch();
      setTreatment(null);
    })
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Booking for: {name}
          </h3>
          <form className="grid grid-cols-1 gap-3 justify-items-center" onSubmit={handleBooking}>
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              className="input input-bordered w-full max-w-xs"
            />
            <select className="select select-bordered w-full max-w-xs">
              {
                slots.map(slot => <option value={slot}>{slot}</option>)
              }
            </select>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ''}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ''}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="phone"
              placeholder="Phone Number"
              name="phone"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-neutral w-full max-w-xs text-xl text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
