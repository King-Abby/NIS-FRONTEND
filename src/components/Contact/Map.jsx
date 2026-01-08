import React from "react";
import mapImage from "../../assets/desktop/Frame 1171280075.png";

function Map() {
  return (
    <section className="w-full">
      <div className="w-full h-[420px]">
        <img
          src={mapImage}
          alt="Nigerian Immigration Service Headquarters Map"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default Map;
