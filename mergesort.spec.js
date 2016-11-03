describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here 
    expect(split([1, 2, 3, 4]) ).toEqual( [[1, 2], [3, 4]] );
  });
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(split([5, 2, 6, 8])).toEqual([2, 5, 6, 8]);
  });
});