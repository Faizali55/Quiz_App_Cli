#! usr/bin/env node
import inquirer from "inquirer";
console.log("\n<<<<< Wellcome To The FaizCode Quiz-Project >>>>>\n");
console.log("Each Question Of Is 5 Marks\n");
let marks = 0;
let userInput = await inquirer.prompt([
    {
        name: "question1",
        type: "list",
        message: "1.What Is The National Flower Of Pakistan?",
        choices: ["Rose", "Jasmine", "Tulip", "Chambeli"],
    },
    {
        name: "question2",
        type: "list",
        message: "2.Which Pakistani City Is Known As The 'City Of Lights'?",
        choices: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
    },
    {
        name: "question3",
        type: "list",
        message: "3.Who Was The First Prime Minister Of Pakistan?",
        choices: [
            "Liaquat Ali Khan",
            "Muhammad Ali Jinnah",
            "Sikander Mirza",
            "Zulfikar Ali Bhutto",
        ],
    },
    {
        name: "question4",
        type: "list",
        message: "4.What Is The Highest Mountain Peak In Pakistan?",
        choices: ["Nanga Parbat", "Rakaposhi", "Tirich Mir", "K2"],
    },
    {
        name: "question5",
        type: "list",
        message: "5.Which River Forms The Border Between Pakistan And India?",
        choices: ["Chenab", "Indus", "Ravi", "Sutlej"],
    },
    {
        name: "question6",
        type: "list",
        message: "6.Which City Is The Capital Of Pakistan?",
        choices: ["Islamabad", "Karachi", "Lahore", "Quetta"],
    },
    {
        name: "question7",
        type: "list",
        message: "7.What Is The Name Of The Largest Province In Pakistan By Land Area?",
        choices: ["Punjab", "Sindh", "Balochistan", "Khyber Pakhtunkhwa"],
    },
    {
        name: "question8",
        type: "list",
        message: "8.Which Pakistani Scientist Won The Nobel Prize In Physics In 1979?",
        choices: [
            "Dr.Abdul Qadeer",
            "Dr.Abdus Salam",
            "Dr.Allama Iqbal",
            "Dr.Ishfaq Ahmed",
        ],
    },
    {
        name: "question9",
        type: "list",
        message: "9.What Is The Name Of the Pakistan Military's Main Battle Tank?",
        choices: ["T-80UD", "M47 Patton", "Type 85", "Al-Khalid"],
    },
    {
        name: "question10",
        type: "list",
        message: "10.What Is The Name Of The Pakistan Military's Main Naval Base?",
        choices: [
            "PNS Mehran",
            "Lahore Naval Base",
            "Islamabad Naval Base",
            "Karachi Naval Base",
        ],
    },
]);
let { question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, } = userInput;
let correctOptions = [
    "Jasmine",
    "Karachi",
    "Liaquat Ali Khan",
    "K2",
    "Indus",
    "Islamabad",
    "Balochistan",
    "Dr.Abdus Salam",
    "Al-Khalid",
    "Karachi Naval Base",
];
if (question1 === "jasmine")
    marks += 5;
if (question1 === "Karachi")
    marks += 5;
if (question1 === "Liaquat Ali Khan")
    marks += 5;
if (question1 === "K2")
    marks += 5;
if (question1 === "Indus")
    marks += 5;
if (question1 === "Islamabad")
    marks += 5;
if (question1 === "Balochistan")
    marks += 5;
if (question1 === "Dr.Abdus Salam")
    marks += 5;
if (question1 === "Al-Khalid")
    marks += 5;
if (question1 === "Karachi Naval Base")
    marks += 5;
console.log(marks);
function myAnswer() {
    console.log(`\nCorrect Options`, correctOptions);
    if (marks == 50) {
        console.log(`\nCongratulation! You Got Full ${marks} Marks.`);
    }
    else if (marks > 0) {
        console.log(`\nYou Got ${marks} Marks Out Of 50.`);
    }
    else {
        console.log(`\nUnfortunately! You Got ${marks} Marks!`);
    }
}
myAnswer();
