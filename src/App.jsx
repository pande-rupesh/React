import React from 'react'
import './App.css'
const App = () => {
function onSubmited(e){
  e.preventDefault()
  console.log('submitted')
}

  return (
    <>
    <form onSubmit={(e)=>{
      onSubmited(e)
    }}>
    <input type="text" placeholder='Enter Your Fucking Name' />
    <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default App