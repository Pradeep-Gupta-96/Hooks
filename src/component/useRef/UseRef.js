import React, { useRef, useState } from 'react'


const UseRef = () => {
  const[data,setdata]=  useState('')
  const refelement = useRef()
  const onchange=(event)=>{
    setdata(event.target.value)
  }
  const focus=()=>{
    refelement.current.focus()
    setdata('')
  }
  const changecolour=()=>{
    refelement.current.style.color='green'
    
  }

  return (
  <>
      <div> learning useRef</div>
      <input ref={refelement} type="text"  placeholder='text here!' onChange={onchange} value={data}/>
    <button className="btn btn-success" onClick={focus} > focus/submeet </button>
    <button className="btn btn-success" onClick={changecolour} >  changecolour</button>
  </>
  )
}

export default UseRef