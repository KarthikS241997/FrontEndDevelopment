import React from 'react';
import "./Card.css"

const Card = (props) => {
  return (
    <div className="container">
        <div className="one">
            <h6>{props.title}</h6>
            <div className='num'>
            <h4>{props.num}</h4>
            <h6>{props.cent}</h6>
            </div>
           
        </div>
        <div className="two">
        <i className={props.logo}  style={{fontSize:'20px'}}></i>
        </div>
    </div>
  )
}

export default Card