import React from "react";
import "./Stages.scss"
import cup from "../img/cup.svg"
import shield from "../img/shield.svg"
import calendar from "../img/calendar.svg"
import check from "../img/check.svg"

const Stages = () =>{
    return (
        <div className="stages" id="reg">
            <div className="stages-txt">
                <h3>Этапы проведения</h3>
                <p>The path to every Major begins with the open qualifiers for the regional Minor Championships,
                    spanning Europe, CIS, Americas, and Asia.
                    <span>Here is</span> the schedule of every qualifying stage of StarLadder Major.
                </p>
            </div>
            <div className="stages-register">
                <div className="stages-dates">
                    <div className="stages-reg-group">
                        <img src={cup} alt="cup"/>
                        <div className="cup-reg">Registration</div>
                        <div>29 sep, 19:00 – 20 nov, 10:00</div>
                    </div>
                    <div className="stages-border"></div>
                    <div className="stages-reg-group">
                        <img src={shield} alt="shield"/>
                        <div>Check-in</div>
                        <div>29 sep, 19:00 – 20 nov, 10:00</div>
                    </div>
                    <div className="stages-second-border"></div>
                    <div className="stages-reg-group">
                        <img src={calendar} alt="calendar"/>
                        <div>Scheduling:</div>
                        <div>29 sep, 19:00 – 20 nov, 10:00</div>
                    </div>
                    
                </div>
                <div className="stages-reg-btn">
                    <img src={check} alt="check"/>
                    Вы зарегистрироаны 
                </div>
            </div>
            
        </div>
    )

}
export default Stages