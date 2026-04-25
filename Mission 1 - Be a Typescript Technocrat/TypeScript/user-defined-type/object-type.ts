// let user1: { uerId: number; userName: string };
// user1 = { uerId: 101, userName: "hiasifhossain22" };
// console.log(user1);

// let user1: object;
// user1 = { name: "ASIF" };

// let users: object[];
// users = [
//   { name: "ASIF", age: 25 },
//   { name: "JOHORA", age: 25 },
// ];

let users: object[];
users = [];

let user1: { userId: number; userName: string };
user1 = { userId: 101, userName: "ASIF" };
users.push(user1);

let user2: { userId: number; userName: string };
user2 = { userId: 102, userName: "JOHORA" };
users.push(user2);

// console.log(users);

for (const key in users) {
  console.log(users[key]["userName"]);
}
