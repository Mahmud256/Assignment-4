function cubeNumber(number) {
    let cube = number;
    if (typeof cube === 'number' && cube > 0) {
        let result = Math.pow(cube, 3);
        return result;
    }

    else {
        result = 'Please provide a positive number input.';
        return result;
    }
}

let number = 4;
let final_result = cubeNumber(number);
//console.log(final_result);