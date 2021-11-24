import React from "react";
import PUBG from "../../img/PUBG.svg"
import "./MainBlock.scss"

const MainBlock = () =>{
    return (
        <div className="Main-block">
            <img src={PUBG} alt="PUBG"/>
            <h1>ESL Pro League CSGO</h1>
            <p>
            League CS:GO is the new online league in 
            Counter-Strike: Global Offensive, with $100,000 total prize pool.
            16 teams from Europe and the CIS will take part in the League,
            with 4 teams going to League through open qualifiers.
            </p>
        </div>
    )

}
export default MainBlock