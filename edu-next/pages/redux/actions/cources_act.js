// export const play =() =>{
    
//     return {
//         type:"PLAY_VIDEO"
//     }
// }

export const setCourseList = (payload) => {
    console.log(payload);

    return {
        type : "SET_COURSE_LIST",
        value : payload, 
    }
}

export const setSingleCourse = (payload) => {
    console.log(payload);

    return {
        type : "SET_SINGLE_COURSE",
        value : payload, 
    }
}