import React, { useEffect, useState } from "react";
import "./Table.scss"
import ua from "../img/ua.svg"


const Table = () => {
  const data = [{name:"Dianne Russel", number:"222"},
                {name:"Dianne Russel", number:"122"},
                {name:"Dianne Russel", number:"143"},
                {name:"Dianne Russel", number:"14"},
                {name:"Dianne Russel", number:"5"},
                {name:"Dianne Russel", number:"6"},
                {name:"Dianne Russel", number:"7"},
                {name:"Dianne Russel", number:"8"},
                {name:"Dianne Russel", number:"9"},
]
  const [state, setState] = useState(200);
  const [active, setActive] = useState(null);

  useEffect(() => {
    let interval;

    if (state > 0) {
      interval = setInterval(() => {
        setState((state) => state - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [state]);

  const ShowTimerMin = () => {
    let MM = Math.floor(state / 60) % 60;
    return MM < 10 ? "0" + MM : MM;
  };
  const ShowTimerSec = () => {
    let SS = state % 60;
    return SS < 10 ? "0" + SS : SS;
  };

  return (
    <div className="table-section">
        <div className="table-head">
                <h4>Зарегистрировано: 24</h4>
            <div>
                Осталось: {ShowTimerMin()}мин {ShowTimerSec()}сек
            </div>
        </div>
      
      <table>
          <thead>
            <tr >
                <th>#</th>
                <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {data.map((key,idx) =>(
              <tr key={idx} onClick={() =>setActive(idx)} className={idx === active ? "table-active" : null}>
                <td>{key.number}</td>
                <td>
                  <img src={ua} alt="ua"/>
                  {key.name}
                  </td>
              </tr>
            ))}
            
          </tbody>
      </table>
      <div className="table-footer">
            <div>SUPPORT</div>
            <div>RULES</div>
            <div>FAQ</div>
      </div>
    </div>
  );
};
export default Table;
