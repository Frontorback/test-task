import React, { useEffect, useState } from "react";
import "./Card.scss"
import CommF from "../../img/CommF.svg"
import ggBet from "../../img/gg.bet.svg"
import CommS from "../../img/CommS.svg"
import CommThree from "../../img/CommThree.svg"
import CommFour from "../../img/CommFour.svg"
import CommFive from "../../img/CommFive.svg"
import CommSix from "../../img/CommSix.svg"
import playBtn from "../../img/playBtn.svg"

const CardMatches = () =>{
    const [page, setPage] = useState(0)


    const Matches = [{id: 0, nameHead:"Asia Minor: Play-Off", date:"29 Oct", time:"19:00", CardComF:CommFive, playerF: "Regina Watson",kfF: "3.22", CardComS:CommSix , playerS: "Kathryn Jones", kfS:"53.22", footer:"Starts in: 5 hours 39 min • Bо 3", ggBet:ggBet},
                    {id: 0, nameHead:"Asia Minor: Play-Off", date:"29 Oct", time:"19:00", CardComF:CommF, playerF: "Ricardo Hawkins",kfF: "3.22", CardComS:CommS, playerS: "Bruce Simmons", kfS:"53.22", footer:"Starts in: 5 hours 39 min • Bо 3", ggBet:ggBet},
                    {id: 0, nameHead:"Asia Minor: Play-Off", date:"29 Oct", time:"19:00", CardComF:CommThree, playerF: "Jenny Bell",kfF: "3.22", CardComS:CommFour, playerS: "Arlene Robertson", kfS:"53.22", footer:"Starts in: 5 hours 39 min • Bо 3", ggBet:ggBet},
                    {id: 0, nameHead:"Asia Minor: Play-Off", date:"29 Oct", time:"19:00", CardComF:CommFive, playerF: "Regina Watson",kfF: "3.22", CardComS:CommSix, playerS: "Kathryn Jones", kfS:"53.22", footer:"Starts in: 5 hours 39 min • Bо 3", ggBet:ggBet},
                    {id: 4, nameHead:"Asia Minor: Play-Off", date:"29 Oct", time:"19:00", CardComF:CommF, playerF: "Regina Watson",kfF: "3.22", CardComS:CommS, playerS: "Kathryn Jones", kfS:"53.22", footer:"Starts in: 5 hours 39 min • Bо 3", ggBet:ggBet},
                    {id: 4, nameHead:"Asia Minor: Play-Off", date:"29 Oct", time:"19:00", CardComF:CommThree, playerF: "Regina Watson",kfF: "3.22", CardComS:CommFour, playerS: "Kathryn Jones", kfS:"53.22", footer:"Starts in: 5 hours 39 min • Bо 3", ggBet:ggBet},
                    {id: 4, nameHead:"Asia Minor: Play-Off", date:"29 Oct", time:"19:00", CardComF:CommFive, playerF: "Regina Watson",kfF: "3.22", CardComS:CommSix, playerS: "Kathryn Jones", kfS:"53.22", footer:"Starts in: 5 hours 39 min • Bо 3", ggBet:ggBet},
                    {id: 8, nameHead:"Asia Minor: Play-Off", date:"29 Oct", time:"19:00", CardComF:CommF, playerF: "Regina Watson",kfF: "3.22", CardComS:CommS, playerS: "Kathryn Jones", kfS:"53.22", footer:"Starts in: 5 hours 39 min • Bо 3", ggBet:ggBet},
                    {id: 8, nameHead:"Asia Minor: Play-Off", date:"29 Oct", time:"19:00", CardComF:CommThree, playerF: "Regina Watson",kfF: "3.22", CardComS:CommFour, playerS: "Kathryn Jones", kfS:"53.22", footer:"Starts in: 5 hours 39 min • Bо 3", ggBet:ggBet},
    ]


useEffect(()=>{
    const interval =  setInterval(() => {
       setPage(page => page + 4)
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line 
 },[page])


 if(page === 12 ){
    return setPage(0)
 }

    return (
        <div>
        <div className="card-pos">
        {Matches.map((key, idx) => (

        <div className={page === key.id ? "card-section" : "hide-card"} key={idx}>
            <div className="whatch-live">
                
               <a href="f">
                   <img src={playBtn} alt="playBtn"/>
                    <div>WHATCH LIVE</div>
               </a> 
                </div>
            <div className="card-header">
                <div>{key.nameHead}</div>
                <div>
                    <div>{key.date}</div>
                    <div className="card-time">{key.date}</div>
                </div>
            </div>
            <div className="border-card"></div>
            <div className="card-items-section">
                    <img src={key.CardComF}  alt="card-logo-com"/>
                    <img src={key.CardComS} alt="card-logo-com" />
                <div>
                <div className="card-name-kef">
                    <div>{key.playerF}</div>
                    <div>{key.kfF}</div>
                </div>
                <div className="card-name-kef">
                    <div>{key.playerS}</div>
                    <div>{key.kfS}</div>
                </div>
                </div>
                <div className="card-footer">
                    <div>{key.footer}</div>
                    <img src={key.ggBet} alt="ggBet" />
                </div>
                
            </div>
            
        </div>
        )) 
}
        </div>
        <div className="Card-btn">
            <div className="prev-btn" onClick={page >0 ?() => setPage(page - 4) : () => setPage(8) }>
                <div></div>
                </div>
                <div className="dots card-dots">
                    <div onClick={() => setPage(0)} className={page === 0 ? "dot-item dot-active" : "dot-item"}></div>
                    <div onClick={() => setPage(4)} className={page === 4 ? "dot-item dot-active" : "dot-item"}></div>
                    <div onClick={() => setPage(8)} className={page === 8 ? "dot-item dot-active" : "dot-item"}></div>
                </div>

            <div className="next-btn" onClick={page > 12 ? () => setPage(0) : () => setPage(page + 4 )}>
            <div ></div>
            </div>
        </div>
        </div>
    )

}
export default CardMatches