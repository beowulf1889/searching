
function linearSearch(sortedArray, value) {
    for (let i = 0;  i < sortedArray.length; i++ ) {
        if(typeof sortedArray[i] === 'number'){
            if (sortedArray[i] === value) { return i+1;}
        }else {
        if (sortedArray[i] === value) { return i; }
    }};
    return -1;
}