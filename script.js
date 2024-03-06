// >> Test
// document.write("Hello web from js.");

// >> Ternary operater
// const age = 18;
// const candition = age >= 18 ? "yes" : "no";
// > if else candition when there is only one candition after ? if candition and after : else candition
// console.log(candition);

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

// >> this keyword in normal funciton 
// > an object
const obj = {
    value: 10,
    myf: function(){
        
    }
}

// >> arrow function
// > for n number of arguments.
// > use "..." and any name you want for n numbers of arguments like "...num".
const sum = (...num) => {
    let ans = 0;
    for (i = 0; i < num.length; i++) {
        ans = ans + num[i];
    }
    return ans;
};

console.log(sum(5, 10, 20, 50));
