
# Title
Week1 code challenge.

# Description

1. Student Grade Generator
Prompts the user to input student marks.
The input should be between 0 and 100. Then output the correct grade:
A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40
Found in file netSalaryCalculator.js


2. Speed-Detector code

A program that takes as input the speed of a car e.g 80. If the speed is less than 70, it prints “Ok”.
Otherwise, for every 5 km/s above the speed limit (70) it gives the driver one demerit point and print the total number of demerit points.
For example, if the speed is 80, it prints: “Points: 2”.
If the driver gets more than 12 points, the function prints: “License suspended”.


3. Net-Salary Calculator code

A program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits.
Calculates the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary
The program takes in twp parameter: the basic salary and their total benefits.

## Installation
Git clone the repo to your local machine from:

https://github.com/kimathinjoki/wk1-code-challenge


# Project setup/running
Running the various files in the project requires node installed in your running enviroment.

 The netsalaryCalculator.js file is run by passing 'node netsalaryCalculator.js' in the VS terminal
 It asks for your basic salary and your total benefits and returns your Gross Salary, Net salary, PAYE, NHIF deduction with the the tax relief included and NSSF contributions as the output

 The speed-detector.js file runs by passing 'node speed-detector.js' in the VS terminal.
 It asks for a speed input and when called in the terminal using and outputs whether the speed is "OK" and for every 5km past 70 it returns points for every exceeding  5 killometers.

 The studentGradeGenerator.js file is ran by passing 'node studentGradeGenerator.js' in the terminal asks for an input of a student's score and returns a grade.

# Author
This project was contributed to by:
[KimathiNjoki]https://github.com/kimathinjoki/

# License
The project is licensed under ISC

