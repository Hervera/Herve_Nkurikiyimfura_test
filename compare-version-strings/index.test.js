const { compareVersionStrings, isVersionString } = require('.');

describe('isVersionString', () => {
  it('should return true for valid version strings', () => {
    expect(isVersionString('1.2')).toBe(true);
    expect(isVersionString('1.2.3')).toBe(true);
    expect(isVersionString('2')).toBe(true);
    expect(isVersionString('0.0.1')).toBe(true);
  });

  it('should return false for invalid version strings', () => {
    expect(isVersionString('1.2.x')).toBe(false);
    expect(isVersionString('2.2.')).toBe(false);
    expect(isVersionString('1..2')).toBe(false);
  });
});

describe('compareVersionStrings', () => {
  it('should return 0 when versions are equal', () => {
    expect(compareVersionStrings('1.2', '1.2')).toBe(0);
    expect(compareVersionStrings('2', '2.0')).toBe(0);
    expect(compareVersionStrings('3.0.0', '3.0.0.0')).toBe(0);
  });

  it('should return -1 when the first version is less', () => {
    expect(compareVersionStrings('1.2', '1.3')).toBe(-1);
    expect(compareVersionStrings('2.0', '2.1.0')).toBe(-1);
    expect(compareVersionStrings('3.0.0', '3.0.1')).toBe(-1);
  });

  it('should return 1 when the first version is greater', () => {
    expect(compareVersionStrings('1.3', '1.2')).toBe(1);
    expect(compareVersionStrings('2.1.0', '2.0')).toBe(1);
    expect(compareVersionStrings('3.0.1', '3.0.0')).toBe(1);
  });

  it('should handle cases with missing parts', () => {
    expect(compareVersionStrings('1', '1.0')).toBe(0);
    expect(compareVersionStrings('1.0.0.0', '1.0')).toBe(0);
    expect(compareVersionStrings('1.2', '1.2.0.0.0')).toBe(0);
    expect(compareVersionStrings('1.2.0', '1.2.0.0.1')).toBe(-1);
  });

  it('should throw an error for invalid version strings', () => {
    expect(() => compareVersionStrings('1.2.x', '1.2')).toThrow('Invalid version string');
    expect(() => compareVersionStrings('1.2', '1..2')).toThrow('Invalid version string');
  });
});
