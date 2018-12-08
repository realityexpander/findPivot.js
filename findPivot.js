var findPivot = function (array, start, end) {
  let prev;
  let disJoint = 0;
  let pivot = -1;
  let idx = 0;
  
	for(let i of array) {
	  if(i < prev) {
	    disJoint++;
	    pivot = idx;
	  }
	  prev = i;
	  idx++;
	}
	if(disJoint === 0)
	  return null;
	  
	return pivot;
};

findPivot(['dog', 'eagle', 'falcon', 'apple', 'bear', 'cat'])
// findPivot(['apple', 'bear', 'cat', 'dog', 'eagle', 'falcon'])
