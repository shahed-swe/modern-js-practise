class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        console.log(this.name);
    }
}

class MainStudent extends Student {
    constructor(name, age, phone = 'Unknow phone number') {
        super(name, age);
        this.phone = phone;
    }
    say() {
        console.log(this.name);
    }
}


const stu = new Student('Shahed', 18);
console.log(`${stu.name} your age is ${stu.age}`);
stu.say();

const mainStu = new MainStudent('Razib', 20, '09090909');
console.log(`${mainStu.name} your age is ${mainStu.age} and phone number is ${mainStu.phone}`);
mainStu.say();