import React, { useState } from "react";
import drChair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointBanner = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={drChair}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="doctor chair"
        />
        <div>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
          />
          <p>Available appointment days: {format(date, 'PP')}</p>
        </div>
      </div>
    </div>
  );
};

export default AppointBanner;
