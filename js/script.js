//  masala 1
function i() {
  let userPromt = Number(prompt("summa kiriting"));
  let emptyArray = [];
  emptyArray.push(userPromt);
  return emptyArray;
}
console.log(i());
//  SHART  OXSHAMADI
// if (i() === 0) {
//   alert("son kiriting iltimos");
// } else if (i() === NaN) {
//   alert("son kiriting iltimos");
// } else {
//   console.log(i());
//   // }
// 2- MASALA
let blank = ["Jazz", "Blues"];
blank.pop(2);
blank.push("Rock-n-roll");
blank.splice(1, 0, "calssic");
blank.shift();
blank.unshift("Reggae");
blank.unshift("Rap");
console.log(blank);

//3-masala
//  3 SHARTIGA UNCHA CHUNMADIM AGAR CHUNGANIMDA ANIQ ISHLAY OLARDIM
// MASALA 3

let salaries = {
  Akmal: 100,
  Salim: 5200,
  Karima: 1800,
};

let sum = function (salare) {
  let sumSalaries = 0;

  for (let salary of Object.values(salare)) {
    sumSalaries += salary;
  }
  return sumSalaries;
};

console.log(sum(salaries));
