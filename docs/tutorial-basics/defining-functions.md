---
sidebar_position: 3
---

# Defining Functions

Defining custom functions in NightShark is a powerful way to encapsulate specific actions or conditions, making your code more modular, reusable, and easier to manage. This section will guide you through the process of defining functions, step-by-step, with additional examples.

### Step 1: Decide the Purpose of the Function

Before defining a function, decide what specific task or condition the function will handle. For example, you might want a function to determine whether to buy or sell based on certain conditions.

### Step 2: Define the Function

Use the following syntax to define a function:

```plaintext
FunctionName() {
    // Your code here
}
```

### Step 3: Use `global` if Necessary

If your function needs to access variables that are defined outside of it, include the `global` keyword at the beginning of the function.

### Example 1: ShouldBuy Function

Here's an example function called `ShouldBuy` that encapsulates the conditions under which a buy order should be placed:

```plaintext
ShouldBuy() {
    global
    return (toNumber(area[1]) > 20)
}
```


In this example, the function uses the `global` keyword to access the `area` variable, which is assumed to be defined globally. It then checks if `area[1]` is greater than 20 and returns the result.

### Example 2: ShouldSell Function

Similarly, you can define a function to encapsulate the conditions for selling:

```plaintext
ShouldSell() {
    global
    return (toNumber(area[1]) < -10)
}
```

This function checks if `area[1]` is less than -10 and returns the result.

By defining such functions, you can make your main trading logic much cleaner and easier to understand, as you can replace complex conditions with function calls like `ShouldBuy()` or `ShouldSell()`.