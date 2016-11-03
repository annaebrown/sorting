function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  var splitPoint = Math.floor(wholeArray.length / 2);
  var firstHalf = wholeArray.slice(0, splitPoint);
  var secondHalf = wholeArray.slice(splitPoint)
  return [firstHalf, secondHalf];
}

function mergeSort(array) {
	var splitArray;
	while(splitArray.length <= array.length){
		splitArray.push([split(array)]);
	}
}