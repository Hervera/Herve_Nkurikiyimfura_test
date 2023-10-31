const doLinesOverlap = (line1, line2) => {
  // Check if the lines overlap
  // The lines overlap if the right endpoint of one line is greater than or equal to the left endpoint of the other line.
  // In other words, if line1's right endpoint is greater than or equal to line2's left endpoint OR
  // line2's right endpoint is greater than or equal to line1's left endpoint, they overlap.
  if ((line1[1] >= line2[0] && line1[0] <= line2[1]) ||
      (line2[1] >= line1[0] && line2[0] <= line1[1])) {
    return true;
  } 
  return false;
}

module.exports = doLinesOverlap;