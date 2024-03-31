// Function to check if a package is bulky based on dimensions
const isBulky = (width, height, length) => {
  // If any dimension is greater than or equal to 150, then it's bulky
  if (width >= 150 || height >= 150 || length >= 150) {
    return true;
  }
  // If volume is greater than or equal to 1000000, it's bulky
  const volume = width * height * length;
  return volume >= 1000000;
};

// Function to check if a package is heavy based on mass
const isHeavy = mass => mass >= 20;

// Constant for stack names
const STACK = {
  STANDARD: 'STANDARD',
  SPECIAL: 'SPECIAL',
  REJECTED: 'REJECTED',
};

// Main sorting function
function sort(width, height, length, mass) {
  // Validate input values
  if (
    typeof width !== 'number' ||
    typeof height !== 'number' ||
    typeof length !== 'number' ||
    typeof mass !== 'number' ||
    width < 0 ||
    height < 0 ||
    length < 0 ||
    mass < 0
  ) {
    throw new Error('Invalid input values: dimensions and mass must be non-negative numbers.');
  }

  // Check if the package is bulky and heavy
  const isBulkyValue = isBulky(width, height, length);
  const isHeavyValue = isHeavy(mass);

  // Determine the appropriate stack based on the conditions
  if (isBulkyValue && isHeavyValue) {
    return STACK.REJECTED;
  } else if (isBulkyValue || isHeavyValue) {
    return STACK.SPECIAL;
  }
  return STACK.STANDARD;
}

module.exports = { sort };
