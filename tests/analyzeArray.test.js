import { analyzeArray } from "../scripts/analyzeArray";

const array = [1, 8, 3, 4, 2, 6];
const result = analyzeArray(array);

test(`Checking if the average value of the array: [${array}] equals 4`, () => {
    expect(result.average).toBeCloseTo(4);
})
test(`Checking if the lenght of the array: [${array}] equals 6`, () => {
    expect(result.length).toEqual(6);
})
test(`Checking if min value of the array: [${array}] equals 1`, () => {
    expect(result.min).toEqual(1);
})
test(`Checking if max value of the array: [${array}] equals 8`, () => {
    expect(result.max).toEqual(8);
})