// BuiltInDataTypes:
//* Number, String, Boolean, Void, Undefined, Null

//* Number:
let userId: number;
let fistName: string;
let lastName: string;
let fullName: string;
let isActivate: boolean;

userId = 101;
fistName = "ASIF";
lastName = " HOSSAIN";
fullName = fistName.concat(lastName);
isActivate = true;

// console.log(
//   `Your id: ${userId}, Full Name: ${fullName}, Account activated: ${isActivate}`,
// );

// console.log(fullName.split(""));

console.log(fullName.split(" "));

// console.log(userId.toLowerCase());

function display(): void {
  console.log("Hi, I'm display!");
}
display();
