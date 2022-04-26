// 448. Find All Numbers Disappeared in an Array
// Easy

// 6448

// 379

// Add to List

// Share
// Given an array nums of n integers where nums[i] is in the range [1, n], 
//return an array of all the integers in the range [1, n] that do not 
//appear in nums.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

var encode = function(longUrl) {
    
    let buff = new Buffer(longUrl);
    let base64data = buff.toString('base64');
    return `http://tinyurl.com/${base64data}`;
};


var decode = function(shortUrl) {
    let data = shortUrl.split('.com/')[1]
    let buff = new Buffer(data, 'base64');
    let text = buff.toString('utf8');
    //console.log([shortUrl, data, text])
    
    return text;
};















var findDisappearedNumbers = function(nums) {
    
    const result = [];
      const set = new Set(nums);
      for(let i = 1; i <= nums.length; i++){
          if(!set.has(i)){
              result.push(i);
          }
      }
      return result;
  };