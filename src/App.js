import React from 'react'
import './index.css'
import Flowers from './Components/Flowers'
import FlowersDeatail from './Components/FlowersDetail'

export default function App(){
  return(
    <>
    <h1>About Flowers</h1>
    <div className='container'>
     {FlowersDeatail.map((value)=>{
      return(
        <>
        <Flowers
        title={value.title}
        imgSrc={value.imgSrc}
        para={value.para}
        btn={value.btn}/>
        </>
      )
     })}
   </div>
    </>

  )
}