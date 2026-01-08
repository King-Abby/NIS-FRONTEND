import React from "react";
import Immigration from "./Immigration";
import Footer from "../Footer";
import Amnesty from "./Amnesty";
import Deadline from "./Deadline";
import Eligibility from "./Eligibility";
import FAQ from "./FAQ";
import WRV from "./WRV";
import Updates from "../Updates";

function Details() {
  return (
    <>
      <Immigration />
      <Amnesty />
      <Deadline />
      <WRV />
      <Eligibility />
      <FAQ />
      <Updates />
      <Footer />
    </>
  );
}

export default Details;
