// const course = {
//     name: "Full Stack", id: "FSRNL",
//     mentor: {
//         mentorName: "Nikhil",
//         mentorID:101
//     }
// }


// const { name, id, mentor } = course

// // renaming
// // const courseName = course.name;
// const { name: courseName } = course;

// console.log(courseName);

// // nested destructing with renaming
// const { mentor: { mentorName:fullName,mentorID } } = course;
// console.log(fullName);


const arr = [1,2];

const [num1,num2,num3,num4] = arr;
console.log(num1, num2, num3, num4);