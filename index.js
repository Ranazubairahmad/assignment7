


// 1. Write a js program to find maximum between two numbers.

// var num1 = parseInt(prompt("enter first num"));
// var num2 = parseInt(prompt("enter second num"));

// if (num1==num2) {
//     console.log("numbers are equal",num1==num2);
// } 
// else {
//     if (num1 > num2) {
//         console.log("num1 maximum",num1);
//     } else {
//         console.log("num2 maximum",num2);
//     }
// }

    // -----------------------------------------------------------------

// 2. Write a js program to find maximum between three numbers.

// var number1 = parseInt(prompt("enter first num"));
// var number2 = parseInt(prompt("enter second num"));
// var number3 = parseInt(prompt("enter third num"));
// if (number1 == number2 && number1 ==  number3 ) {
//     console.log("numbers are equal",number1 == number2 && number1 ==  number3  );

// } 
// else if ( number1  > number2 &&  number1  > number3) {
//     console.log(" number1  is maximum", number1 );
// }
// else if ( number1  < number2 && number2 > number3) {
//     console.log("number2 is maximum",number2);
// }
// else {
//     console.log("number3 maximum",number3);
// }

// -------------------------------------------------------------------

// 3. Write a js program to check whether a number is negative, positive or zero.



// var number = parseInt(prompt("enter a num"));


// if (number==0) {
//     console.log("number are 0",number);
// }
// else{
//     if (number >= 0) {
//         console.log("number is positive",number);
//     } 
//     else {
//         console.log("number are negative",number);
//     }
// }

// ----------------------------------------------------------------------

// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.


// var numdivs = parseInt(prompt("enter number"));

// if (numdivs % 11 == 0 && numdivs % 5 ==0 ) {
//     console.log("this number is divisible 5 and 11",numdivs);
// }
// else{
//     console.log("this number is not divisible by 5 and 11",numdivs);
// }

// --------------------------------------------------------------------

// 5. Write a js program to check whether a number is even or odd.


// var evenodd = parseInt(prompt("enter a number"));


// if (evenodd%2 ==0) {
//     console.log("number are even",evenodd);
// }
// else{
//     console.log("number is odd",evenodd);
// }

// 6. Write a js program to check whether a year is leap year or not.

// ------------------------------------------------------------------

// var year = prompt("enter any year");

// if (year%4 == 0) {
//     console.log("this is a leap year",year);
// }
// else{
//     console.log("this is not leap year",year);
// }


// --------------------------------------------------------------------

// 7. Write a js program to check whether a character is alphabet or not.


// var character = prompt("enter any character");

// if (character == 'a' || character == 'A'|| character == 'b' || character == 'B'
// ||character == 'c' || character == 'C'||character == 'd' || character == 'D'
// ||character == 'e' || character == 'E'||character == 'f' || character == 'F') {
//     console.log("This is alphabet",character);
// }
//  and soo on.....
// else {
//     console.log("character is not alphabet");
// }

// -------------------------------------------------------------------------------


// 8. Write a js program to input any alphabet and check whether it is vowel or consonant.


// var alphabet = prompt("enter any alphabet");


// if (alphabet == 'a' || alphabet == 'A'||alphabet == 'e' || alphabet == 'E'
// || alphabet == 'i' || alphabet == 'I'||alphabet == 'o' || alphabet == 'O' 
// || alphabet == 'u' || alphabet == 'U') {
//     console.log("alphabet is vowel",alphabet);
// }
// else {
//     console.log("aphabet is constant",alphabet);
// }

// // --------------------------------------------------------------------------------


// 9. Write a js program to input any character and check whether it is alphabet, digit or special character.


// var checkchar = prompt('enter any character');


// if (checkchar == 'a' || checkchar == 'A'||checkchar == 'b' || checkchar == 'B'
// || checkchar == 'c' || checkchar == 'C' || checkchar == 'd' || checkchar == 'D' 
// || checkchar == 'e' || checkchar == 'E') {
    
//     console.log('chracter is alphabet',checkchar);
// }
// // soo on

// else if (checkchar == '0' || checkchar == '1'||checkchar == '2' || checkchar == '3'
// || checkchar == '4' || checkchar == '5' || checkchar == '6' || checkchar == '7' 
// || checkchar == '8' || checkchar == '9') {
    
//     console.log('chracter is digit',checkchar);
// }
// // soo on


// else if (checkchar == '$' || checkchar == '%'||checkchar == '@' || checkchar =='#'
// || checkchar == '*' || checkchar == '&' || checkchar == '+' || checkchar == '-' 
// || checkchar == '/' || checkchar == '^' || checkchar == '(' || checkchar == ')'
// ||checkchar == '='  || checkchar == '<'
// || checkchar == '>' || checkchar == '!' || checkchar == ';' || checkchar == ':' 
// || checkchar == '~' || checkchar == '?' ||  checkchar == '|') {
    
//     console.log('chracter is special character',checkchar);
// }
// else {
//     console.log('Not a digit,alphabet,special character',checkchar);
// }

// -----------------------------------------------------------------------


// 10. Write a js program to check whether a character is uppercase or lowercase alphabet.


// var char = prompt('enter alphabet');


// if (char == char.toUpperCase()) {
//     console.log("upercase alphabet",char);
// }
// else if (char == char.toLowerCase()) {
//     console.log("lowercase alphabet",char);
// }
// else{
//     console.log('not a alphabet',char);
// }

// -------------------------------------------------------------------------

// 11. Write a js program to input week number and print week day.

// var weeknum = prompt('enter week number');

// switch (weeknum) {
//     case '1':
// console.log('today is monday',weeknum);
//  break;
//  case '2':
//  console.log('today is tuesday',weeknum);
// break;
// case '3':
// console.log('today is wednesday',weeknum);
//  break;
//  case '4':
// console.log('today is thursday',weeknum);
//  break;
//  case '5':
//  console.log('today is friday',weeknum);
//  break;
//  case '6':
//  console.log('today is saturday',weeknum);
// break;
// case '7':
// console.log('today is sunday',weeknum);
// break;
                        
//     default:
//         console.log('not a week number');
//         break;
// }


// --------------------------------------------------------------------------


// 12. Write a js program to input month number and print number of days in that month.


// var monthnum = prompt('enter month number');

// if (monthnum == 1 || monthnum == 3 || monthnum == 5 || monthnum == 7
//     || monthnum == 8 || monthnum == 10 || monthnum == 12 ) {
    
//         console.log('31 days in that month number =',monthnum);
// }
// else if (monthnum == 4 || monthnum == 6 || monthnum == 9 || monthnum == 11) {
//     console.log('30 days in that month number =',monthnum);
// }
// else if (monthnum == 2) {
//     console.log('28 days in month but after every 4 year change and 29 days in moth number = ',monthnum);
// }
// else{
//     console.log('not a month num',monthnum);
// }

// --------------------------------------------------------------------


// 13. Write a js program to count total number of notes in given amount.

// 14. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

// var phy = prompt("enter your physics num");
// var chem = prompt("enter your chemistry num");
// var bio = prompt("enter your Biology num");
// var math = prompt("enter your mathematics num");
// var comp = prompt("enter your computer num");

// var total = phy+chem+bio+math+comp;

// var percentage = (total)/5.0;

// if (percentage >= 90) {
//     console.log('grade A',percentage);
// }