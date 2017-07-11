
class SumObj {
  constructor(val, left, right) {
    this.val = val; this.left = left; this.right = right;
  }
}


function findMaxCross(arr, low, high) {
  let mid = Math.floor((low+high)/2);
  let leftSum = null,
      rightSum = null,
      sum = 0,
      left = low,
      right = high;
  for(let i = mid; i >= low; i--) {
    sum += arr[i];
    if(sum > leftSum) {
      leftSum = sum;
      left = i;
    }
  }
  sum = 0;
  for(let i = mid+1; i <= high; i++) {
    sum += arr[i];
    if(sum > rightSum) {
      rightSum = sum;
      right = i;
    }
  }  
  return (new SumObj(leftSum+rightSum, left, right));
}


/**
* Returns max subarray
* @param {Array} arr
* @param {Number} [low]
* @param {Number} [high]
* @returns {Object} - object of structure {val, left, right}
*/
function findMaxSubarray(arr, low, high) {
  low = low !== undefined ? low : 0;
  high = high !== undefined ? high : (arr.length-1);
  if(low === high) {
    let obj = new SumObj(arr[low], low, high);
    return obj;
  }
    if(high==undefined) throw "No array data";
  let mid = Math.floor((low + high) / 2);
  let left = findMaxSubarray(arr, low, mid);
      right = findMaxSubarray(arr, mid+1, high);
      midSum = findMaxCross(arr, low, high);
  if(left.val > right.val && left.val > midSum.val) {
    return left;
  } else if(right.val > left.val && right.val > midSum.val) {
    return right;
  } else {
    return midSum
  }
}

module.exports = findMaxSubarray;