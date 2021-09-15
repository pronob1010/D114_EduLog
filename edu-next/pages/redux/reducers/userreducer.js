import Userdata from "../../data/user";
import {testData, userlog} from '../../data/userlog';


const initialState = {
    Userdata: Userdata,
    test : testData,
    log :userlog,

};

export const userReducer = (state = initialState, action) => {
    
    switch(action.type){
        case "TEST":{
            const li = state.test.data_test;
            console.log("current ", li);
            return state.test.data_test = 5;
        }

        case "LOGIN_INFO":{
            if (typeof window !== 'undefined') {
            state.log.userId = localStorage.getItem("userId");
            state.log.token = localStorage.getItem("token");
            state.log.expTime = localStorage.getItem("expTime");
            }
            // console.log(state.log);
            return state;
        }

        case "LOGOUT_INFO":{
            state.log.userId = '';
            state.log.token ='';
            state.log.expTime = '';
            console.log("checked");
            return state;
        }

        
        default: return state; 
    }

    // if(action.type === "A"){
    //     return state.test.data_test + 5;
    // }
    // else{
    //     return state;
    // }
};
