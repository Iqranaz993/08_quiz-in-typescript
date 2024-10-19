#! /user/bin/env node

import inquirer from "inquirer";

const quiz : {
    question_1 : string;
    question_2 : string;
    question_3 : string;
    question_4 : string;
    question_5 : string;
} = await inquirer.prompt([
    {
        name : "question_1",
        type : "list",
        message : "Q1 : which operator is used for strick equality comparsion in typescript?",
        choices: ["a : ==" , "b : !=" , "c : ===" , "d : !=="]

     },
     {
    name : "question_2",
    type : "list",
    message : "Q2 : How do you perform a logical and operator in typescript?",
    choices: ["a : &&" , "b : &" , "c : ||" , "d :and"]

},
{
    name : "question_3",
    type : "list",
    message : "Q3 : How do you perform a logical or operator in typescript?",
    choices: ["a : |" , "b : &&" , "c : ||" , "d :or"]

},
{
    name : "question_4",
    type : "list",
    message : "Q4 : which keyword is used to declare a constant in typescript?",
    choices: ["a : constant" , "b : const" , "c : let" , "d :var"]

},
{
    name : "question_5",
    type : "list",
    message : "Q5 : which of these is a number type in typescript?",
    choices: ["a : 5" , "b :'hello'" , "c : true" , "d : '5'"]

}
])

let score: number = 0

switch (quiz.question_1){
    case "c : ===" :
        console.log("1. Correct answer!")
        ++score
        break;
        default : 
        console.log("1. incorrect answer!");
    }
    switch (quiz.question_2){
        case "a : &&" :
            console.log("2. Correct answer!")
            ++score
            break;
            default : 
            console.log("2. incorrect answer!");
        }
        switch (quiz.question_3){
            case "c : ||" :
                console.log("3. Correct answer!")
                ++score
                break;
                default : 
                console.log("3. incorrect answer!");
            }
            switch (quiz.question_4){
                case "b : const" :
                    console.log("4. Correct answer!")
                    ++score
                    break;
                    default : 
                    console.log("4. incorrect answer!");
                }
                switch (quiz.question_5){
                    case "a : 5" :
                        console.log("5. Correct answer!")
                        ++score
                        break;
                        default : 
                        console.log("5. incorrect answer!");
                    }