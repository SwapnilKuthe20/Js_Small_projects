//// Multiple ways to print all array 

const mulWayPrint = [12, 13, 13, 14, 15, 17];

//// 1 : for loop ::

for (i = 0; i < mulWayPrint.length; i++) {
    // console.log(mulWayPrint[i]);
}

//// 2 : for of ::
for (item of mulWayPrint) {
    // console.log(item, "... for Of");
}

//// 3 : map() ::
mulWayPrint.map((ele, ind) => {
    // console.log(ele, "..map");
})

//// 4 : for in ::

for (ele in mulWayPrint) {
    // console.log(mulWayPrint[ele], "...for in");
}

//// 5 : while ::

while (mulWayPrint.length) {
    // console.log(mulWayPrint[]);

}
// ---------------------------------------------------------------

// // Scenario2 : avg and total ::

const avgTotal = [2, 3, 4, 5, 6];

const totalAry = avgTotal.reduce((acc, curr) => {
    console.log(acc , curr);

})

console.log(totalAry, 'total');

