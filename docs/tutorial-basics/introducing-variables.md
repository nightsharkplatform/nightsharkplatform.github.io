---
sidebar_position: 4
---

# Introducing Variables

In NightShark, variables serve as placeholders for storing data values, which can be used and manipulated throughout your script. This section will guide you through the process of declaring and using variables in NightShark, complete with examples.

### Why Use Variables?

Variables are incredibly useful for storing metrics or conditions that you'll need to reference multiple times throughout your script. By using variables, you can make your code more readable and maintainable.

### How to Declare a Variable

Declaring a variable in NightShark is straightforward. Use the `:=` operator to assign a value to a variable. Here's the syntax:

```plaintext
VariableName := Value
```

### Example 1: Storing Profit and Loss Metrics

For instance, you might want to keep track of the current position's profit or loss and the day's profit or loss. Here's how you can declare these variables:

```plaintext
CurrentPositionProfitLoss := toNumber(area[1])
DayProfitLoss := toNumber(area[2])
```

In this example, `CurrentPositionProfitLoss` and `DayProfitLoss` are variables that store the numerical values of `area[1]` and `area[2]`, respectively.

### Example 2: Using Variables in Conditions

Once declared, these variables can be used in conditional statements, calculations, or even passed into custom functions. For example:
```plaintext
if (CurrentPositionProfitLoss > 20) {
    // Your code for when profit is greater than 20
}
```


By using variables like `CurrentPositionProfitLoss`, you can make your conditions more readable and easier to manage.