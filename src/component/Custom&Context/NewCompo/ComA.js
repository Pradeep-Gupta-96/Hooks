
import { useState, useMemo, useRef } from 'react'
const ComA = () => {
    const [count, setCount] = useState(0);
    const [mult, setmult] = useState(5);
    const refelement = useRef()
    const onclickadd = () => {
        setCount(count + 1);
    };
    const onclickMulti = () => {
        setmult(mult * 5);
        refelement.current.style.color = 'red'
    };
    const multifan = useMemo(() => {
        console.log("multfunt");
        return count + 5;
    }, [count]);
    return [count, mult, onclickadd, onclickMulti, multifan, refelement]
}
export default ComA 