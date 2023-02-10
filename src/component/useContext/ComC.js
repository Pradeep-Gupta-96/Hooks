import React, { useContext } from 'react'
import { GlobalInfo } from '../../App'


const ComC = () => {
    const {Appcolor}=useContext(GlobalInfo)
    console.log("appcolor",Appcolor)
  return (
    <h1 style={{color:Appcolor}}>Mahabali hanuman this side</h1>
  )
}

export default ComC