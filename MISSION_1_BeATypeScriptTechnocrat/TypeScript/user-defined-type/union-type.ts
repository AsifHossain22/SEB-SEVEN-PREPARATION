let useId: string | number | boolean;

useId = "101";
useId = 101;
useId = true;

function displayUserInfo(useId: string | number) {
  console.log(useId);
}
displayUserInfo("101");
displayUserInfo(101);
