import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { pre_add_data } from '../../redux/action/action'

function Add() {
  const dispatch = useDispatch()
  const [allStudents,setAllStudents] = useState({
        name:'',
        roll:'',
        birth:'',
        phone:'',
        address:''
  })

const posthandler = () => {
    dispatch(pre_add_data(allStudents));
    setAllStudents({
        name:'',
        roll:'',
        birth:'',
        phone:'',
        address:''
    })
}
  return (
    <div>
      <div style={{width:'350px',margin:'0 auto'}}>
        <center><h2>Add students</h2></center>
      <form action="">
            <input style={{width:350,margin:'10px 0'}} value= {allStudents.name} onChange={(e) => setAllStudents({...allStudents,name:e.target.value})} type="text" placeholder='Enter full Name..' />
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <input style={{width:120,margin:'10px 0'}} value= {allStudents.roll} onChange={(e) => setAllStudents({...allStudents,roll:e.target.value})} type="number" placeholder='Roll:' />
            <input style={{width:200,margin:'10px 0'}} value= {allStudents.birth} onChange={(e) => setAllStudents({...allStudents,birth:e.target.value})} type="date" placeholder='Brith Day:' />
            </div>
            <input style={{width:350,margin:'10px 0'}}  value= {allStudents.phone} onChange={(e) => setAllStudents({...allStudents,phone:e.target.value})} type="number" placeholder='Phone Number' />
           
            <textarea style={{width:350}} value= {allStudents.address} onChange={(e) => setAllStudents({...allStudents,address:e.target.value})} id="w3review" name="w3review" rows="4" cols="50" placeholder='Address'/>

            <button onClick={() => posthandler()} style={{width:80,margin:'10px 0'}} type="button" className="btn btn-info">Add</button>
          </form>
      </div>
    </div>
  )
}

export default Add