import { caesarCipher } from "../scripts/caesarCipher";

test('Encode xyz to abc', () => {
    expect(caesarCipher('xyz', 3)).toMatch(/abc/);
})
test('Encode \'Hello, World!\' to abc', () => {
    expect(caesarCipher("'Hello, World!'", 3)).toMatch(/'Khoor, Zruog!'/);
})