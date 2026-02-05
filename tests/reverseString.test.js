import { reverseString } from "../scripts/reverseString";

test('Reverse Odin to nidO', () => {
    expect(reverseString('Odin')).toMatch(/nidO/);
})