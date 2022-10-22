import React from "react";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker} from "react-leaflet";

const Mapca = ({lanlat,dataClick,dis}) => {
  const [posi, setPosi] = useState([0,0]);
  let p,t;
  useEffect(() => {
    const test = async () => {
      if (lanlat || dataClick) {
        setPosi(false);
        p = await lanlat.longitude;
        t= await lanlat.latitude;
        setPosi([t,p]);
      }

    }
    test();
    
  }, [lanlat,dataClick]);
  return (
    <>
    {posi&& (
      <MapContainer center={posi} zoom={10}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      <Marker position={posi}>
      </Marker>
    </MapContainer>
    )}
    </>
  );
};

export default Mapca;
