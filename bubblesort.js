function compare(x, y) {
    return x > y;
}

 function swap(i, j, arr) {
  var greater = arr[i];
  var lesser = arr[j];
  arr[i] = lesser;
  arr[j] = greater;
  return arr;
}

var bubbleSort = function(array) {
  if (array.length <= 1) {
    return array;
  }

  for (var i = 0; i < array.length; i++) {
      debugger;
    for (var j = i + 1; j < array.length; j++) {
      if (compare(array[i], array[j])) {
        swap(i, j, array)
      }
    }
  }
  return array;
}