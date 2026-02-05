import { calculator } from "../scripts/calculator";

test('Add 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toEqual(3);
})
test('Subtract 5 - 2 to equal 3', () => {
    expect(calculator.subtract(5, 2)).toEqual(3);
})
test('Divide 12 / 4 to equal 3', () => {
    expect(calculator.divide(12, 4)).toBeCloseTo(3);
})
test('Multiply 3 * 1 to equal 3', () => {
    expect(calculator.multiply(3, 1)).toBeCloseTo(3);
})