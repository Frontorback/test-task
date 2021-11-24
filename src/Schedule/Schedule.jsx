import React, { useState } from "react";
import CardButtles from "./Card/CardButtles";
import CardMatches from "./Card/CardMatches";
import "./Schedule.scss"

const Schedule = () =>{
    const [change, setChange] = useState(false)

    return (
        <div className="schedule-section">
            <div className="schedule-header">
              <h2>Расписание и результаты</h2>
                <div className="schedule-border"></div>
                <div className="schedule-btns">
                        <button onClick={() => setChange(true)} className={change ? "active-btn" : null}>Matches</button>
                        <button onClick={() => setChange(false)} className={!change ? "active-btn" : null}>Battles</button>
                </div>
            </div>
            {change ? <CardMatches/> : <CardButtles />}
            

        </div>
    )

}
export default Schedule