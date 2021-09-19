import CourseList, { SingleCourseDetails } from "../../data/coueses";
import category_list from "./../../data/coursecategories";
import v_link from "./../../data/clickedvideo";
import { CourseList2 } from './../../data/coueses';

const initialState = {
  CourseList2: CourseList,//offline 
  CourseList: CourseList2,//online
  SingleCourseData : SingleCourseDetails, 
  Categories: category_list,
  cliked: v_link,
};

export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLAY_VIDEO": {
      // console.log("Play Video", action.value);
      if (action.value) {
        state.cliked.vlink = action.value;
      }

      // console.log("new state :", state.cliked.vlink);
      return state;
    }

    case "SET_COURSE_LIST": {
        // console.log("SET_COURSE_LIST", action.value);
        let new_data = action.value;
        
        state.CourseList = action.value;
        
        // console.log(state);
        return state;
      }

      case "SET_SINGLE_COURSE": {
        console.log("SET_SINGLE_COURSE", action.value);
        let new_data = action.value;
        
        state.SingleCourseData = action.value;
        
        console.log(state);
        return state;
      }

    default:
        return state;
    }
};

// export const CourseDataReducer = (state = initialState, action) => {
//   switch (action.type) {
    
//   }
// };
