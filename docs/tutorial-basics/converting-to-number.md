---
sidebar_position: 7
---

# Converting to Number

The `toNumber()` function in NightShark is essential for converting area values into numerical data. This conversion is crucial when you need to perform mathematical operations or comparisons on the data you've collected. This section will elaborate on the function's importance, its usage, and provide examples for better understanding.

### Why Use toNumber()?

Often, the values read from screen areas might be in a format that is not suitable for mathematical operations. The `toNumber()` function allows you to convert these values into a numerical format, enabling you to perform calculations or make comparisons.

### How to Use toNumber()

The `toNumber()` function takes an area as an argument and returns its numerical equivalent.

 
toNumber(area[1])


In this example, `area[1]` is converted into a number, which can then be used in mathematical operations or conditional statements.

### Example: Using toNumber in a Condition

Here's an example that uses `toNumber()` in a conditional statement:

```
if (toNumber(area[1]) > 20 || toNumber(area[1]) < -10) {
    // Your code here
}
```

In this example, `toNumber()` converts `area[1]` to a number, which is then used in a conditional statement to check if it's greater than 20 or less than -10.

By leveraging the `toNumber()` function, you can make your NightShark scripts more versatile and capable of handling a wider range of trading scenarios.