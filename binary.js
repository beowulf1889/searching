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
