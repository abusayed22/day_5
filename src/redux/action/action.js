import axios from 'axios'
import * as types from '../type/type'

const add_data = () => {
    return {
        type:types.POST_DATA
    }
}
export const pre_add_data = (allStudents) => {
    return (dispatch) => {
        axios.post("http://127.0.0.1:8000/api/students",allStudents)
        .then(res => {
            dispatch(add_data(res.data))
        })
    }
}
const get_data = (data) => {
    return{
        type:types.GET_DATA,
        payload:data
    }
}
export const pre_get_data = () => {
    return(dispatch) => {
        axios.get("http://127.0.0.1:8000/api/students")
        .then(res => {
            dispatch(get_data(res.data.students))
        }).catch(err => console.log(err))
    }
} 

const delete_data = () => {
    return{
        type:types.DELETE_DATA
    }
}
export const pre_delete_data = (id) => {
    return (dispatch) => {
        axios.delete(`http://127.0.0.1:8000/api/students/${id}`)
        .then(res => {
            dispatch(delete_data())
            dispatch(get_data())
        }).catch(err => console.log(err))
    }
}

const single_state = (data) => {
    return{
        type:types.SINGLE_STATE,
        payload:data
    }
}
export const pre_single_state = (id) => {
    return(dispatch) => {
        axios.get(`http://127.0.0.1:8000/api/students/${id}`)
        .then(res => {
            dispatch(single_state(res.data.student))
        })
        .catch(err => console.log(err))
    }
}

const single_update = () => {
    return {
        type:types.SINGLE_EDIT
    }
}
export const pre_single_update = (id,singleState) => {
    return(dispatch) => {
        axios.put(`http://127.0.0.1:8000/api/students/${id},singleState`)
        .then(res => {
            dispatch(single_update())
            dispatch(get_data())
        }).catch(err => console.log(err))
    }
}