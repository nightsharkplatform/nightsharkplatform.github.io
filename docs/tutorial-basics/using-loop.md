---
sidebar_position: 9
---

# Using Loop Constructs

Looping is an essential control structure in NightShark that allows you to execute a block of code multiple times. This is particularly useful for tasks that require repetition, such as constantly reading areas or repeatedly clicking points. This section will discuss the importance of loops, the different types of loops you can use, and provide examples for better understanding.

### Why Use Loops?

Loops are crucial for automating repetitive tasks in your script. For example, you might need to continually monitor a certain metric or keep clicking a button at regular intervals. Loops help you do this efficiently.

### Basic Loop Syntax

The basic syntax for a loop in NightShark is as follows:

``` 
loop {
    // Your code here
}
```


### Loop Until Syntax

For more control over your loop, you can use the `loop until` construct to specify a condition that will terminate the loop:

``` 
loop {
    // Your code here
} until (condition)
```

### Example: Basic Loop

Here's a simple example that uses a basic loop to continually read areas:

``` 
loop {
    read_areas()
}
```


### Example: Loop Until

Here's an example that uses `loop until` to read areas until a certain condition is met:

```
loop {
    read_areas()
} until (toNumber(area[1]) > 20 || toNumber(area[1]) < -10)
``` 

By understanding and utilizing loops effectively, you can create more robust and efficient trading scripts in NightShark.