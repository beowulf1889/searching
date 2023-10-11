/*let randomNums = [1, 3, 4, 7, 12, 14, 15, 17, 19];

let targetNum = 12;

let startIndex = 0;
let endIndex = randomNums.length -1;
let midpoint = Math.floor((startIndex + endIndex) / 2);

while(randomNums[midpoint] !== targetNum){
    if(targetNum < randomNums[midpoint]){
        endIndex = midpoint -1;
    } else if(targetNum > randomNums[midpoint]){
        startIndex = midpoint + 1;
    }
    midpoint = Math.floor((startIndex + endIndex) / 2);
}

if(randomNums[midpoint] === targetNum){
    console.log(`${targetNum} can be found at index ${midpoint} in the randomNums array`);
}*/


function binarySearch(sortedArray, target) {
    const n = sortedArray.length;
    let step = Math.floor(Math.sqrt(n));
    let prev = 0;

    while (sortedArray[Math.min(step, n) - 1] < target) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) {
            return -1; // Element not found
        }
    }

    while (sortedArray[prev] < target) {
        prev++;
        if (prev === Math.min(step, n)) {
            return -1; // Element not found
        }
    }

    if (sortedArray[prev] === target) {
        return prev; // Element found at index prev
    }

    return -1; // Element not found
}

// Example usage:
//const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
//const x = 11;
const result = binarySearch(sortedArray, target);

if (result !== -1) {
    console.log(`Element ${target} found at index ${result}`);
} else {
    console.log(`Element ${target} not found in the array.`);
}
