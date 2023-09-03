---
sidebar_position: 5
---

# Reading Areas

The `read_areas()` function is a cornerstone of any trading script in NightShark. It reads the areas on the screen that you've designated for tracking. This section will delve into the importance of this function, why it should be used in a loop, and provide examples for better understanding.

### Importance of read_areas()

The `read_areas()` function allows you to monitor real-time metrics or signals from your trading platform. It reads the designated areas on the screen and stores the values, enabling you to make trading decisions based on these metrics.

### Why Constant Looping is Necessary

A single call to `read_areas()` will only read the areas once. For continuous monitoring, you need to implement it within a loop.

#### Example using `loop`

Here's how you can use `read_areas()` in a simple loop:

```ahk
loop {
    read_areas()
}
```


#### Example using `loop until`

For more control over when to stop reading areas, you can use the `loop until` construct. Here's an example:

```ahk
loop {
    read_areas()
} until (toNumber(area[1]) > 20 || toNumber(area[1]) < -10)
```

By using `loop` or `loop until`, you ensure that the `read_areas()` function continually updates the metrics, allowing your script to respond to real-time changes.