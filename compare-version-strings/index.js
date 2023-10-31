const isVersionString = (str) => {
  // Regular expression to validate version string format (e.g., "x.y.z")
  const versionPattern = /^\d+(\.\d+)*$/;
  return versionPattern.test(str);
}

const compareVersionStrings = (version1, version2) => {
  // Check if inputs are valid version strings
  if (!isVersionString(version1) || !isVersionString(version2)) {
    throw new Error('Invalid version string');
  }

  // Split the version strings into arrays of parts and convert them to numbers
  const parts1 = version1.split('.').map(Number);
  const parts2 = version2.split('.').map(Number);

  // Determine the maximum length of both arrays
  const maxLength = Math.max(parts1.length, parts2.length);

  // Iterate through the parts and compare them numerically
  for (let i = 0; i < maxLength; i++) {
    // Use 0 for missing parts (e.g., "1.2" and "1.2.0")
    const num1 = parts1[i] || 0;
    const num2 = parts2[i] || 0;

    if (num1 < num2) {
      return -1; // version1 is less than version2
    } else if (num1 > num2) {
      return 1; // version1 is greater than version2
    }
  }

  return 0; // versions are equal
}

module.exports = {
  isVersionString,
  compareVersionStrings
};
