import React, { useState } from "react";
 

const MyAccordian = ({question,answer}) =>{
    const [show,setShow] = useState(false);
    return (
        <>
           <div className="main-heading">
           <div className="mh"> 
              <p onClick={()=>setShow(!show)}>{show?" 😀":"😊"}</p>
            <h3>{question}</h3>
           </div>
           {
            show &&  <p className="answer">{ answer}</p>
           }
           </div>
           
        </>
    )
}
export default MyAccordian;
