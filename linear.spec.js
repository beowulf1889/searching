
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
    const target1 = "Honeydew";

    it('should find the target with linear search', function() {
        const result = linearSearch(sortedArray, target);
        expect(result).toBe(6);
    });

    it('should find the target1 with linear search; searching through an un-ordered list of strings', function() {
        const result = linearSearch(unSorted, target1);
        expect(result).toBe(6); // Change this to match the actual result
    });

    it('should measure execution time for linear search', function(){
        const startTime = performance.now();
        linearSearch(sortedArray, target);
        const endTime = performance.now();
        const executionTime = endTime - startTime;

        expect(executionTime).toBeLessThan(10);
    });

});