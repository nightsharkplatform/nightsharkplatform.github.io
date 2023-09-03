---
sidebar_position: 2
---

# Pre-Built Functions

NightShark offers a variety of pre-built functions to make your trading automation as seamless as possible. These functions are designed to perform specific tasks, reducing the amount of code you have to write. Here's a breakdown:

- `read_areas()`: This function reads the areas on the screen that you've designated for tracking. It's essential for monitoring real-time metrics or signals.
  
- `Click()`: This function simulates a mouse click at a specified point on the screen. It's useful for interacting with trading platforms that require manual input.
  
- `toNumber()`: This function converts an area's value into a numerical format. It's crucial for performing mathematical operations on the data you collect.

> Note: The `ExitApp()` function for exiting the application may not work in some versions. Instead, use `Send, {F2}` to stop the script.