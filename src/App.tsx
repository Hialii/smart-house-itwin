import Itwin from "./Itwin";
import "./Principal.scss";

import React, { useState, useEffect } from "react";

const App: React.FC = () => {
   const [data, setData] = useState([
      { text: "Temperature", value: 25 }, //valores so para teste 
      { text: "Shading", value: 0.6 },
      { text: "Charge", value: 1.89 }
   ]);

   const fetchData = () => {
     //atualizar os valores do data, com os valores da api
   }

   return (
      <div className="principal-container">
         <div className="display">
            <div className="container-left"> 
               <div className="container">
               <div>
                  <p className="title">iWinx</p>
               </div>
                  {data.map((item, index) => (
                     <div key={index}>
                        <div className="item-container">
                           <p className="item-text">{item.text}</p>
                           <div className="value-container">
                           <p className="item-value">{item.value}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               <button className="button" onClick={fetchData}>Calculate</button>
               </div>
            </div>
            <div className="container-right"> 
               <Itwin />
            </div>
         </div>
      </div>
   )
}

export default App;