import React from "react";
import Place from "./Place";

const Places = ({data,dis,setclick}) => {
  return (
    <div className="places">
         <h2>Nearest Pinball Locations:</h2>
        <div className="data">
          {
            data.map((place)=>
              <Place data={place} clicked={false} setclick={setclick}/>
            )
          }
        </div>
      </div>

  );
};

export default Places;
