describe('Search Algorithms', function () {
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 6;
    const unSorted = [
        "Apple",
        "Banana",
        "Cherry",
        "Date",
        "Fig",
        "Grape",
        "Honeydew",
        "Kiwi",
        "Lemon",
        "Mango"
      ];
      it('should find the target with binary search', function() {
        const result = binarySearch(sortedArray, target);
        expect(result).toBe(6);
    });

    it('should find the target1 with binary search; searching through a sorted list of strings', function() {
        const result = binarySearch(sortedArray, target1);
        expect(result).toBe(6); // Change this to match the actual result
    });

    it('should measure execution time for binary search', function () {
        const startTime = performance.now();
        binarySearch(sortedArray, target);
        const endTime = performance.now();
        const executionTime = endTime - startTime;

        expect(executionTime).toBeLessThan(10);
    });
});
  