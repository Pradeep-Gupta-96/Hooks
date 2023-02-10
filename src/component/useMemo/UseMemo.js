import React, { useState, useMemo } from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(0)
    const [multi, setmulti] = useState(10)

   const useMultiMemo=useMemo(() => {
        console.log("mutifan")
       return count + 5
     },[count]) 
    

    return (
        <>
            <div>learning UseMemo</div>
            <h1>count: {count}</h1>
            <h1>mult: {multi}</h1>
            <h1>{useMultiMemo}</h1>
            <button className="btn btn-success" onClick={() => setCount(count + 1)}>conunt+1</button>
            <button className="btn btn-success" onClick={() => setmulti(multi * 5)}>multi*5</button>
        </>

    )
}

export default UseMemo