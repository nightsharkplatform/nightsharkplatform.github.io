---
sidebar_position: 8
---

# If-Else statement
If-else statements are a fundamental part of programming logic, and they're no less important in NightShark. These conditional statements allow you to execute different blocks of code based on whether a condition is true or false. This section will delve into the importance of using if-else statements in your NightShark scripts, how to implement them, and provide examples for better understanding.

### Why Use If-Else Statements?

If-else statements are crucial for making decisions in your script. Whether you're deciding to place a buy or sell order, stop a trade, or perform some other action, if-else statements give you the control you need.

### Basic Syntax

The basic syntax for an if-else statement in NightShark is as follows:

``` 
if (condition) {
    // Code to execute if condition is true
} else {
    // Code to execute if condition is false
}
```


### Example: Basic If-Else Statement

Here's a simple example that uses an if-else statement to decide whether to buy or sell based on a condition:

```
if (toNumber(area[1]) > 20) {
    Click(point.a)  // Code for buying
} else {
    Click(point.b)  // Code for selling
}
```


### Example: Using Multiple Conditions

You can also use multiple conditions in your if-else statements:

``` 
if (toNumber(area[1]) > 20) {
    Click(point.a)  // Code for buying
} else if (toNumber(area[1]) < -10) {
    Click(point.b)  // Code for selling
} else {
    // Code for doing nothing
}
```


By mastering if-else statements, you can create more complex and flexible trading algorithms in NightShark.