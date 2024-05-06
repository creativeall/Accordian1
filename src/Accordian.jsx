import React, { useState } from "react";
import { questions } from "./Api";
import './accordian.css'
import MyAccordian from './MyAccordian'
import 'bootstrap/dist/css/bootstrap.css';

const Accordian = () =>{
   const [data,setData] = useState(questions);
 return <>
 <div className="md"> 
 <section className="main_div">
  
 <h1>React Interview Question❔</h1>
     {
      data.map((curElem)=>{
         const{id }=curElem;
         return <MyAccordian
         key = { id } {...curElem}
          />;
      })
     }
     </section>
     </div>
 </>
}
export default Accordian;
