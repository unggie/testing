import { capitalize } from "../scripts/capitalize";

test('Capitalize odin to Odin', () => {
    expect(capitalize('odin')).toMatch(/Odin/);
})