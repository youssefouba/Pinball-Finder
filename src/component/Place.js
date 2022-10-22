import React from 'react'

const Place = ({data,clicked,setclick}) => {

  return (
    <div className={clicked?"place clicked":"place"} onClick={()=>{setclick([data.lat,data.lon])}}>
        <h3>{data.name}</h3>
        <div className="details">
            <span>Created:  {(data.created_at).substr(0, 10)}</span>
            <span>State: {data.state}</span>
        </div>
    </div>
  )
}

export default Place