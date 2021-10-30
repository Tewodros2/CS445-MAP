
// const FICA: number = 10;
// const STATE: number = 5;
// const MEDICARE: number = 12;

//  constructor(FICA:number, STATE:number, MEDICARE:number)

// function payroll(grossSalary: number) {

//     let netSalary: number = grossSalary - (grossSalary * ((FICA + STATE + MEDICARE) / 100));
//     return netSalary;
// }
// let grossSal: number = 10000;
// console.log(payroll(grossSal));
enum Payroll { FICA = 10, STATE = 5, MEDICARE = 12 }
const federalTax: Payroll = Payroll.FICA;
console.log(federalTax);


