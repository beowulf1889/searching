describe('binarySearch', function () {
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 6;
    it('should return the index of the target element if it exists in the array', function () {
        const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
        expect(binarySearch(sortedArray, 11)).toEqual(5);
        expect(binarySearch(sortedArray, 1)).toEqual(0);
        expect(binarySearch(sortedArray, 21)).toEqual(10);
        expect(binarySearch(sortedArray, 7)).toEqual(3);
    });
    it('should return -1 if the target element does not exist in the array', function () {
        const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
        expect(binarySearch(sortedArray, 8)).toEqual(-1);
        expect(binarySearch(sortedArray, 0)).toEqual(-1);
        expect(binarySearch(sortedArray, 22)).toEqual(-1);
    });
    it('should handle an empty array', function () {
        const sortedArray = [];
        expect(binarySearch(sortedArray, 5)).toEqual(-1);
        expect(binarySearch(sortedArray, 0)).toEqual(-1);
        expect(binarySearch(sortedArray, 22)).toEqual(-1);
    });
    it('should handle an array with a single element', function () {
        const sortedArray = [7];
        expect(binarySearch(sortedArray, 7)).toEqual(0);
        expect(binarySearch(sortedArray, 3)).toEqual(-1);
    });
    it('should measure execution time for binary search', function () {
        const startTime = performance.now();
        binarySearch(sortedArray, target);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        expect(executionTime).toBeLessThan(10);
    });
});









