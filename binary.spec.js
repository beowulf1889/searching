// describe('Search Algorithms', function () {
//     const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     const target = 6;
//     const unSorted = [
//         "Apple",
//         "Banana",
//         "Cherry",
//         "Date",
//         "Fig",
//         "Grape",
//         "Honeydew",
//         "Kiwi",
//         "Lemon",
//         "Mango"
//       ];
    //   it('should find the target with binary search', function() {
    //     const result = binarySearch(sortedArray, target);
    //     expect(result).toBe(6);
    // });

    // it('should find the target1 with binary search; searching through a sorted list of strings', function() {
    //     const result = binarySearch(sortedArray, target1);
    //     expect(result).toBe(6); // Change this to match the actual result
    // });
//     describe('binaryJumpSearch', function () {
//         it('should return the index of the target element if it exists in the array', function () {
//             const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
//             expect(binaryJumpSearch(arr, 11)).toEqual(5);
//             expect(binaryJumpSearch(arr, 1)).toEqual(0);
//             expect(binaryJumpSearch(arr, 21)).toEqual(10);
//             expect(binaryJumpSearch(arr, 7)).toEqual(3);
//         });
//         it('should return -1 if the target element does not exist in the array', function () {
//             const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
//             expect(binaryJumpSearch(arr, 8)).toEqual(-1);
//             expect(binaryJumpSearch(arr, 0)).toEqual(-1);
//             expect(binaryJumpSearch(arr, 22)).toEqual(-1);
//         });
//         it('should handle an empty array', function () {
//             const arr = [];
//             expect(binaryJumpSearch(arr, 5)).toEqual(-1);
//         });
//         it('should handle an array with a single element', function () {
//             const arr = [7];
//             expect(binaryJumpSearch(arr, 7)).toEqual(0);
//             expect(binaryJumpSearch(arr, 3)).toEqual(-1);
//         });
//     });

//     it('should measure execution time for binary search', function () {
//         const startTime = performance.now();
//         binarySearch(sortedArray, target);
//         const endTime = performance.now();
//         const executionTime = endTime - startTime;

//         expect(executionTime).toBeLessThan(10);
//     });
// });
describe('binarySearch', function () {
    // it('should return the index of the target element if it exists in the array', function () {
    //     const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
    //     expect(binarySearch(sortedArray, 11)).toEqual(5);
    //     expect(binarySearch(sortedArray, 1)).toEqual(0);
    //     expect(binarySearch(sortedArray, 21)).toEqual(10);
    //     expect(binarySearch(sortedArray, 7)).toEqual(3);
    // });
    // it('should return -1 if the target element does not exist in the array', function () {
    //     const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
    //     expect(binarySearch(sortedArray, 8)).toEqual(-1);
    //     expect(binarySearch(sortedArray, 0)).toEqual(-1);
    //     expect(binarySearch(sortedArray, 22)).toEqual(-1);
    // });
    // it('should handle an empty array', function () {
    //     const sortedArray = [];
    //     expect(binaryJumpSearch(sortedArray, 5)).toEqual(-1);
    // });
    // it('should handle an array with a single element', function () {
    //     const sortedArray = [7];
    //     expect(binarySearch(sortedArray, 7)).toEqual(0);
    //     expect(binarySearch(sortedArray, 3)).toEqual(-1);
    // });
    it('should measure execution time for binary search', function () {
        const startTime = performance.now();
        binarySearch(sortedArray, target);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        expect(executionTime).toBeLessThan(10);
    });
});