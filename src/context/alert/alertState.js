import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';

import {
ALERT_U,
ALERT_R
} from '../types'


    

const AlertState = props => {
    const initialState = { alert: null }

    const [state, dispatch] = useReducer(AlertReducer, initialState);
    
        //Search github users.

    const setAlert=(msg,type)=>{
        dispatch({
            type: ALERT_U,
            payload: {msg,type}
        });
    
        setTimeout(()=>     {
    
            dispatch({type: ALERT_R});        
        }, 2000)
      
    }
  
    //Set Loading
    // const setLoading = ()=> dispatch({type: SET_LOADING});
    return (
        <AlertContext.Provider
          value={{
              alert: state,
              setAlert
        }}
        >
          {props.children}
        </AlertContext.Provider>
      );
    

};

export default AlertState;