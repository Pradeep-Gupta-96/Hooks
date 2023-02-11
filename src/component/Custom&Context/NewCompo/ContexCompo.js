
// ===================ComA=============== 
/*import ComB from "./ComB"

const ComA=()=>{
  return (
    <ComB/>
  )
}
export default ComA
*/


// ===================ComB=============== 

/*import ComC from "./ComC"

const ComB=()=>{
  return(
    <ComC/>
  )
}
export default ComB
*/

///==================ComC=============

/*import { useContext } from "react"
import { GlobInfo } from "../App"


const ComC=(props)=>{
  const{bhagwa,getdata}=useContext(GlobInfo)
  const day=" Bjrangbali ki jai"
  return(
    <>
    <div  style={{color:bhagwa}}>
      Jai shree Ram
    </div>
   <button onClick={()=>{getdata(day)}}>Click Me !</button>
    </>
  )
}
export default ComC
*/