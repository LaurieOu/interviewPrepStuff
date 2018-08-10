var findDuplicates = function(nums) {
    if(nums.length === 0) return [];
    var index, ans =[];
    for(var i = 0; i < nums.length; i++){
        index = Math.abs(nums[i]);
        console.log("index", index);
        if(nums[index-1] < 0){
            ans.push(index);
        } else {
            nums[index-1] *= -1;
        }
        console.log("nums", nums);
    }
    return ans;
};

console.log(findDuplicates([4,3,2,7,8,2,3,1,3,3,30,30]))
