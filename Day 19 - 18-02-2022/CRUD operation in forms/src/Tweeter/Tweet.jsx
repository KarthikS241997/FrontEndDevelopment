import React from 'react';
import './Tweet.css';

const Tweet = (props) => {
  return (
    <div className="main">
        <div className="sectionOne">
            <div className="name"><h4>{props.tweet.name}</h4></div>
            <div className="tweeterhandle">{props.tweet.tweeterhandle}</div>
        </div>
        <div className="sectionTwo">{props.tweet.tweet}</div>
        <div className="sectionThree">
            <button className="btn btn-link btn-lg" onClick={()=>props.handleLikeProp(props.tweet.id)}><i className="fas fa-thumbs-up"></i></button>
            <button className="btn btn-link btn-lg" onClick={()=>props.handleDislikeProp(props.tweet.id)}><i className="fas fa-thumbs-down"></i></button>
            <h5><span className='badge bg-secondary'>{props.tweet.likes}</span></h5>
            <button className="btn btn-link btn-lg"><i className="fa-solid fa-arrow-up-from-bracket"></i></button>
        </div>
    </div>
  )
}

export default Tweet