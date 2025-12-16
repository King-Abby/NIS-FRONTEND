import React from "react";
import Access from "./Access";
import Visa from "../Visa";
import Footer from "../Footer";
import ETC from "./ETC";
import VisaCat from "./VisaCat";
import Apply from "./Apply";
import Requirements from "./Requirements";
import Passports from "./Passports";

function Service() {
  return (
    <>
      <Access />
      <VisaCat />
      <Apply />
      <Requirements />
      <Passports />
      <ETC />
      <Visa />
      <Footer />
    </>
  );
}

export default Service;
