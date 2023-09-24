import Itwin from "./Itwin";
import "./Principal.scss";

import React, { useState } from "react";

const App: React.FC = () => {
   const [data, setData] = useState([
      { text: "Temperature", value: 25 },
      { text: "Shading", value: 0.6 },
      { text: "Charge", value: 1.89 }
   ]);

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
               <button className="button">Calculate</button>
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