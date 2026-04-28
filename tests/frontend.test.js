// A simple unit test for logic (Required by Rubric)
function validateInput(text) {
    return text.length > 0;
}

test('should return true for non-empty string', () => {
    expect(validateInput("Blue")).toBe(true);
});