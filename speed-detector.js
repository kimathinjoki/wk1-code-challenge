//Challenge 2: Speed Detector
//Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”.
//Otherwise, for every 5 km/s above the speed limit (70).
//it should give the driver one demerit point and print the total number of demerit points.
//For example, if the speed is 80, it should print: “Points: 2”.
//If the driver gets more than 12 points, the function should print: “License suspended”.

const prompt = require("prompt-sync")();


function speedDetector(){
    let speed = prompt('Please enter speed in Km: ')

    if(speed > 0 && speed <=70){
        return "Ok"
    }else if(speed>70){
        let exceedSpeed = (speed-70)/5
        if (exceedSpeed > 12){
            return "License suspended"
        }else{
            return `Points: ${Math.ceil(exceedSpeed)}`
        }
    }else{
        return "Please enter correct speed"
    }
}

console.log(speedDetector())
