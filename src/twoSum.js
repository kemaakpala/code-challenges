/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export default function twoSum(nums, target) {
  if (!nums || !target) return [];
  let complementObj = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (complementObj.hasOwnProperty(complement)) {
      return [i, complementObj[complement]];
    }
    complementObj[nums[i]] = i;
  }
}
