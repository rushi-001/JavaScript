//* >>> Test
// document.write("Hello web from js.");

//? ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >>> Ternary operater
// const age = 18;
// const candition = age >= 18 ? "yes" : "no";
//* > if else candition when there is only one candition after ? if candition and after : else candition
// console.log(candition);

//? ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >>> function > arguments
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

//? ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >>> arrow function
//* > for n number of arguments.
//* > use "..." and any name you want for n numbers of arguments like "...num".
// const sum = (...num) => {
//     let ans = 0;
//     for (i = 0; i < num.length; i++) {
//         ans = ans + num[i];
//     }
//     return ans;
// };

// console.log(sum(5, 10, 20, 50));

//? ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >>> this keyword in arrow funciton
//* > an object
// const value = 10;

// const obj = {
//     valuse2: 10,
//     myf: () => {
//         console.log(`${this.valuse}`); // > access the globle value
//         console.log(`${obj.valuse2}`); // > access the object value
//     }
// }

// obj.myf();

//? ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >>> this keyword in normal funciton
//* > an object
// const obj = {
//     valuse: 10,
//     myf: function () {
//         console.log(this.valuse); // > access the object value
//     }
// }

// obj.myf();

//? ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >>> High order function & Callback (use for log process or hive tasks)
//* > High order funciton which means the function calls function as parameters
// function add(a, b, callBack) {
//     let result = a + b;
//     callBack(result); // > making callBack an function and giving the value of result as paramiter
// }

// add(5, 10, (val) => { console.log(val) }); // > have to give function as paramiter using arrow function

// add(10, 20, function (val) { // > in normal funtion
//     console.log(val);
// })

//* > you can also do like this for an example
// function adding(a, b, callBack) {
//     let result = a + b;
//     callBack(result);

//     return () => console.log(result);
// }

// const addition = adding(2, 3, () => { }); // in this case you did not call the callBack function you store the sum in addition and it make the function

// addition(); // > you pass the function in adding return thats why the addition variable becomes the function, you make your own function :> freaking cool

//? ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >>> Listing the High order functions
//* > forEach(): Iterates over each element in the array and executes a callback function for each element. [> array.forEach((el) => { "--task--" });]
//* > map(): Creates a new array with the results of calling a provided function on every element in the array.
//* > filter(): Creates a new array with elements that pass the test implemented by the provided function.
//* > reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
//* > find(): Returns the first element in the array that satisfies the provided testing function.
//* > some(): Checks if at least one element in the array passes the test implemented by the provided function.
//* > every(): Checks if all elements in the array pass the test implemented by the provided function.


//? ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >>> Arrays
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

//? ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >>> High order arrays
// const myArray = ["new1", 1, true, "👍"];
// const num = [1, 2, 3, 4, 5];

//* > .forEach
// function print(val) {
//     console.log(val);
// }

// myArray.forEach(print); // > its like applying funciton on each element like loop.

// myArray.forEach((val) => { console.log(val) }); // > also write like this

// let newArray = num.forEach((val) => { return val * 2 }); // > for each does not give return value so its can not store the value like this

//* > .map
// let newArray = num.map((val) => { return val * 2 }); // > map wrok like forEach funciton but its gives return value

// console.log(newArray);

//? ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >>> DOM > Document Object Model
//* > console.log() is actually window.console.log()

//* > Document

// console.log(document); // > it gives all your index.html code in console

// console.log(document.title); // > like this you can print elemant from html file
// document.title = "JS";
// console.log(document.title);

//? ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >>> deleting the elements with same class names
// const elements = document.getElementsByClassName("hello0");

// const elementsArray = Array.from(elements); // > convert into Array

// elementsArray.forEach(function (e) { // > runing foreach for every elemnt to remove
//     e.parentNode.removeChild(e);
// });

//? ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >>> preferred way for adding event listeners
//* > if any other click event applied on same btn then both event will run
// const btnHello = document.getElementById("btnHello");
// const txtHello1 = document.getElementById("hello1");
// const txtHello2 = document.getElementById("hello2");
// const txtHello0 = document.getElementsByClassName("hello0");

// btnHello.addEventListener("click", () => {
//*     // > because get element by class name returns collection of elements
//     for (let i = 0; i < txtHello0.length; i++) {
//         txtHello0[i].classList.add('bg-red');
//     }
//*    // > id is unique it returns single element
//     txtHello1.classList.add("bg-blue");
//     txtHello2.classList.add("bg-blue");
// })

// txtHello1.addEventListener("click", () => {
//     txtHello1.remove();
// })

// console.log(document.querySelector("body").children);

//? ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >>> creating new element with JS
// const btnHello = document.getElementById("btnHello");
// const newElements = document.getElementById("new-Elements");

// btnHello.addEventListener("click", () => {
//     let el = document.createElement('h1');

//     el.innerText = "RUSHI PANCHAL";

//     newElements.appendChild(el);
// })

//? ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >>> Promises
//* > there is Sync Tasks and there is ASync Tasks
//* > Sync Tasks Ex.

// const a = 10;
// const b = 20;

// console.log(a + b);

//* > this is simple Sync task

//* > Async Tasks Ex.
//* > like facthing data from API which need some time & run after the data arrives

// let output = fetch("https://api.publicapis.org/entries");
// console.log(output);

//* > this is simple Async task
//* > this is not an right way to write, write with in function

// const a = 10;
// const b = 20;

// async function getData() {
//     let APIoutput = await fetch("https://api.publicapis.org/entries");
//     console.log(APIoutput);
//     console.log(APIoutput.json);
// }
// getData();
// console.log(a + b); //* > sum perform first and when data arrives it prints

//* > `async`: what this keyword do is it tells the computer that its async task and did not wait for the task to parform
//* > `await`: its important, you can only use this keyword in async tasks, what this keyword do is it tells that this is the task which you did not to wait

//? ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >>> string interpolation
//* > to add variables in URL or similar you can use "`--URL OR String--`" and in the place of variable use ${--variable--}

//? ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >>> local storage

// const btn = document.getElementById("btnHello");
// const input = document.getElementById("input-data");
// const userName = document.getElementById("user-name");

// btn.addEventListener("click", () => {
//     let data = input.value;
//     localStorage.setItem("name", data);
//     //* first in setItem add --key-- which is important for geting data from local storage and then --data--
//     location.reload(); // location mean your current page or URL
// })

// window.addEventListener("load", () => {
//     data = window.localStorage.getItem('name'); // geting data form --key-- value which is --name--
//     userName.innerText = data;
// })

//? ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >>> users corent location fecthing

// const btn = document.getElementById("btnHello");

// btn.addEventListener("click", () => {
//     navigator.geolocation.getCurrentPosition((loc) => console.log(loc), () => console.log("error"))
// })

//* > there is an --navigator-- built in function which gives us location of the user

//? ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >>> Clock / setTimeout / setInterval

// const btn = document.getElementById("btnHello");

// const clock = () => {
//     let time = new Date();
//     let newTime = `${time.getHours()}: ${time.getMinutes()}: ${time.getSeconds()}`;
//     document.getElementById("time").innerText = newTime;
// }
// clock();
// setTimeout(clock, 1000); //* > it runs only ones
// setInterval(clock, 1000); //* > it runs in every 1 secancd

//? ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//? ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//? ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >>> Closures

//* > this is an simple example of closures (NOTE: its like componnets in React.JS)
// function fun() {
//     const name = "raj";

//     function myName2() {
//         console.log(name);
//     }

//     return myName2;
// }

// fun();

//* > Ex. 2

// const btnSize10 = document.getElementById("btn-size-10")
// const btnSize20 = document.getElementById("btn-size-20")
// const btnSize30 = document.getElementById("btn-size-30")
// const btnSize60 = document.getElementById("btn-size-60")
// const txt = document.getElementById("title")

// function reSize(size) {
//     let setSize = () => {
//         txt.style.fontSize = `${size}px`
//     }
//     return setSize;
// }

// const size10 = reSize(10);
// const size20 = reSize(20);
// const size30 = reSize(30);
// const size60 = reSize(60);

// btnSize10.addEventListener("click", size10)

// btnSize20.addEventListener("click", size20)

// btnSize30.addEventListener("click", size30)

// btnSize60.addEventListener("click", size60)

//* >> Important Ex.3

// const atm = function (initalBalance) {
//     let balence = initalBalance;
//     function withdraw(amt) {
//         if (amt > balence) {
//             return "ha ha ha ha poor man";
//         } else {
//             balence -= amt;
//             return balence
//         }
//     }
//     return { withdraw }; //* > if we want to return function the use `{ }` for that
// }

// //* > we cant access balence diractly because its closures or its private variable
// console.log(Rushi);

// const Rushi = atm(10000000000);
// console.log(Rushi.withdraw(100));
// console.log(Rushi.withdraw(10000));
// console.log(Rushi.withdraw(10454000));
// console.log(Rushi.withdraw(10454000));
// console.log(Rushi.withdraw(145400000000));

//? ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >>> currying

//* > simple example of currying

// function add(a) {
//     return function (b) {
//         return function (c) {
//             console.log(a + b + c);
//         }
//     }
// }

// add(2)(3)(4);

//* > in advance version of coding we write this as

// const add = (a) => (b) => (c) => console.log(a + b + c);

// add(2)(3)(4);

//* > other Ex.

// function myMail(to) {
//     return function (subject) {
//         return function (body) {
//             return console.log(`This email is for ${to} regarding about ${subject}: So, ${body}`);
//         }
//     }
// }

// let dev1 = myMail("rushi0@gmail.com");
// let dev2 = dev1("Keyboard");
// dev2("Hy your new keyboard is ready when are you going to pickup");

//* > in advance version of coding we write this as

// const myMail = (to) => (subject) => (body) => console.log(`This email is for ${to} regarding about ${subject}: So, ${body}`);

// let dev1 = myMail("rushi0@gmail.com");
// let dev2 = dev1("Keyboard");
// dev2("Hy your new keyboard is ready when are you going to pickup");

//? ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >>> Composition
//* > if there are number of tasks and that performs one after another in that case you can use this method

//* > Like as an example

// const add = (a, b) => {
//     return a + b;
// }
// const square = (val) => {
//     return val * val;
// }

// const newFun = (a, b) => {
//     return square(add(a, b))
// }

// console.log(newFun(2, 1))

//* > but in real life you have multiple function which can not be write or maintain like this so then you can use this composition

//* > Example for composition function

// const add = (a, b) => {
//     return a + b;
// }
// const square = (val) => {
//     return val * val;
// }
// const mult = (a, b) => {
//     return a * b;
// }

// const compoFun = (fun1, fun2) => {
//     return (a, b) => {
//         return fun2(fun1(a, b));
//     }
// }

//* > in modern way
// const compoFunModern = (fun1, fun2) => (a, b) => fun2(fun1(a, b));

// const task = compoFun(add, square);
// const task2 = compoFunModern(mult, square);

// console.log(task(2, 1));
// console.log(task2(2, 1));

//* > what if you dont know how many function you need to compose in that case

//* > values are taking inputs as array
// const add = (args) => {
//     return args[0] + args[1];
// }
// const square = (val) => {
//     return val * val;
// }
// const mult = (a, b) => {
//     return a * b;
// }

// const composition = (...funs) => {
//     return (...value) => {
//         return funs.reduce((a, b) => b(a), value);
//         //* > IMPORTANT `funs.reduce((a, b) => {--code--})` this will tack first two functions similarly you can tack first three, etc...
//         //* > values are taking inputs as array
//     }
// }

// const task = composition(add, square)
// console.log(task(1, 2))

//? ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >>> IIFE (Immediately Invoked Function Expression)

// (function () {
//     console.log("its iife");
// })();

// (function (a, b) {
//     console.log(a + b);
// })(2, 1);

// const fun = (() => console.log("hello"))();

//* you can use async function with this so its better to use this

// const data = (async () => await fetch(`--URL--`))();

//? ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >>> Iterators / Generator Function / Yield

//* >> Iterators
//* > provides a way to access elements sequentially within a collection or iterable object

//* >> build in iterator

// for (const val of [1, 2, 3, 4, 5]) {
//     console.log(val);
// }

//* > You can create iterator but it requaire careful coding and you can not use it like build in iterators like in for loops
//* > You can use generator function for that

//* >> Yield
//* > yield keyword is used within generator functions to pause execution and yield a value to the caller

// function* count() { //* > generator function
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
// }

// const num = count();

// for (const n of num) {
//     console.log(n);
// }

//* > Generator function

// function* makeMyIterator(start, end, steps) {
//     for (let i = start; i <= end; i += steps) {
//         yield i;
//     }
// }

// const myIterator = makeMyIterator(1, 10, 1);

// for (const num of myIterator) {
//     console.log(num);
// }

//* > Other ex.

// function* makeMyIterator(start, end, steps) {
//     for (let i = start; i <= end; i += steps) {
//         yield i;
//     }
// }

// const myIterator = makeMyIterator(1, 10, 1);


// const btn = document.getElementById("my-btn")

// btn.addEventListener("click", () => {
//     btn.innerText = myIterator.next().value;
// })

//? ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* >>> Promisificaion

//* > old school code without promisies

// function loadScript(src, callBack){
//     const script = document.createElement("script");
//     script.src = src;
//     script.onload = () => callBack(null, script) //* in callbacks the first argument is error
//     script.onerror = () => callBack(new Error("error!"));
    
//     document.head.appendChild(script);
// }

// loadScript("test.js", (err, script) => {
//     if(err){
//         console.log(err);
//     } else{
//         console.log("script loaded");
//     }
// })

//* > canvert function in promisies

function promisify(fun){
    return function(...args){
        return new Promise((resolve, reject) => {
            fun(...args, (err, result) => {
                if(err){
                    return reject(err);
                }else{
                    return resolve(result);
                }
            })
        })
    }
}

function loadScript(src, callBack){
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => callBack(null, script) //* in callbacks the first argument is error
    script.onerror = () => callBack(new Error("error!"));
    
    document.head.appendChild(script);
}

const loadScriptNew = promisify(loadScript);

(async () => {
    try{
        const result = await loadScriptNew("test.js");
    }catch(error){
        console.log(error);
    }
})();