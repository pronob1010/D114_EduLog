import CourseList from "../../data/coueses";
import category_list from './../../data/coursecategories';
import v_link from './../../data/clickedvideo';

const initialState = {
    CourseList: CourseList,
    Categories:category_list,
    cliked : v_link,
};

export const courseReducer = (state = initialState, action) => {
    switch(action.type){
        case 'PLAY_VIDEO':{
            console.log("Play Video", action.value);
            if (action.value){
                state.cliked.vlink = action.value;
            }

            console.log("new state :", state.cliked.vlink);
            return state;
    }
    default: return state; 
}
}
