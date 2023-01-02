import React, { useState } from "react";

export default function ShowContact({arraycon}){

    const [array,setarray] = useState(arraycon)
 
    const deleteContact = (ed)=>{
      setarray( arraycon.splice(ed,1))
    }

    return (
        <div className="tableContact">
            <table id="contact">
  <tr>
    <th>Name</th>
    <th>Phone</th>
    <th>Email</th>
  </tr>
 {arraycon.map((e,index)=>{return <tr id="tr">
    <td>{e.name}</td>
    <td>{e.phone}</td>
    <td>{e.email}</td>
    <button onClick={deleteContact.bind(this,index)}>delete</button>
 </tr>})}
  
</table>
        </div>
    )
}