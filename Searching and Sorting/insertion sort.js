let array=[2,6,1,0,9,2,5];
var insertionSort = function(array) {
    for (var i = 1; i < array.length; i++) {
        for (var j = 0; j < i; j++) {
        if(array[i] < array[j]) {
            var temp = array.splice(i, 1);
            array.splice(j,0,temp[0]);
        }
    }
}
return array;
}

