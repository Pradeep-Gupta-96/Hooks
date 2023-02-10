import {useState} from 'react'

const useCustom = () => {
    const [Count, setcount]=useState(0)
    const Increment=()=>{
        setcount(Count+1)
    }
    const decrement=()=>{
        setcount(Count-1)
    }
  return [Count, Increment, decrement]
}

export default useCustom