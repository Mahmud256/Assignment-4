function sortMaker(arr) {
    let array = 0;
    if (arr[0] < arr[1] && arr[0] >= 0 && arr[1] >= 0) {
        array = arr.reverse();

    }
    else if (arr[0] > arr[1]) {
        array = arr.sort();
        array = arr.reverse();

    }
    else if (arr[0] === arr[1]) {
        array = "equal";

    }
    else {
        array = "Invalid Input";
    }
    return array;
}
let arr = [2,3];
let result = sortMaker(arr);
//console.log(result);
