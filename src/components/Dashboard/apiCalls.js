import {getUserRoute, addUserRoute} from './routes';
import {get, post} from '../common/axios/axiosResType';

export const fetchData = async (dispatch) =>{ //fetch user data
    await get(getUserRoute()).then((res) =>{
    if(res){ 
        if(res.status === 200){
            return dispatch({ type: 'GET_USER', payload : res.data.response })
        }
    }
    }).catch((err) =>{
        throw err;
    })
};

export const addUser = async(dispatch, data)=>{ // add user data
    await post(addUserRoute(), data).then((res) =>{
        if(res){ 
            if(res.status === 200){
                fetchData(dispatch)
            }
        }
        }).catch((err) =>{
            throw err;
        })
}