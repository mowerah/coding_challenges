// write a traditional function that multiplies 2 numbers and returns the value

// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
// }
// console.log(multiply(5,3))


// write for loop that prints your name 10 times

// for (let i=0; i<10; i++) {
//     console.log("Mohamed");
// }

//while loop that prints your surname 15 times

// write a do...while that prints your surname 100 times
// var i = 0;
// do {
//     console.log("Mohamed...");
//     i++;
// }
// while(i<2)

// write an infinite loop using a while loop
// while (true) {
//     console.log("hello...")
// }

// use if/else if chain to check the day of the week and print "it is work time" for monday, tuesday "it is school time", for friday "it is off day"
// let day = "Wednesday"
// if (day == "Monday") {
//     console.log("it is work time")
    
// } else if (day == "Tuesday") {
//     console.log("it is School time")    
// } 
// else {
//     console.log("it is off time")
// }

// convert the if/else if to switch statement

switch (day="Monday") {
    case "Monday":
        console.log("it is work time.. switch")
        break;
    case "Tuesday":
        console.log("it is work time.. switch")
        break;

    default:
        console.log("it is off time.. switch")
        break;
}

//write an infinite for loop
// for (;;) {
//     console.log("hello..")
// }

//write array of 10 elements of string(for example 10 students)
// let students = ["John", "Layland", "Ali", "Bushra", "Ahmed", "Mohamed"]
// console.log(students);

//write a for loop that iterates through each element and prints each element
// for (let i =0; i<students.length; i++){
//     console.log(students[i]);

// }

//Name a few  functions that come with arrays that allow you to iterate(loop through) through the elements
//students.forEach()
//students.map()
//students.filter()
//students.reduce()

//implement forEach function that prints all the elements of the array below
// students.forEach(
//     function(value, index) {
//         console.log("the lement is " + value + " and its index is " + index);
//     }

// )

//arrow functions
//switch, maps, sets

// conver the tradional function to an arrow function
// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
// }
// console.log(multiply(5,3))

// let multiply = (num1, num2) => num1 * num2;
// console.log(multiply(5,3))