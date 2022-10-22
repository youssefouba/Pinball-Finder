import React from "react";
import { useState } from "react";
const Header = ({ lanlat, setlanlat, Msg,setMsg,data,setdis}) => {

  const lon = e => {
    setMsg("");
    if(e<=180 && e>=-180){
      setlanlat({ ...lanlat, longitude: e });
    }
    else{
      setMsg("The longitude and latitude are not valid.");
    }
    
  };
  const lat = e => {
    setMsg("");
    if(e<=90 && e>=-90){
    setlanlat({ ...lanlat, latitude: e });
  }
  else setMsg("The longitude and latitude are not valid.");
  };
  const nearMe = () => {
    setMsg("");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(p => {
        setlanlat({
          longitude: p.coords.longitude,
          latitude: p.coords.latitude,
        });
        if(data.length===0)setMsg("No Pinball locations were found within 250 miles.");
      },()=>{
        console.log("ss")
        setMsg("Active location to use Near Me");
      });
    }
  };

  return (
    <div>
      <div className="header">
        <h1>Find the nearest Pinball to you</h1>
        <div className="SearchBar">
          <input
            type="number"
            className="inptfirst"
            placeholder="Enter a latitude"
            onChange={e => lat(e.target.value)}
            value={lanlat.latitude}
          />
          <input
            type="number"
            className="inptsecend"
            placeholder="Enter a longitude"
            onChange={e => lon(e.target.value)}
            value={lanlat.longitude}
          />
          <span className="or">OR</span>
          <button onClick={nearMe}>Near Me</button>
        </div>

        <h4 className="msgEr">{Msg}</h4>
      </div>
    </div>
  );
};

export default Header;
