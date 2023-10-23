import React, { useReducer } from 'react'

const initialstate = 0
function reducer (state, action){
  switch(action){
    case "Increment":
      return state+1
    case "Decrement":
      return state-1
      default:
        return state
  }

}

const Counter = () => {
  const[count , dispatch] = useReducer(reducer, initialstate)
  return (
    <div>
    <div>{count}</div>
        <button onClick={()=>dispatch("Increment")}>Increment</button>
        <button onClick={()=>dispatch("Decrement")}>Decrement</button>
        
    </div>
  )
}

export default Counter