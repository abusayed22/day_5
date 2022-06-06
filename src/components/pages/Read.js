import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { pre_delete_data, pre_get_data } from '../../redux/action/action';

function Read() {
  const navigate = useNavigate
  const dispatch = useDispatch()
  const studentsInfo = useSelector(state => state.reducers.users);
  console.log(studentsInfo);
  useEffect(() => {
    dispatch(pre_get_data())
  },[studentsInfo]);
// delete area
const deletehandle = (id) => {
  dispatch(pre_delete_data(id))
}

  return (
    <div style={{width:'750px',margin:'0 auto'}}>
      <table className="table">
              <thead>
                <tr>
                  <th scope="col">Roll</th>
                  <th scope="col">Name</th>
                  <th scope="col">Brith</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Address</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>

              {studentsInfo && studentsInfo.map((obj) => (

                  <tr key={obj.id}>
                  <th scope="row">{obj.roll}</th>

                  <td>{obj.name}</td>
                  <td>{obj.birth}</td>
                  <td>{obj.phone}</td>
                  <td>{obj.address}</td>
                  <td>
                    <button onClick={() => deletehandle(obj.id)} className='btn btn-danger btn-sm '>Delete</button>
                    <button onClick={()=> navigate(`/single_edit/${obj.id}`)} style={{marginLeft:'5px'}} className='btn btn-info btn-sm'>Edit</button>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
    </div>
  )
}

export default Read