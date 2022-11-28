//Challenge 3: Net Salary Calculator (Toy Problem)
//Write a program whose major task is to calculate an
//individual’s Net Salary by getting the inputs of basic salary and benefits.
//Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary

const prompt = require("prompt-sync")();

//calculates the NHIF contributions
const nhifDedections = function (gross) {
    let nhifLevy = 0
    if (gross > 0 && gross <= 5999) {
        return nhifLevy = 150*0.85;
    } else if (gross >= 6000 && gross <= 7999) {
        return nhifLevy = 300*0.85;
    } else if (gross >= 8000 && gross <= 11999) {
        return nhifLevy = 400*0.85;
    } else if (gross >= 12000 && gross <= 14999) {
        return nhifLevy = 500*0.85;
    } else if (gross >= 15000 && gross <= 19999) {
        return nhifLevy = 600*0.85;
    } else if (gross >= 20000 && gross <= 24999) {
        return nhifLevy = 750*0.85;
    } else if (gross >= 25000 && gross <= 29999) {
        return nhifLevy = 850*0.85;
    } else if (gross >= 30000 && gross <= 34999) {
        return nhifLevy = 900*0.85;
    } else if (gross >= 35000 && gross <= 39999) {
        return nhifLevy = 950*0.85;
    } else if (gross >= 40000 && gross <= 44999) {
        return nhifLevy = 1000*0.85;
    } else if (gross >= 45000 && gross <= 49999) {
        return nhifLevy = 1100*0.85;
    } else if (gross >= 50000 && gross <= 59999) {
        return nhifLevy = 1200*0.85;
    } else if (gross >= 60000 && gross <= 69999) {
        return nhifLevy = 1300*0.85;
    } else if (gross >= 70000 && gross <= 79999) {
        return nhifLevy = 1400*0.85
    } else if (gross >= 80000 && gross <= 89999) {
        return nhifLevy = 1500*0.85
    } else if (gross >= 90000 && gross <= 99999) {
        return nhifLevy = 1600*0.85
    } else if (gross >= 100000) {
        return nhifLevy = 1700*0.85
    }

    return nhifLevy
}

//Does the nssf deduction from your gross salary
const nssfDeductions = function(gross) {
    let nssf = 0
    if (gross > 0 && gross <= 17999){
        return gross*0.06
    }else if (gross >= 18000){
        return nssf = 1080
    }

    return nssf

}


 //the function takes the user's basic salary and their total benefits as parameters and calculates their paye.

function salaryCalculator() {
    let basic = prompt("What's your Basic Salary: ")
    let benefits = prompt("What are your total benefits: ")
    let gross = Number(basic) + Number(benefits);
    let payeAmount = 0;
    let taxableIncome = gross -(nhifDedections(gross) + nssfDeductions(gross))
    if (gross > 0 && gross <= 24000) {
        payeAmount = taxableIncome * 0.1
    }else if (taxableIncome >= 24001 && taxableIncome <= 32333) {
        payeAmount = ((taxableIncome-24000) * 0.25)+ 2400
    }else if (gross > 32333) {
        payeAmount = ((taxableIncome-32333)* 0.30)+ 2400 + 2083.25
    }
    return ` -Your gross salary is ${gross}\n -Your payee is ${payeAmount}\n -Your net salary is ${(gross - payeAmount)}\n -Your nssf deductions were ${nssfDeductions(gross)}\n -Your NHIF contribution were ${nhifDedections(gross)}`
}

console.log(salaryCalculator());