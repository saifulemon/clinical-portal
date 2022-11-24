import React from "react";
import Banner from "./Banner";
import Exceptional from "./Exceptional";
import Info from "./Info";
import MkAppointment from "./MkAppointment";
import Service from "./Service";
import Testimonial from "./Testimonial";
import Form from "./Form";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Service />
      <Exceptional />
      <MkAppointment />
      <Testimonial />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
