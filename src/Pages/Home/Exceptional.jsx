import React from "react";
import exceptional from "../../assets/images/treatment.png";
import PrimaryBtn from "../Shared/PrimaryBtn/PrimaryBtn";

const Exceptional = () => {
  return (
    <section className="hero min-h-screen px-28">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={exceptional}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="exceptional"
        />
        <div className="ml-5">
          <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryBtn>Get Started</PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default Exceptional;
