//linear search test.
// in need an algorithm of mixed numbers/
// then I need to input those numbers and have it search for a number
// have that number be expected . tobe
// then I want f
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
    const target1 = 10

    it('should find the target with linear search', function() {
        const result = linearSearch(sortedArray, target);
        expect(result.toBe(6))
    });

    it('should find the target1 with linear search; searching through an un ordered list of strings', function() {
        const result = linearSearch(unSorted, target1);
        expect(result.toBe(10))
    });
});