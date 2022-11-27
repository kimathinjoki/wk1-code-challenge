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