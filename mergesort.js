function mergeSort(array) {
	

	
}

function split(array) {
  	var middle = array.length / 2;
  	var left = array.slice(0, middle);
  	var right = array.slice(middle)
	return [left, right];
}

function merge(left, right){
	var merged = [];
	var leftI = 0;
	var rightI = 0;
	while (leftI < left.length && rightI < right.length){
		if (left[leftI] < right[rightI]){
			merged.push(left[leftI]);
			leftI++;
		} else {
			merged.push(right[rightI]);
			rightI++;
		}
	} 
	return merged;	
}




	// var splitArray = split(array);
	// // debugger;
	// if(splitArray.length === array.length){
	// 	// mergeSort(splitArray)
	// 	return;
	// }
	// // splitArray.push(split(array));

	// for (var i = 0; i < splitArray.length; i++) {
	// 	if(splitArray[i].length > 1){
	// 		console.log(splitArray[i]);
	// 		splitArray = split(splitArray[i]);
	// 	}
	// }
	// return splitArray;