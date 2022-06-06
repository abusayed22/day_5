import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { pre_single_state, pre_single_update } from '../../redux/action/action'

function Single() {
    const navigate = useNavigate()
    const {id} = useParams()
    const dispatch = useDispatch()
    const singleInfo = useSelector(state => state.reducers.user);

    useEffect(() => {
        dispatch(pre_single_state(id));
    },[singleInfo])

    const [singleState,setSingleState] = useState({
        name:'',
        roll:'',
        birth:'',
        phone:'',
        address:'' 
    });
    useEffect(() => {
        setSingleState({...singleState && singleInfo})
    },[])

    const posthandler = () => {
        dispatch(pre_single_update(id,singleState));
        navigate('/all_students')
    }
  return (
    <div style={{width:350,margin:'0 auto'}}>
        <form action="">
        <input style={{width:350,margin:'10px 0'}} value={singleState.name ||''} onChange={ (e) =>setSingleState({...singleState,name:e.target.value})} type="text" placeholder='Enter full Name..' />
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <input style={{width:120,margin:'10px 0'}} value={singleState.roll ||''} onChange={ (e) =>setSingleState({...singleState,roll:e.target.value})} type="number" placeholder='Roll:' />
            <input style={{width:200,margin:'10px 0'}} value={singleState.birth ||''} onChange={ (e) =>setSingleState({...singleState,birth:e.target.value})} type="date" placeholder='Brith Day:' />
            </div>
            <input style={{width:350,margin:'10px 0'}} value={singleState.phone ||''} onChange={ (e) =>setSingleState({...singleState,phone:e.target.value})} type="number" placeholder='Phone Number' />
           
            <textarea style={{width:350}} value={singleState.address ||''} onChange={ (e) =>setSingleState({...singleState,address:e.target.value})} id="w3review" name="w3review" rows="4" cols="50" placeholder='Address'/>

            <button onClick={() => posthandler()} style={{width:80,margin:'10px 0'}} type="button" className="btn btn-info">Add</button>
          </form>
    </div>
  )
}

export default Single