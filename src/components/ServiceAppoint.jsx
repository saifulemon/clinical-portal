import React from "react";

const ServiceAppoint = ({ service }) => {
  const { name, slots } = service;
  return (
    <section className="my-10">
      <div className="card w-96 bg-base-100 text-nuetral shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>
            {slots.length ? (
              <span>{slots[0]}</span>
            ) : (
              <span className="text-red-500">Try another date</span>
            )}
          </p>
          <p>
            {slots.length} {slots.length > 1 ? "spaces" : "space"}
          </p>
          <div className="card-actions justify-center">
            <button
              disabled={slots.length === 0}
              className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAppoint;
