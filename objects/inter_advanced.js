let courseEnroll={
    firstName:"Deenadayalan",
    lastName:"R",
    mobileNumber:'9791654694',
    isVerified:true,
    isLoged:true,
    courses:[],
    buyCourse:function(courseName){
        let course=courseName;
        this.courses.push(course);
        return `${this.firstName} is enrolled in the course ${course}`;
    },

    courseCount:function() {
        return `Count of courses Enrolled : ${this.courses.length} `;
    },

    courseNames:function() {
        return `Courses Enrolled are : ${this.courses}`;
    }
};

console.log(courseEnroll.buyCourse('JavaScript'));

console.log(courseEnroll.buyCourse('Node.js'));

console.log(courseEnroll.buyCourse('Database'));

console.log(courseEnroll.courseCount());

console.log(courseEnroll.courseNames());