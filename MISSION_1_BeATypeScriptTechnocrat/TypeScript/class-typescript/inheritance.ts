class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`Username: ${this.userName}, Age: ${this.age}`);
  }
}

class Student extends User {
  studentId: number;

  constructor(studentId: number, userName: string, age: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(
      `UserId: ${this.studentId}, Username: ${this.userName}, Age: ${this.age}`,
    );
  }
}

let student1 = new Student(101, "ASIF", 25);
student1.display();

// let user1 = new User("ASIF HOSSAIN", 25);
// user1.display();
