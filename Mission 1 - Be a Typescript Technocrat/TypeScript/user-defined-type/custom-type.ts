type User = { userId: number; userName: string }; // CustomType

let users: User[];
users = [];

let user1: User;
user1 = { userId: 101, userName: "ASIF" };
users.push(user1);

let user2: User;
user2 = { userId: 102, userName: "RATUL" };
users.push(user2);

let user3: User;
user3 = { userId: 103, userName: "AKASH" };
users.push(user3);

// console.log(users);

type RequestType = "GET" | "POST";
let getRequest: RequestType;
getRequest = "GET";

function requestHandler(requestType: RequestType) {
  console.log(requestType);
}
requestHandler("GET");
