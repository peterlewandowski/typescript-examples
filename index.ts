let firstName: string = "damian";
let age: number = 49;
let active: boolean = true;

// let names: string[] = [1,2,3,4] // gives us an error
let names: string[] = ["booby", "jennifer", "lily"]; // good array

enum studentTypes {
  pending,
  active,
  almostdone,
  graduated,
  tas,
  teachers,
}

const myStatus = studentTypes.graduated;

switch (Number(myStatus)) {
  case Number(studentTypes.active):
    console.log("student is active");
    break;
  case Number(studentTypes.active):
    console.log("Student is graduated");
    break;
  case Number(studentTypes.active):
    console.log("🤭");
}

// console.log(myStatus);
// if (myStatus === studentTypes.graduated) {
//   console.log(`the student is graduated`);
// }

// console.log(names);
// console.log(`my first name is ${firstName}`);

let code: string | number = 11;
code = "aa11";
// code = false // error, not a string or a number
console.log(`my entry code is ${code}`);

function sum(arr: number[]) {
  return arr.reduce((total: number, num: number) => total + num);
}

let numbers: number[] = [1, 2, 3, 4, 5, 6];
// console.log(sum(numbers));

let complexItem: any = { name: "damian" };

complexItem = { title: "professor" };
complexItem = "it is a string";
complexItem = 22;

// console.log("complexItem", complexItem);

enum bloodType {
  aPositive,
  bPositive,
  oNegative,
  oPositive,
}
interface human {
  name: string;
  age: number;
  height: number;
  bloodType?: bloodType;
}

const me: human = {
  name: "bobby",
  age: 49,
//   bloodType: bloodType.aPositive,
  height: 6 * 12,
};
