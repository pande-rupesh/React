import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <div className="top">
      <img src={props.image}alt="man" />
      <h2>{props.name}/<span>{props.exp}</span></h2>
      </div>
      <div className="center">
        <p>{props.t1}</p>
        <p>{props.t2}</p>
      </div>
      <hr />
      <div className="bottom">
        <button>View Full Profile</button>
      </div>
    </div>
  )
}

export default Card