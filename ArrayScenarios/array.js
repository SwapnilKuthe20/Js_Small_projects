
// // 4. insert data into an array after every 3rd element

let everyThird = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

const newArray = (arr, ins) => {
    for (let i = 3; i <= arr.length; i += 4) {
        // console.log(arr.length, "...");          // increases

        arr.splice(i, 0, ins);
    }
    return arr;
}

let resultArr = newArray(everyThird, 7);
// console.log(resultArr, "Insrt after every 3 pos");







