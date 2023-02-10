import React  from 'react'
import useCustom from './useCustom'

const Hooks = () => {
    const[Count, Increment, decrement]=useCustom()
  return (
    <>
        <div>Aur Own Coustom Hooks</div>
        <h1>{Count}</h1>
        <button className="btn btn-success"onClick={Increment}>Increment</button>
        <button className="btn btn-success"onClick={decrement}>decrement</button>
    </>
  )
}

export default Hooks