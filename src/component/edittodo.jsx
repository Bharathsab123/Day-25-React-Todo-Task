import React, { useEffect } from "react"
import { useState} from "react"
import "../App.css/"

const Edittodo=({tododata,settododata,show,setshow,editid})=>{
    const[todotitle,settodotitle]=useState("")
    const[tododescription,settododescription]=useState("")
    const[editstatus,seteditstatus]=useState("")

    const updatetododetails=()=>{
        const editdata={
            title:todotitle,
            description:tododescription,
            status:editstatus
        }
        tododata[editid]=editdata
        setshow(!show)
    }
    useEffect(()=>{
       const selecttodo=tododata.filter((val,idx)=>idx==editid)
       settodotitle(selecttodo[0].title)
       settododescription(selecttodo[0].description)
       seteditstatus(selecttodo[0].status)
    },[editid])

    return(
        <div className="inputform">
            <input type="text" placeholder="Todo"  className="ititle" value={todotitle} onChange={(e)=>settodotitle(e.target.value)}/>
            <input type="text" placeholder="Description" className="idescription" value={tododescription} onChange={(e)=>settododescription(e.target.value)}/>
            <button className="ubtn" onClick={updatetododetails}>Update</button>
        </div>
    )
}

export default Edittodo