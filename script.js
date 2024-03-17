//* >> Test
// document.write("Hello web from js.");

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >> Ternary operater
// const age = 18;
// const candition = age >= 18 ? "yes" : "no";
// > if else candition when there is only one candition after ? if candition and after : else candition
// console.log(candition);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >> function > arguments
// function sumOfNum() {
//     console.log(arguments); // > this gives all args which gives in funciton calling
//     console.log(arguments[0]);
//     let ans = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         ans = ans + arguments[i];
//     }
//     return ans;
// }
// const sum = sumOfNum(10, 20, 30, 40, 50); // > 10, 20, 30, 40, 50 are taken by the function
// console.log(sum);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >> arrow function
// > for n number of arguments.
// > use "..." and any name you want for n numbers of arguments like "...num".
// const sum = (...num) => {
//     let ans = 0;
//     for (i = 0; i < num.length; i++) {
//         ans = ans + num[i];
//     }
//     return ans;
// };

// console.log(sum(5, 10, 20, 50));

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >> this keyword in arrow funciton
// > an object
// const value = 10;

// const obj = {
//     valuse2: 10,
//     myf: () => {
//         console.log(`${this.valuse}`); // > access the globle value
//         console.log(`${obj.valuse2}`); // > access the object value
//     }
// }

// obj.myf();

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >> this keyword in normal funciton
// > an object
// const obj = {
//     valuse: 10,
//     myf: function () {
//         console.log(this.valuse); // > access the object value
//     }
// }

// obj.myf();

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >> High order function & Callback (use for log process or hive tasks)
// > High order funciton which means the function calls function as parameters
// function add(a, b, callBack) {
//     let result = a + b;
//     callBack(result); // > making callBack an function and giving the value of result as paramiter
// }

// add(5, 10, (val) => { console.log(val) }); // > have to give function as paramiter using arrow function

// add(10, 20, function (val) { // > in normal funtion
//     console.log(val);
// })

// > you can also do like this for an example
// function adding(a, b, callBack) {
//     let result = a + b;
//     callBack(result);

//     return () => console.log(result);
// }

// const addition = adding(2, 3, () => { }); // in this case you did not call the callBack function you store the sum in addition and it make the function

// addition(); // > you pass the function in adding return thats why the addition variable becomes the function, you make your own function :> freaking cool

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >> Arrays
// const myArray = ["new1", 1, true, "👍"];
// console.log(myArray);

// myArray.reverse();
// console.log(myArray);

// console.log(myArray.length);

// myArray.push("raj");
// console.log(myArray);

// myArray.pop("raj");
// myArray.pop(myArray[4]);
// console.log(myArray);

// myArray[0] = "ram";
// console.log(myArray);

// console.log(myArray.indexOf("ram"));

// myArray.push({ name: "raj", age: "20" })
// console.log(myArray);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >> High order arrays
// const myArray = ["new1", 1, true, "👍"];
// const num = [1, 2, 3, 4, 5];

// > .forEach
// function print(val) {
//     console.log(val);
// }

// myArray.forEach(print); // > its like applying funciton on each element like loop.

// myArray.forEach((val) => { console.log(val) }); // > also write like this

// let newArray = num.forEach((val) => { return val * 2 }); // > for each does not give return value so its can not store the value like this

// > .map
// let newArray = num.map((val) => { return val * 2 }); // > map wrok like forEach funciton but its gives return value

// console.log(newArray);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >> DOM > Document Object Model
// > console.log() is actually window.console.log()

// > Document

// console.log(document); // > it gives all your index.html code in console

// console.log(document.title); // > like this you can print elemant from html file
// document.title = "JS";
// console.log(document.title);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >> deleting the elements with same class names
// const elements = document.getElementsByClassName("hello0");

// const elementsArray = Array.from(elements); // > convert into Array

// elementsArray.forEach(function (e) { // > runing foreach for every elemnt to remove
//     e.parentNode.removeChild(e);
// });

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >> preferred way for adding event listeners
// > if any other click event applied on same btn then both event will run
// const btnHello = document.getElementById("btnHello");
// const txtHello1 = document.getElementById("hello1");
// const txtHello2 = document.getElementById("hello2");
// const txtHello0 = document.getElementsByClassName("hello0");

// btnHello.addEventListener("click", () => {
//     // > because get element by class name returns collection of elements
//     for (let i = 0; i < txtHello0.length; i++) {
//         txtHello0[i].classList.add('bg-red');
//     }
//     // > id is unique it returns single element
//     txtHello1.classList.add("bg-blue");
//     txtHello2.classList.add("bg-blue");
// })

// txtHello1.addEventListener("click", () => {
//     txtHello1.remove();
// })

// console.log(document.querySelector("body").children);

//* >> creating new element with JS
// const btnHello = document.getElementById("btnHello");
// const newElements = document.getElementById("new-Elements");

// btnHello.addEventListener("click", () => {
//     let el = document.createElement('h1');

//     el.innerText = "RUSHI PANCHAL";

//     newElements.appendChild(el);
// })
