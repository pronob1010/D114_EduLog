// import { useEffect } from 'react';

//offLine test data
const CourseList = [
    {
        "id": 6,
        "prerequisite": [
            {
                "id": 4,
                "short_description": "Prerequisite 1",
                "Course": 6
            },
            {
                "id": 5,
                "short_description": "Prerequisite 2",
                "Course": 6
            },
            {
                "id": 6,
                "short_description": "Prerequisite 3",
                "Course": 6
            }
        ],
        "willlearn": [
            {
                "id": 5,
                "short_description": "will learn 1",
                "Course": 6
            },
            {
                "id": 6,
                "short_description": "will learn 2",
                "Course": 6
            },
            {
                "id": 7,
                "short_description": "will learn  3",
                "Course": 6
            }
        ],
        "lesson": [
            {
                "id": 5,
                "video": [
                    {
                        "id": 6,
                        "Video_Title": "Title 1 for video 1 Lesson 1",
                        "Video_URL": "https://www.youtube.com/embed/vdAI-oR-cyw",
                        "is_Preview": true,
                        "slug": "title-1-for-video-1-lesson-1-lesson-1-bangla",
                        "Course": 6,
                        "Lesson": 5
                    },
                    {
                        "id": 7,
                        "Video_Title": "Title 2 for video 2 Lesson 1",
                        "Video_URL": "https://youtu.be/XxLQ1g0fAzM",
                        "is_Preview": false,
                        "slug": "title-2-for-video-2-lesson-1-lesson-1-bangla",
                        "Course": 6,
                        "Lesson": 5
                    }
                ],
                "test": [
                    {
                        "id": 4,
                        "choices": [
                            {
                                "id": 1,
                                "option_title": "Option 1",
                                "is_correct": true,
                                "question": 4
                            },
                            {
                                "id": 2,
                                "option_title": "Option 2",
                                "is_correct": false,
                                "question": 4
                            },
                            {
                                "id": 3,
                                "option_title": "Option 3",
                                "is_correct": false,
                                "question": 4
                            },
                            {
                                "id": 4,
                                "option_title": "Option 4",
                                "is_correct": false,
                                "question": 4
                            }
                        ],
                        "Question": "What is your name ?",
                        "Time_In_Secound": 45,
                        "point": 8,
                        "Course": 6,
                        "Lesson": 5
                    },
                    {
                        "id": 5,
                        "choices": [
                            {
                                "id": 5,
                                "option_title": "1 Option",
                                "is_correct": false,
                                "question": 5
                            },
                            {
                                "id": 6,
                                "option_title": "2 Option",
                                "is_correct": true,
                                "question": 5
                            },
                            {
                                "id": 7,
                                "option_title": "3 Option",
                                "is_correct": false,
                                "question": 5
                            },
                            {
                                "id": 8,
                                "option_title": "4 Option",
                                "is_correct": false,
                                "question": 5
                            }
                        ],
                        "Question": "What is your fathers name ?",
                        "Time_In_Secound": 56,
                        "point": 4,
                        "Course": 6,
                        "Lesson": 5
                    },
                    {
                        "id": 7,
                        "choices": [
                            {
                                "id": 13,
                                "option_title": "xyz 1",
                                "is_correct": false,
                                "question": 7
                            },
                            {
                                "id": 14,
                                "option_title": "xyz 2",
                                "is_correct": false,
                                "question": 7
                            },
                            {
                                "id": 15,
                                "option_title": "xyz 3",
                                "is_correct": true,
                                "question": 7
                            },
                            {
                                "id": 16,
                                "option_title": "xyz 4",
                                "is_correct": false,
                                "question": 7
                            }
                        ],
                        "Question": "What is your name 2?",
                        "Time_In_Secound": 56,
                        "point": 0,
                        "Course": 7,
                        "Lesson": 5
                    },
                    {
                        "id": 9,
                        "choices": [
                            {
                                "id": 9,
                                "option_title": "abcd 1",
                                "is_correct": false,
                                "question": 9
                            },
                            {
                                "id": 10,
                                "option_title": "abcd 2",
                                "is_correct": false,
                                "question": 9
                            },
                            {
                                "id": 11,
                                "option_title": "abcd 3",
                                "is_correct": false,
                                "question": 9
                            },
                            {
                                "id": 12,
                                "option_title": "abcd 4",
                                "is_correct": false,
                                "question": 9
                            }
                        ],
                        "Question": "What is your mothers name ?",
                        "Time_In_Secound": 25,
                        "point": 5,
                        "Course": 6,
                        "Lesson": 5
                    }
                ],
                "Lesson_Title": "lesson 1",
                "slug": "lesson-1-bangla",
                "Course": 6
            },
            {
                "id": 6,
                "video": [
                    {
                        "id": 8,
                        "Video_Title": "Title 1 for video 1 Lesson 2",
                        "Video_URL": "https://youtu.be/NnothCewIYQ",
                        "is_Preview": false,
                        "slug": "title-1-for-video-1-lesson-2-lesson-2-bangla",
                        "Course": 6,
                        "Lesson": 6
                    }
                ],
                "test": [
                    {
                        "id": 8,
                        "choices": [
                            {
                                "id": 17,
                                "option_title": "pqr 1",
                                "is_correct": true,
                                "question": 8
                            },
                            {
                                "id": 18,
                                "option_title": "pqr 2",
                                "is_correct": false,
                                "question": 8
                            },
                            {
                                "id": 19,
                                "option_title": "pqr 3",
                                "is_correct": false,
                                "question": 8
                            },
                            {
                                "id": 20,
                                "option_title": "pqr 4",
                                "is_correct": false,
                                "question": 8
                            }
                        ],
                        "Question": "What is your fathers name 2?",
                        "Time_In_Secound": 56,
                        "point": 0,
                        "Course": 7,
                        "Lesson": 6
                    }
                ],
                "Lesson_Title": "lesson 2",
                "slug": "lesson-2-bangla",
                "Course": 6
            },
            {
                "id": 7,
                "video": [],
                "test": [
                    {
                        "id": 10,
                        "choices": [
                            {
                                "id": 21,
                                "option_title": "A",
                                "is_correct": false,
                                "question": 10
                            },
                            {
                                "id": 22,
                                "option_title": "B",
                                "is_correct": false,
                                "question": 10
                            },
                            {
                                "id": 23,
                                "option_title": "C",
                                "is_correct": false,
                                "question": 10
                            }
                        ],
                        "Question": "What is you like most?",
                        "Time_In_Secound": 25,
                        "point": 10,
                        "Course": 7,
                        "Lesson": 7
                    }
                ],
                "Lesson_Title": "lesson 3",
                "slug": "lesson-3-bangla",
                "Course": 6
            }
        ],
        "tags": [
            {
                "id": 4,
                "Tags_Title": "tag 1",
                "slug": "tag-1-bangla",
                "Course": 6
            },
            {
                "id": 5,
                "Tags_Title": "tag 2",
                "slug": "tag-2-bangla",
                "Course": 6
            },
            {
                "id": 6,
                "Tags_Title": "tag 3",
                "slug": "tag-3-bangla",
                "Course": 6
            }
        ],
        "rating": [
            {
                "id": 1,
                "rating": "4",
                "comment": "This is a sample comment",
                "block": false,
                "Course": 6,
                "student": 2
            }
        ],
        "course_title": "Bangla",
        "course_description": "Hi, How are you?",
        "level": "Beginner",
        "course_price": 0,
        "course_discount_price": 0,
        "activate": true,
        "thumbnail": "http://localhost:8000/media/media/Course/Thumbnail/thm_THZpAnB.png",
        "create_date": "2021-09-07T20:34:31.776603Z",
        "update_date": "2021-09-07T20:34:31.776603Z",
        "materials_link": "https://github.com/pronob1010/D167-esports/blob/main/esports/matches/admin.py",
        "course_length": "20",
        "slug": "bangla-none-hsc",
        "instractor": 1,
        "Course_Base_Category": 1
    },
    {
        "id": 7,
        "prerequisite": [
            {
                "id": 7,
                "short_description": "Pre 1",
                "Course": 7
            },
            {
                "id": 8,
                "short_description": "Pre 2",
                "Course": 7
            },
            {
                "id": 9,
                "short_description": "Pre 3",
                "Course": 7
            }
        ],
        "willlearn": [
            {
                "id": 8,
                "short_description": "will 1",
                "Course": 7
            },
            {
                "id": 9,
                "short_description": "will 2",
                "Course": 7
            }
        ],
        "lesson": [
            {
                "id": 8,
                "video": [
                    {
                        "id": 9,
                        "Video_Title": "Title 1 for video 1 Lesson 1",
                        "Video_URL": "https://youtu.be/XxLQ1g0fAzM",
                        "is_Preview": false,
                        "slug": "title-1-for-video-1-lesson-1-lesson-1-math",
                        "Course": 7,
                        "Lesson": 8
                    }
                ],
                "test": [],
                "Lesson_Title": "lesson 1",
                "slug": "lesson-1-math",
                "Course": 7
            },
            {
                "id": 9,
                "video": [
                    {
                        "id": 10,
                        "Video_Title": "Title 2 for video 2 Lesson 1",
                        "Video_URL": "https://youtu.be/XxLQ1g0fAzM",
                        "is_Preview": false,
                        "slug": "title-2-for-video-2-lesson-1-lesson-1-math",
                        "Course": 7,
                        "Lesson": 9
                    }
                ],
                "test": [],
                "Lesson_Title": "lesson 2",
                "slug": "lesson-2-math",
                "Course": 7
            },
            {
                "id": 10,
                "video": [],
                "test": [],
                "Lesson_Title": "lesson 3",
                "slug": "lesson-3-math",
                "Course": 7
            }
        ],
        "tags": [
            {
                "id": 7,
                "Tags_Title": "tag 1",
                "slug": "tag-1-math",
                "Course": 7
            },
            {
                "id": 8,
                "Tags_Title": "tag 2",
                "slug": "tag-2-math",
                "Course": 7
            },
            {
                "id": 9,
                "Tags_Title": "Tag 3",
                "slug": "tag-3-math",
                "Course": 7
            }
        ],
        "rating": [],
        "course_title": "Math",
        "course_description": "CourseListCourse ListCourseList CourseList CourseList CourseList.",
        "level": "Beginner",
        "course_price": 0,
        "course_discount_price": 0,
        "activate": true,
        "thumbnail": "http://localhost:8000/media/media/Course/Thumbnail/thm_Q6Cccyg.png",
        "create_date": "2021-09-09T20:13:49.788276Z",
        "update_date": "2021-09-09T20:13:49.788276Z",
        "materials_link": "https://github.com/pronob1010/D167-esports/blob/main/esports/matches/admin.py",
        "course_length": "208",
        "slug": "math-none-hsc",
        "instractor": 2,
        "Course_Base_Category": 1
    },
    {
        "id": 8,
        "prerequisite": [
            {
                "id": 10,
                "short_description": "English Pre 1",
                "Course": 8
            },
            {
                "id": 11,
                "short_description": "English Pre 2",
                "Course": 8
            }
        ],
        "willlearn": [
            {
                "id": 10,
                "short_description": "English will learn 1",
                "Course": 8
            },
            {
                "id": 11,
                "short_description": "English will learn 2",
                "Course": 8
            }
        ],
        "lesson": [],
        "tags": [
            {
                "id": 10,
                "Tags_Title": "English tag 1",
                "slug": "english-tag-1-english",
                "Course": 8
            },
            {
                "id": 11,
                "Tags_Title": "English tag 2",
                "slug": "english-tag-2-english",
                "Course": 8
            }
        ],
        "rating": [],
        "course_title": "English",
        "course_description": "asdf asdf asdf asdf asdf",
        "level": "Beginner",
        "course_price": 456,
        "course_discount_price": 5,
        "activate": true,
        "thumbnail": "http://localhost:8000/media/media/Course/Thumbnail/thm_CrQrE24.png",
        "create_date": "2021-09-09T20:26:39.682073Z",
        "update_date": "2021-09-09T20:26:39.682073Z",
        "materials_link": "https://github.com/pronob1010/D167-esports/blob/main/esports/matches/admin.py",
        "course_length": "20",
        "slug": "english-none-hsc",
        "instractor": 1,
        "Course_Base_Category": 1
    }
]

// online text data
export const CourseList2 = []

export const SingleCourseDetails = []

// export async function getStaticProps(context) {
//     const res = await fetch(`http://localhost:8000/api/data/course/`)
//     const data = await res.json()
  
//     if (!data) {
//       return {
//         notFound: true,
//       }
//     }
//     console.log("will be passed", data);
  
//     return {
//     //   props: { data }, // will be passed to the page component as props
//     }
//   }

// useEffect(() => {
//     getStaticProps();
// }, [])

export default CourseList;