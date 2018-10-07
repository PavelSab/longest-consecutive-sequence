module.exports = function longestConsecutiveLength(array) {
  if (array.length==0){return 0;}
	if (array.length==1){return 1;}

	function compareNumeric(a, b) {
		if (a > b) return 1;
		if (a < b) return -1;
	}
	array.sort(compareNumeric);
	var count=1;
	var sum=0;
	for (var i=1;i<array.length-1;i++){
		if((array[i]-array[i-1]==1)||(array[i]-array[i-1]==0))
			{if (array[i]-array[i-1]==0){
				continue;
			}
			count++;
		} else { count=1;}
		if (count>sum){
			sum=count;
		}
	}
	return sum;
}

