"use strict";
let users;
users = [];
let user1;
user1 = { userId: 101, userName: "ASIF" };
users.push(user1);
let user2;
user2 = { userId: 102, userName: "RATUL" };
users.push(user2);
let user3;
user3 = { userId: 103, userName: "AKASH" };
users.push(user3);
let getRequest;
getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
