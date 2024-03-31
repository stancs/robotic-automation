const { sort } = require('./sort');

describe('sort function', () => {
  // Test for STANDARD stack
  test('should return STANDARD stack for a standard package', () => {
    expect(sort(100, 100, 99, 15)).toBe('STANDARD');
  });

  // Test for SPECIAL stack
  test('should return SPECIAL stack for a bulky but not heavy package', () => {
    expect(sort(150, 150, 150, 15)).toBe('SPECIAL');
  });

  test('should return SPECIAL stack for a heavy but not bulky package', () => {
    expect(sort(90, 80, 70, 25)).toBe('SPECIAL');
  });

  // Test for REJECTED stack
  test('should return REJECTED stack for a package both heavy and bulky', () => {
    expect(sort(150, 150, 150, 25)).toBe('REJECTED');
  });

  // Additional tests for edge cases, boundary cases, and invalid inputs
  test('should handle minimum volume edge case', () => {
    expect(sort(1, 1, 1, 20)).toBe('SPECIAL');
  });

  test('should handle just below bulky threshold', () => {
    expect(sort(100, 100, 99, 10)).toBe('STANDARD');
  });

  test('should handle at bulky threshold', () => {
    expect(sort(100, 100, 100, 10)).toBe('SPECIAL');
  });

  test('should handle just below heavy threshold', () => {
    expect(sort(30, 30, 30, 19)).toBe('STANDARD');
  });

  test('should handle at heavy threshold', () => {
    expect(sort(30, 30, 30, 20)).toBe('SPECIAL');
  });

  test('should handle at both thresholds', () => {
    expect(sort(150, 150, 150, 20)).toBe('REJECTED');
  });

  test('should handle invalid inputs', () => {
    // You may need to adjust this based on your error handling logic
    expect(() => sort(-100, 100, 100, 15)).toThrow();
  });
});
