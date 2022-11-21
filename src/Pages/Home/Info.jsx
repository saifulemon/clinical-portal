import React from "react";
import Infocard from "../../components/InfoCard/InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const InfoCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <Infocard
        cardTitle="Opening Hours"
        cardDes="the time during which a business or organization."
        img={clock}
        bgColor="bg-gradient-to-r from-secondary to-primary"
      />
      <Infocard
        cardTitle="Our Locations"
        cardDes="Brooklyn, NY 10036, United States"
        img={marker}
        bgColor="bg-accent"
      />
      <Infocard
        cardTitle="Contact Us"
        cardDes="+8801302050981"
        img={phone}
        bgColor="bg-gradient-to-r from-secondary to-primary"
      />
    </div>
  );
};

export default InfoCard;
