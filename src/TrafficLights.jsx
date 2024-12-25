import { useState, useEffect } from 'react'


export default function TrafficLights({ direction }) {
  const [activeLight, setActiveLight] = useState("red");

  useEffect(()=>{
    let timeout;
    if (activeLight==="red"){
      timeout= setTimeout(()=>setActiveLight("yellow"),4000)

    }else if(activeLight ==="yellow"){
      timeout =setTimeout(()=>setActiveLight("green"),1000)
    }else{
      timeout =setTimeout(()=>setActiveLight("red"),3000)
    }
    return ()=> clearTimeout(timeout)
  },[activeLight])

  return (
    <>
      <div className={`traffic-light ${direction==="toul" ? "toul" : "ordh"}`}>
        <div className={`circle red ${activeLight === "red" ? "active" : ""}`}></div>
        <div className={`circle yellow ${activeLight === "yellow" ? "active" : ""}`}></div>
        <div className={`circle green ${activeLight === "green" ? "active" : ""}`}></div>
      </div>
    </>
  )
}


