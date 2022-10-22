import "./App.css";
import { useState , useEffect} from "react";
import Header from "./component/Header";
import Mapca from "./component/Mapca";
import Places from "./component/Places";

function App() {
  const [ErorMsg, setMsg] = useState(false);
  const [dis, setdis] = useState(false);
  const [data, setdata] = useState([]);
  const [dataClick,setclick]= useState([])
  const [lanlat, setlanlat] = useState({
    longitude:false,
    latitude :false
  });
  useEffect(()=>{
    const getData = async()=>{
      if(lanlat.latitude && lanlat.longitude){
        const res = await fetch(
          `https://pinballmap.com/api/v1/regions/closest_by_lat_lon.json?lat=${lanlat.latitude}&lon=${lanlat.longitude}`
        );
        const Pindata = await res.json();
        console.log(Pindata);
        if(data.length===0)setMsg("No Pinball locations were found within 250 miles.");
        if(!Pindata.errors){
          setdata([Pindata.region]);
          console.log(data);
          setMsg("");
        }
        else{
          setdata([]);
        }
      }
      }
      getData();
  },[lanlat])
  

  return (
    <div className="App">
      <Header lanlat={lanlat} Msg={ErorMsg} setMsg={setMsg} setlanlat={setlanlat} data={data} setdis={setdis}/>
      <div className="results">
        <Mapca data={data} lanlat={lanlat} dis={dis} dataClick={dataClick}/>
        <Places data={data} dis={dis} setclick={setclick}/>
      </div>
      
    </div>
  );
}

export default App;
