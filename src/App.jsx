import { useState } from "react";
import "./App.css";
import data from "./data";
import Tours from "./components/Tours";

const App = () => {
  const[tours , setTours] = useState(data) ;

  function removeTour(id){
    const newTours = tours.filter(tour =>tour.id !== id) ;
    setTours(newTours) ;
  }

  if(tours.length === 0){
    return (
      <div class = "text-center flex flex-col items-center justify-center h-[100vh] gap-4">
        <h2 class = "text-3xl font-semibold w-[22rem]">No Tours Left</h2>
        <button class = "bg-slate-400 px-5 py-1 rounded-md font-semibold text-lg" onClick={()=> setTours(data)}>Try Again</button>
      </div>
    )
  }

  return (
    <div>
      <Tours tours = {tours} removeTour = {removeTour}></Tours>
    </div>
  );
}

export default App;
