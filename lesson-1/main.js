// function getAge(year){
//     const date = new Date().getFullYear();
//     return date - year;
// }
//
// const showInfo = (year) => {
//   let age = getAge(year);
//   return [age, 65 - age];
// }
// let [age, leftWork] = showInfo(1984);
// console.log(`${age} b ${leftWork}`)
// function testRest(a, b, ...c) {
//     console.log(c);
// }
//
// testRest(1, 2, 3, 4, 5, 5, 3, 2, 5, 6, 10);
//
// let arr = [22, 34, 54, 75, 43, 23];
// let mas = Math.min(...arr);
// console.log(mas);
//
// let arr1 = ["one","two"];
// let arr2 =  ["first", ...arr1, "second"];
// console.log(arr2);

let p = [...document.querySelectorAll('p')];
console.log(p);
