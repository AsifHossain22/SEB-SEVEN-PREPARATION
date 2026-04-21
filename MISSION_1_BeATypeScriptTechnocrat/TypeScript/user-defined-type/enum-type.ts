// enum - store constants; duplicate value is not allowed here

// enum types: numeric, string, hetergenous

//* Numeric Enum

enum RequestType {
  readData = 1,
  saveData = 2,
  deleteData,
}
// console.log(RequestType);
// console.log(RequestType.readData);
// console.log(RequestType["deleteData"]);

// Enum - String
enum RequestType2 {
  readData = "READ_DATA",
  deleteData = "DELETE_DATA",
}
// console.log(RequestType2.readData);
// console.log(RequestType2["deleteData"]);

// Hetergenous Enum
enum RequestType3 {
  readData = "READ_DATA",
  deleteData = "DELETE_DATA",
  id = 101,
}
