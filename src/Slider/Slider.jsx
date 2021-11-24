import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import MainBlock from "./MainBlock/MainBlock";
import "./Slider.scss"

const Slider = () =>{

    const [state, setState] = useState(0)


    useEffect(()=>{
       const interval =  setInterval(() => {
          setState(state => state + 1)
       }, 5000);

       return () => clearInterval(interval);
       // eslint-disable-next-line 
    },[state])
 
    if(state === 3){
       return setState(0)
    }

    return (
        <>
        <Header />
        <MainBlock />
        <div className="btns">
            <button><a href="#reg">READ ANNOUNCMENT</a></button>
            <button><a href="#reg">GET TICKETS</a></button>
        </div>
        <div className="dots">
            <div onClick={() => setState(0)} className={state === 0 ? "dot-item dot-active" : "dot-item"}></div>
            <div onClick={() => setState(1)} className={state === 1 ? "dot-item dot-active" : "dot-item"}></div>
            <div onClick={() => setState(2)} className={state === 2 ? "dot-item dot-active" : "dot-item"}></div>
        </div>
      
        <div className="slider">
            <div className={state === 0 ? "first active" : "first hide"}></div>
            <div className={state === 1 ? "second active" : "second hide"}></div>
            <div className={state === 2 ? "last active" : "last hide"}></div>
        </div>
        </>
    )
}

export default Slider