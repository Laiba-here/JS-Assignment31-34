//        .... QUESTION 1....
// let currentDateTime = new Date();
//  document.getElementById("currentDateTime").innerHTML = currentDateTime;

//          .... QUESTION 2....
// function alertCurrentMonth() {
//     let currentDate = new Date();
//     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     let currentMonthIndex = currentDate.getMonth();
//     let currentMonthName = months[currentMonthIndex].toUpperCase();
//     alert("Current Month: " + currentMonthName);
// }

//          .... QUESTION 3....
// function alertCurrentDay() {
//     let currentDate = new Date();
//     let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     let currentDayIndex = currentDate.getDay();
//     let currentDayName = days[currentDayIndex];
//     alert("Today is " + currentDayName);
// }

//           .... QUESTION 4....
// function checkFunDay() {
//     let currentDate = new Date();
//     let currentDayIndex = currentDate.getDay();
//     if (currentDayIndex === 0 || currentDayIndex === 6) {
//         document.getElementById("result").innerHTML = "It's Fun Day!";
//     } else {
//         document.getElementById("result").innerHTML = "It's not Fun Day.";
//     }
// }

//           .... QUESTION 5....
// function checkDayOfMonth() {
//     let currentDate = new Date();
//     let currentDay = currentDate.getDate();
//     if (currentDay < 16) {
//         document.getElementById("result").innerHTML = "First fifteen days of the month";
//     } else {
//         document.getElementById("result").innerHTML = "Last days of the month";
//     }
// }

//          .... QUESTION 6 ....
// function calculateElapsedTime() {
//     let currentDate = new Date();
//     document.getElementById("current-date").innerHTML = "Current Date: " + currentDate;
//     let elapsedMilliseconds = currentDate.getTime();
//     let elapsedMinutes = elapsedMilliseconds / (1000 * 60);
//     document.getElementById("elapsed-milliseconds").innerHTML = "Elapsed milliseconds since January 1, 1970: " + elapsedMilliseconds;
//     document.getElementById("elapsed-minutes").innerHTML = "Elapsed minutes since January 1, 1970: " + elapsedMinutes;
// }

//          .... QUESTION 7 ....
// function checkTime() {
//     let currentDate = new Date();
//     let currentHour = currentDate.getHours();
//     if (currentHour < 12) {
//         alert("It's AM");
//     } else {
//         alert("It's PM");
//     }
// }

//          .... QUESTION 8 ....
// let laterDate = new Date(2020, 11, 31, 0, 0, 0);
//  document.getElementById("later-date").innerHTML = "Later Date: " + laterDate;

//          .... QUESTION 9 ....
// let ramadanStartDate = new Date(2015, 5, 18);
//         let currentDate = new Date();
//         let timeDifference = currentDate - ramadanStartDate;
//         let daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//         alert(daysPassed + " days have passed since 1st Ramadan, 2015");

//        .... QUESTION 10 .... 
// let startOf2015 = new Date(2015, 0, 1); 
//         let referenceDate = new Date("Sat Dec 05 2015 22:50:16 GMT+0500 (PKT)");
//         let timeDifference = referenceDate - startOf2015;
//         let secondsElapsed = Math.floor(timeDifference / 1000);
//         document.getElementById("result").innerHTML = 
//             secondsElapsed + " seconds have passed since the beginning of 2015.";

//             .... QUESTIN 11 ....
// let currentDate = new Date();
// let currentHours = currentDate.getHours();
// document.getElementById("original-date").innerHTML = 
//     "Current Date: " + currentDate + "<br>" +
//     "Current Hours: " + currentHours;
// currentDate.setHours(currentHours + 1);
// document.getElementById("modified-date").innerHTML = 
//     "1 hour ahead: " + currentDate;

//          .... QUESTION 12 .... 
// let currentDate = new Date();
//         let message = "Current date: " + currentDate + "<br>";
//         let hundredYearsBack = new Date(currentDate);
//         hundredYearsBack.setFullYear(currentDate.getFullYear() - 100);
//         message += "100 years back, it was: " + hundredYearsBack;
//         alert(message);

//           ..... QUESTION 13 ......
// var age = prompt("Please enter your age:");
//         var currentYear = new Date().getFullYear();
//         var birthYear = currentYear - age;
//         document.write("Your age is: " + age + "<br>");
//         document.write("Your birth year is: " + birthYear);