import twoSum from "./twoSum";
describe("test twoSum", () => {
  it("twosum", () => {
    expect(twoSum()).toEqual([]);
  });

  it("twosum nums = [2,7,11,15], target = 9", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(nums, target)).toContain(0);
    expect(twoSum(nums, target)).toContain(1);
    expect(Array.isArray(twoSum(nums, target))).toStrictEqual(true);
  });

  it("twosum nums = [3,2,4], target = 6", () => {
    const nums = [3, 2, 4];
    const target = 6;
    expect(twoSum(nums, target)).toContain(2);
    expect(twoSum(nums, target)).toContain(1);
    expect(Array.isArray(twoSum(nums, target))).toStrictEqual(true);
  });

  it("twosum nums = [3,3], target = 6", () => {
    const nums = [3, 3];
    const target = 6;
    expect(twoSum(nums, target)).toContain(0);
    expect(twoSum(nums, target)).toContain(1);
    expect(Array.isArray(twoSum(nums, target))).toStrictEqual(true);
  });

  it("twosum nums = [0, 1, 3, 5, 3], target = 6", () => {
    const nums = [0, 1, 3, 5, 3];
    const target = 6;
    expect(twoSum(nums, target)).toContain(1);
    expect(twoSum(nums, target)).toContain(3);
    expect(Array.isArray(twoSum(nums, target))).toStrictEqual(true);
  });
});
