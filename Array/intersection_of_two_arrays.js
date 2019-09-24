// We have two arrays:


 arrA=[1,3,4,5]
 arrB=[1,2,5,6,7]

 // The intersection needs to return the elements that both arrays share in common, in the case below above [1,5]

 let intersection = arrA.filter(x => arrB.includes(x));

// The difference will be output the elemts from Array A that are not in the array B. The results will be [3,4]

let difference = arrA.filter(x => !arrB.includes(x));

// Symmetrical Difference: in the case you will get an array containing all the elements of both arays that are not in the other array
// so results: [2,3,5,6,7]

let difference = arrA
                 .filter(x => !arrB.includes(x))
                 .concat(arrB.filter(x => !arrA.includes(x)));

// Union: compabingin all the elements from first array into second array

let union = [...arrA, ...arrB]
   //or
let union = [...new Set ([...arrA, ...arrB])];

////---------------------------- Plain Vanilla ES6 Solution-------------///////////////////

function symmetricDifference(nums1, nums2) {
  var result = [];
  for (var i = 0; i < nums1.length; i++) {
    if (nums2.indexOf(nums1[i]) === -1) {
      result.push(nums1[i]);
    }
  }
  for (i = 0; i < nums2.length; i++) {
    if (nums1.indexOf(nums2[i]) === -1) {
      result.push(nums2[i]);
    }
  }
  return result;
}
