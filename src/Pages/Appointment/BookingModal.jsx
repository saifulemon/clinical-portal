import { format } from "date-fns";
import React from "react";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const {_id, name, slots } = treatment;

  const handleBooking = event => {
    event.preventDefault();
    let slot = event.target.slot.value;
    console.log(_id, name, slot);
    setTreatment(null);
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
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
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
