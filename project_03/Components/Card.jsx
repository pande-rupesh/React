import React from 'react'

const Card = (raju) => {
    console.log(raju)
  return (
    <div className='card'>
       <img src={raju.img} alt="profile" />
      <h1>{raju.user},{raju.age}</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, autem.</p>
    </div>
  )
}

export default Card