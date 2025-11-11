---
sidebar_position: 10
---

# Using Loop Constructs

Loops keep your NightShark script running, checking, and reacting without human input. They repeat a code block until a condition tells them to stop.

## Core Loop Syntax

```ahk
loop {
    ; repeated logic
}
```

Add an `until` clause to exit automatically:

```ahk
loop {
    ; repeated logic
} until (condition)
```

## Continuous Monitoring Example

```ahk
loop {
    read_areas()

    currentPL := toNumber(area[1])
    Sleep 200
}
```

This pattern keeps grabbing fresh data every 200 ms.

## Loop with Exit Condition

```ahk
loop {
    read_areas()
    currentPL := toNumber(area[1])

    if (currentPL >= 40) {
        Click(point.b)
        break
    }
} until (toNumber(area[2]) <= -400)
```

Here the loop stops if either the profit target hits (`break`) or the daily drawdown threshold triggers (`until`).

## Action Loops

```ahk
loop 5 {
    Click(point.a)
    Sleep 500
}
```

Use `loop <count>` for a fixed number of repetitions—ideal for scaled entries.

## Tips for Safe Loops

- **Always include a sleep** — even `Sleep 50` prevents CPU spikes and gives the UI time to respond.  
- **Guard against runaway** — track elapsed time or iterations and bail out if something looks wrong.  
- **Log decisions** — print status updates inside loops when testing so you can follow the flow.

Loop constructs are the backbone of any responsive NightShark automation—combine them with functions and conditionals to build full strategies.
