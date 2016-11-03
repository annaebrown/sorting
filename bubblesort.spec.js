describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect(bubbleSort([]) ).toEqual( [] );
  });


it('should handle single item arrays', function(){
      expect(bubbleSort([1])).toEqual([1]);
  });

it('should handle single item arrays', function(){
      expect(bubbleSort([1, 3, 4, 2])).toEqual([1,2,3,4]);
  });

// spyOn(window, "swap");
//   swap.calls.count()
});

