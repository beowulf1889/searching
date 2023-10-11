let sortedArray = [
   
]
let target = [

]
let result = linearSearch(sortedArray, target);

console.log(result);




function linearSearch(sortedArray, value) {
    for (let i = 0;  i < sortedArray.length; i++ ) {
        if (sortedArray[i] == value) { return i; }




    }

    return "NO";
}