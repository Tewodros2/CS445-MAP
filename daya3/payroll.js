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
var Payroll;
(function (Payroll) {
    Payroll[Payroll["FICA"] = 10] = "FICA";
    Payroll[Payroll["STATE"] = 5] = "STATE";
    Payroll[Payroll["MEDICARE"] = 12] = "MEDICARE";
})(Payroll || (Payroll = {}));
var federalTax = Payroll.FICA;
console.log(federalTax);
