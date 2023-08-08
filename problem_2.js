function matchFinder(string1, string2) {

    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        let invalid = 'Please provide two string input.';
        return invalid;
    }

    else if (string1.includes(string2)) {
        return true;
    } 
    else {
        return false;
    }
}

let string1 = "John Doe";
let string2 = "ohn";


const result = matchFinder(string1, string2);
//console.log(result);
