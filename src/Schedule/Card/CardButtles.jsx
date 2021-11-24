import React, { useEffect, useState } from "react";
import "./Card.scss"
import ButtlesLogo from "../../img/ButtlesLogo.svg"
import playBtn from "../../img/playBtn.svg"

const CardButtles = () =>{
    const [page, setPage] = useState(0)

    const Battles = [{id:0, nameHead:"Group Stage", CardComF:ButtlesLogo, playerF: "Group A", kfF: "match #1", playerS: "Group B", footer:"Map: Erangel"},
                    {id:0, nameHead:"Group Stage", CardComF:ButtlesLogo, playerF: "Group A", kfF: "match #1", playerS: "Group B", footer:"Map: Erangel"},
                    {id:0, nameHead:"Group Stage", CardComF:ButtlesLogo, playerF: "Group A", kfF: "match #1", playerS: "Group B", footer:"Map: Erangel"},
                    {id:0, nameHead:"Group Stage", CardComF:ButtlesLogo, playerF: "Group A", kfF: "match #1", playerS: "Group B", footer:"Map: Erangel"},
                    {id:4, nameHead:"Group Stage", CardComF:ButtlesLogo, playerF: "Group A", kfF: "match #1", playerS: "Group B", footer:"Map: Erangel"},
                    {id:4, nameHead:"Group Stage", CardComF:ButtlesLogo, playerF: "Group A", kfF: "match #1", playerS: "Group B", footer:"Map: Erangel"},
                    {id:4, nameHead:"Group Stage", CardComF:ButtlesLogo, playerF: "Group A", kfF: "match #1", playerS: "Group B", footer:"Map: Erangel"},
                    {id:8, nameHead:"Group Stage", CardComF:ButtlesLogo, playerF: "Group A", kfF: "match #1", playerS: "Group B", footer:"Map: Erangel"},

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
console.log(page)
    return (
        <div>
        <div className="card-pos">
        { Battles.map((key, idx) => (
      
            <div className={page === key.id ? "card-section" : "hide-card"} key={idx}>
                 <div className="whatch-live">
                <a href="f">
                    <img src={playBtn} alt="playBtn"/>
                     <div>WHATCH LIVE</div>
                </a> 
                 </div>
                <div className="card-header header-buttle">
                    <div>{key.nameHead}</div>
                </div>
                <div className="border-card"></div>
                <div className="card-items-section img-buttles">
                        <img src={key.CardComF}  alt="card-logo-com"/>
                    <div>
                        <div className="card-name-group">
                            <div >
                                <div>{key.playerF}</div>
                                <div>{key.playerS}</div>
                            </div>
                            <div className="card-match">{key.kfF}</div>
                        </div>
                   
                    </div>
                    <div className="card-footer-battle">
                        <div>{key.footer}</div>
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
export default CardButtles