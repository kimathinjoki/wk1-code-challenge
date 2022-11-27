//Challenge 1: Student Grade Generator (Toy Problem)

//Write that prompts the user to input student marks.
//The input should be between 0 and 100. Then output the correct grade:
//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40

function studentGradeGenerator(grade){
    if(grade > 79 && grade <= 100){
        return "You got an A"
    }else if(grade <=79 && grade >=60){
        return "You got a B"
    }else if(grade <= 59 && grade >= 49){
        return "You got a C"
    }else if(grade < 49 && grade >=40){
        return "You got a D"
    }else if(grade >0 && grade < 40){
        return "You got a E"
    }else{
        return "Please input a valid grading number!"
    }
}

studentGradeGenerator(78)


//Challenge 2: Speed Detector
//Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”.
//Otherwise, for every 5 km/s above the speed limit (70).
//it should give the driver one demerit point and print the total number of demerit points.
//For example, if the speed is 80, it should print: “Points: 2”.
//If the driver gets more than 12 points, the function should print: “License suspended”.




function speedDetector(speed){
    if(speed > 0 && speed <=70){
        return "Ok"
    }else if(speed>70){
        let exceedSpeed = (speed-70)/5
        if (exceedSpeed > 12){
            return "License suspended"
        }else{
            return `Points: ${exceedSpeed}`
        }
    }else{
        return "Please enter correct speed"
    }
}

speedDetector(67)
speedDetector(90)
speedDetector(175)







//Challenge 3: Net Salary Calculator (Toy Problem)
//Write a program whose major task is to calculate an
//individual’s Net Salary by getting the inputs of basic salary and benefits.
//Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salar

const nhifDedections = function (gross) {
    let nhifLevy = 0
    if (gross > 0 && gross <= 5999) {
        return nhifLevy = 150;
    } else if (gross >= 6000 && gross <= 7999) {
        return nhifLevy = 300;
    } else if (gross >= 8000 && gross <= 11999) {
        return nhifLevy = 400;
    } else if (gross >= 12000 && gross <= 14999) {
        return nhifLevy = 500;
    } else if (gross >= 15000 && gross <= 19999) {
        return nhifLevy = 600;
    } else if (gross >= 20000 && gross <= 24999) {
        return nhifLevy = 750;
    } else if (gross >= 25000 && gross <= 29999) {
        return nhifLevy = 850;
    } else if (gross >= 30000 && gross <= 34999) {
        return nhifLevy = 900;
    } else if (gross >= 35000 && gross <= 39999) {
        return nhifLevy = 950;
    } else if (gross >= 40000 && gross <= 44999) {
        return nhifLevy = 1000;
    } else if (gross >= 45000 && gross <= 49999) {
        return nhifLevy = 1100;
    } else if (gross >= 50000 && gross <= 59999) {
        let nhifLevy = 1200;
    } else if (gross >= 60000 && gross <= 69999) {
        return nhifLevy = 1300;
    } else if (gross >= 70000 && gross <= 79999) {
        return nhifLevy = 1400
    } else if (gross >= 80000 && gross <= 89999) {
        return nhifLevy = 1500
    } else if (gross >= 90000 && gross <= 99999) {
        return nhifLevy = 1600
    } else if (gross >= 100000) {
        return nhifLevy = 1700
    }

    return nhifLevy
}


const nssfDeductions = function(gross) {
    let nssf = 0
    if (gross > 0 && gross <= 4500){
        return nssf = 270;
    }else if (gross >= 6000 && gross <=17999){
        return nssf = 840
    }else if (gross >= 18000){
        return nssf = 1080
    }

    return nssf

}

function salaryCalculator(basic, benefits) {
    let gross = basic + benefits;
    let payeAmount = 0;
    let taxableIncome = gross -(nhifDedections(gross) + nssfDeductions(gross))
    if (gross > 0 && gross <= 24000) {
        payeAmount = taxableIncome * 0.1
    }else if (taxableIncome >= 24001 && taxableIncome <= 32333) {
        payeAmount = taxableIncome * 0.25
    }else if (gross > 32333) {
        payeAmount = taxableIncome * 0.30
    }
    return `Your gross salary is ${gross}/n Your payee is ${payeAmount}/n Your net salary is ${(gross - payeAmount)}/n Your nssf deductions were ${nssfDeductions(gross)}/n Your NHIF contribution were ${nhifDedections(gross)}`
}

salaryCalculator(577898,387898);