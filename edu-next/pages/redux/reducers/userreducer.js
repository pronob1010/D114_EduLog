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

        case "FREE_ENROLL_ATTEMP":{
            console.log(action.value);
            // console.log(state.Userdata.find(ele => ele.id == action.value.loged_user).course_enrolled);

            let user_enrolled_list = state.Userdata.find( (ele) => ele.id == action.value.students).course_enrolled;
            
            user_enrolled_list.push(action.value)
            console.log(user_enrolled_list);
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
