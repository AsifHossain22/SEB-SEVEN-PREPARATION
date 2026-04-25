class User {
  // properties, methods, constructor
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

// class object
let user1 = new User("ASIF HOSSAIN", 25);
user1.display();

let user2 = new User("JOHORA TAZ THOHA", 25);
user2.display();
