import {
    ALERT_U,
    ALERT_R
    } from '../types'

    
    export default (state,action)=>{
        switch(action.type){

            case ALERT_U: 
            return action.payload;
            
            case ALERT_R: 
            return null;

            default: 
            return state;
        }
    }