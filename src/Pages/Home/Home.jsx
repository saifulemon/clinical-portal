import React from "react";
import Banner from "./Banner";
import Exceptional from "./Exceptional";
import Info from "./Info";
import MkAppointment from "./MkAppointment";
import Service from "./Service";
import Testimonial from "./Testimonial";
import Form from "./Form";

const Home = () => {
  return (
    <div className="px-12">
      <Banner />
      <Info />
      <Service />
      <Exceptional />
      <MkAppointment />
      <Testimonial />
      <Form />
    </div>
  );
};

export default Home;
