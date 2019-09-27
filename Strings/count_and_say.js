The count-and-say sequence is the sequence of integers with the first five terms as following:

Example:
Input: 1
 Output: "1"
1.     1
2.     11
3.     21
4.     1211
5.     111221

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.
Note: Each term of the sequence of integers will be represented as a string.
var countAndSay = function(n) {


///----------------Solution 1-------------------------////

    var str = '1';
    for (var i=1; i < n; i++) {
        var strArray = str.split('');
        str ='';
        var count = 1;
        // Loop through current nth level line
        for (var j=0; j < strArray.length; j++) {
            // Next digit is different
            if (strArray[j] !== strArray[j+1]) {
                // Go to next non-matching digit
                str += count + strArray[j];
                count = 1;
            }
            else {
                count++;
            }
        }
    }
    return str;
};
