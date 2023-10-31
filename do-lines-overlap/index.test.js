const doLinesOverlap = require('.');

describe('doLinesOverlap', () => {
  it('should return true when lines overlap', () => {
    const line1 = [1, 5];
    const line2 = [2, 6];
    expect(doLinesOverlap(line1, line2)).toBe(true);
  });

  it('should return false when lines do not overlap', () => {
    const line1 = [1, 5];
    const line2 = [6, 8];
    expect(doLinesOverlap(line1, line2)).toBe(false);
  });

  it('should return true when one line is completely inside the other', () => {
    const line1 = [1, 10];
    const line2 = [2, 6];
    expect(doLinesOverlap(line1, line2)).toBe(true);
  });

  it('should return true when lines share an endpoint', () => {
    const line1 = [1, 5];
    const line2 = [5, 8];
    expect(doLinesOverlap(line1, line2)).toBe(true);
  });
});
