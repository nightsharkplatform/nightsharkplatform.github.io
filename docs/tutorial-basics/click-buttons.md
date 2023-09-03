---
sidebar_position: 6
---

# Clicking Buttons

The `Click()` function in NightShark is designed to simulate mouse clicks at specified points on your screen. This is particularly useful for interacting with UI elements in your trading platform. This section will explain the function in detail and provide examples for clarity.

### Why Use Click()?

Automating mouse clicks can be crucial for executing buy or sell orders, navigating through the trading platform, or even stopping a trade. The `Click()` function allows you to do all of this programmatically.

### How to Use Click()

The `Click()` function takes a point as an argument, which specifies where on the screen the click should occur.

 ```
Click(point.a)
```

In this example, `point.a` is a predefined point on the screen where the click will happen.

### Multiple Clicks Example

You can also sequence multiple clicks together, perhaps with some sleep time in between to allow the UI to update.

```
Click(point.a)
Sleep 1000  ; Sleep for 1 second
Click(point.b)
```

By understanding and utilizing the `Click()` function effectively, you can significantly enhance the automation capabilities of your trading scripts in NightShark.