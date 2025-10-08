function Student(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    return this.subject = subjectName;
};

Student.prototype.addMarks = function (...marksToAdd){
    if (this.marks) {
        this.marks.push(...marksToAdd);
    }
};

Student.prototype.getAverage = function getAverage() {
    if (!this.marks || this.marks.length === 0 ) {
        return 0;
    }else {
        return this.marks.reduce((sum, item) => sum + item) / this.marks.length;
    }
};

Student.prototype.exclude = function exclude(reason) {
    delete this.subject;
    delete this.marks;
    return this.excluded = reason;
}

let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}
let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)
// {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}
