//write a for loop that prints your name 10 times without using codesnippets

// for (let i=0; i<10; i++) {
//     console.log("Mohamed")
// }

//write a while loop that prints your name 5 times
// let i =0;
// while (i<5) {
//     console.log("Mohamed")
//     i++;
// }

//write a do while loop that doesn't print anything but put a console log(I am "I am in the loop")
// let i=0;
// do {
//     console.log("I am in the loop")
//     i++;
// }
// while (false)

//write an array that holds 10 names of your friends and family
let friendsAndFamily = ["Mohamed", "Ali", "Abdi", "Ifrah", "Jama", "Farah", "Maria", "Muna", "Xawa", "Fartun"]

//how many iterations functions that come with arrays designed to loop through the elements of an array--->anything that takes a call back function
// friendsAndFamily.forEach()
// friendsAndFamily.filter()
// friendsAndFamily.map()
// friendsAndFamily.every()
// friendsAndFamily.reduce()

//print every element in the friendsAndFamily array using forEach function, and concat or put hello in front

// friendsAndFamily.forEach(
//     function (name) {
//         console.log("Hi " + name)
//     }
// )

// function sayMyName(name) {
//     console.log("Hi " + name)
// }
// sayMyName("Waryaa")

//convert the functions to arrow function
friendsAndFamily.forEach(name => console.log("Hi " + name)
    )
