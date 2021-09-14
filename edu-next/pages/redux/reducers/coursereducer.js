import CourseList from "../../data/coueses";
import category_list from './../../data/coursecategories';

const initialState = {
    CourseList: CourseList,
    Categories:category_list,
};

export const courseReducer = (state = initialState, action) => {
    return state;
};
