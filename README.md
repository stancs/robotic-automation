# Robotic Automation

In this repo, we would like to implement robotic automation process to dispatch the packages to the correct stack
according to their volume and mass.

Here are the rules and implementation instructions:

> ### Rules
>
> Sort the packages using the following criteria:
>
> - A package is **bulky** if its volume (Width x Height x Length) is greater than or equal to 1,000,000 cm³ or when one
>   of its dimensions is greater or equal to 150 cm.
> - A package is **heavy** when its mass is greater or equal to 20 kg.
>
> You must dispatch the packages in the following stacks:
>
> - **STANDARD**: standard packages (those that are not bulky or heavy) can be handled normally.
> - **SPECIAL**: packages that are either heavy or bulky can't be handled automatically.
> - **REJECTED**: packages that are **both** heavy and bulky are rejected.
>
> ### Implementation
>
> Implement the function **`sort(width, height, length, mass)`** (units are centimeters for the dimensions and kilogram
> for the mass). This function must return a string: the name of the stack where the package should go.

## Sorting Logic

- Input validation
- Check whether the package is bulky
- Check whether the package is heavy
- If the package is both bulky and heavy then return "REJECTED"
- If the package is either bulky and heavy then return "SPECIAL"
- The rest is "STANDARD"

## Test

To evaluate my program for handling edge cases and inputs, I considered testing it with various scenarios, including:

- Valid inputs: Test the function with valid input values to ensure it returns the correct stack name for different
  combinations of dimensions and mass.

- Edge cases: Test the function with edge cases such as the minimum and maximum values for dimensions and mass, as well
  as cases where the dimensions or mass are close to the threshold values for being bulky or heavy.

- Invalid inputs: Test the function with invalid input values, such as negative dimensions or mass, to ensure it handles
  them gracefully and possibly returns an appropriate error or default value.

- Boundary cases: Test the function with inputs that fall exactly on the thresholds for being bulky or heavy to verify
  that it correctly categorizes them.

Test is done using `jest` package and the coverage will show after the test.

You can perform the test with this command and the result will be shown as below:

```
> npm run test

> thoughtful-ai@0.0.1 test
> jest --coverage

 PASS  ./sort.test.js
  sort function
    ✓ should return STANDARD stack for a standard package (1 ms)
    ✓ should return SPECIAL stack for a bulky but not heavy package
    ✓ should return SPECIAL stack for a heavy but not bulky package (1 ms)
    ✓ should return REJECTED stack for a package both heavy and bulky
    ✓ should handle minimum volume edge case (1 ms)
    ✓ should handle just below bulky threshold
    ✓ should handle at bulky threshold (1 ms)
    ✓ should handle just below heavy threshold
    ✓ should handle at heavy threshold (1 ms)
    ✓ should handle at both thresholds
    ✓ should handle invalid inputs (7 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 sort.js  |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       11 passed, 11 total
Snapshots:   0 total
Time:        0.411 s
Ran all test suites.
```
