
// import { getObjByKey } from '../../utils/Storage';
import { getObjByKey } from '../../utils/Storage';
import { AUTH_STATUS } from '../types';

export const checkuserToken = () => {
    return async (dispatch) => {
        getObjByKey("loginResponse").then((res) => {
            console.log("logouttttttt",res);
            res ? dispatch({
                type: AUTH_STATUS,
                payload: true,
            }) : dispatch({
                type: AUTH_STATUS,
                payload: false,
            })
        })
    
    };
}

