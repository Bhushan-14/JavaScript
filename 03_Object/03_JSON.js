const course = {
    courseName: 'Java Course',
    coursePrice: 100,
    courseInstructor: 'Telusko',
};

// console.log(course.courseInstructor);

//Destructuring Object 
const {courseInstructor: CI} = course
console.log(CI);