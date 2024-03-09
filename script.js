// >> Test
// document.write("Hello web from js.");

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// >> Ternary operater
// const age = 18;
// const candition = age >= 18 ? "yes" : "no";
// > if else candition when there is only one candition after ? if candition and after : else candition
// console.log(candition);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// >> function > arguments
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

// >> arrow function
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

// >> this keyword in arrow funciton
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

// >> this keyword in normal funciton
// > an object
// const obj = {
//     valuse: 10,
//     myf: function () {
//         console.log(this.valuse); // > access the object value
//     }
// }

// obj.myf();

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// >> High order function & Callback (use for log process or hive tasks)
// > High order funciton which means the function calls function as parameters
// function add(a, b, callBack) {
//     let result = a + b;
//     callBack(result); // > making callBack an function and giving the value of result as paramiter
// }

// add(5, 10, (val) => { console.log(val) }); // > have to give function as paramiter using arrow function

// add(10, 20, function (val) { // > in normal funtion
//     console.log(val);
// })

// // > you can also do like this for an example
// function adding(a, b, callBack) {
//     let result = a + b;
//     callBack(result);

//     return () => console.log(result);
// }

// const addition = adding(2, 3, () => { }); // in this case you did not call the callBack function you store the sum in addition and it make the function

// addition(); // > you pass the function in adding return thats why the addition variable becomes the function, you make your own function :> freaking cool

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// >> Arrays

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

// >> High order arrays


