import React,{useState} from 'react';

function Nav(props){
    return(
        <nav>
            <div className="Navleft">
           <div className="Navleftleft">
            <img src={`./Images/logo.jpg`} alt=""/>
           </div>
        <div className="Navleftright">
              <h1>Model Primary School Hasayan No.1</h1>
            <p>Hasayan,Hathras UP 204212</p>
              </div>
            </div>
        </nav>
    )
}

export default Nav;