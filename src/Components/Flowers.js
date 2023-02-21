import React from "react";
import {useNavigate} from 'react-router-dom'

export default function Flowers(props){

const topage=useNavigate()
function handlePage(){
  topage("/flower")
}

    return(
        <>
        
    <div className='container'>
      <div className='cards'>
        <h2>{props.title}</h2>
        <img src={props.imgSrc} alt='Rose'/>
        <p>{props.para}</p>
        <button onClick={handlePage}>{props.btn}</button>
        <hr/>
      </div>
    </div>
        </>
    )
}