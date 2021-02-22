class Student {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

}
module.exports = Student;
// const student = new Student();
// student.setName("John");
// console.log(student.getName());