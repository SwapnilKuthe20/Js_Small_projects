//  Array methods practice :::

// 1. shift : remove 1st element of an array

const sh = [12, 23, 45, 56, 67];
// console.log(sh.shift());

// 2. unshift : to add element in the starting of an array

const unsh = [12, 1, 34, 65, 43];
// console.log(unsh.unshift(20));          // length of an array
// console.log(unsh);
// console.log(unsh.unshift(20, 7));       // we can add multiple elements
// console.log(unsh);

// 3. push() : add element in the ending

const pu = [12, 55, 77, 82, 76];
// pu.push(12);
// console.log(pu);
// pu.push(20, 0, 7);                      // we can push multiple elements
// console.log(pu);

// 4. push() : remove element from the ending
const po = [12, 44, 56, 3, 67];
// po.pop();
// console.log(po);

// 5. indexOf() : tocheck the index of an element 

const ind = [34, 65, 77, 44, 26, 34, 77];
// console.log(ind.indexOf(34));
// return first index position of an element if number is repeated
// console.log(ind);

// 6. lastIndexOf() : returns last index position of an element

const last = [12, 12, 43, 55, 66, 33, 55];
// console.log(last.lastIndexOf(12));
// console.log(last.lastIndexOf(55));

// 7. forEach() : to itirate over array 

const each = [12, 23, 34, 45, 67];
// each.forEach((element, index) => {
//     console.log(element, index);
// })

// 8. join() : convert array into an string

const jo = [87, 56, 20, 7, 13];
// console.log(jo.join(" "));
// console.log(typeof jo.join(" "));       // string

// 9. filter() : to filter out element based on specific condition

const filt = [12, 13, 14, 15, 16];
// const newFilt = filt.filter((element) => {
//     return element % 2 === 0
// })
// console.log(newFilt);

// 10. reverse() : to reverse an array

const rev = [1, 2, 3, 4, 5, 6];
// rev.reverse();
// console.log(rev);

// 11. slice() : to slice the some elements from an array

const sli = [12, 23, 4, 5, 67, 88];
// console.log(sli.slice(2, 4));           // returns new array
// console.log(sli);                       // as it is

// console.log(sli.slice());       // default it take 0 as argument
// console.log(sli);


// 12. splice() : to remove , update, add an elements, it does not return new array

const spl = [12, 23, 45, 5, 67, 87, 7];

// spl.splice(2, 2, 20);
// console.log(spl);

// 13. map(): to iterate throgh array returns new aaray

// const ma = [12, 122, 34, 4, 56, 7, 77, 87];
// const newMA = ma.map((element, index) => {
//     return element;
// })
// console.log(newMA);

// 14. reduce() : to reduce array in single Element

// const redu = [12, 13, 14, 15];
// const newRedu = redu.reduce((accumulator, currentIndex) => {
//     return accumulator + currentIndex;
// }, 6)
// console.log(newRedu);

// const numbers = [10, 20, 30, 40];

// const result = numbers.reduce((accumulator, currentValue, currentIndex, array) => {
//     console.log(`accumulator: ${accumulator} Index: ${currentIndex}, Value: ${currentValue} array : ${array}`);
//     // return accumulator + currentValue;
// }, 0);

// console.log(result);

// 15. includes() : to check wether the element is include in array or not

const inc = [12, 23, 4, 5, 67, 65];
// console.log(inc.includes(20));          // false






const num = [11, 12, 13, 14, 15, 16];

let res = [];

// for (let i = 0; i < num.length; i++) {
//     // console.log(num[i]);
//     res.push(num[i] * 2);
// }
// console.log(res);

// ::: reverse an array :::

// for (let i = num.length - 1; i >= 0; i--) {
//     res.push(num[i]);
// }
// console.log(res);






