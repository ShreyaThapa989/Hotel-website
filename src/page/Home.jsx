import React from "react";

import Banner from "../component/Banner";
import BookingBar from "../component/BookingBar";
import Welcome from "../component/Welcome";
import HotelCard from "../component/HotelCard";

export default function Home() {
  return (
    <div>
      <Banner />
      <BookingBar/>
      <Welcome/>
      <HotelCard/>
    </div>
  );
}
