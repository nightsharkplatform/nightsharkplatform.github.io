---
sidebar_position: 9
---

# If-Else Statements

Conditional statements let NightShark scripts respond intelligently to market data. Use `if`, `else if`, and `else` blocks to define exact rules for when your automation should act.

## Syntax

```ahk
if (condition) {
    ; Executes when condition is true
} else if (anotherCondition) {
    ; Executes when the first condition is false
    ; and anotherCondition is true
} else {
    ; Fallback when none of the conditions match
}
```

Each condition evaluates to `true` or `false`. NightShark checks them from top to bottom and runs the first block that passes.

## Core Trading Pattern

```ahk
currentPL := toNumber(area[1])

if (currentPL >= 30) {
    Click(point.b) ; Take profit
} else if (currentPL <= -20) {
    Click(point.c) ; Stop loss
} else {
    ; Hold position
}
```

## Combining Multiple Signals

```ahk
trend     := toNumber(area[3])
volume    := toNumber(area[4])
currentPL := toNumber(area[1])

if (trend > 0 && volume >= 150000) {
    Click(point.a) ; Enter long on strong uptrend + volume
} else if (trend < 0 && currentPL >= 40) {
    Click(point.b) ; Exit when uptrend fades after profit
} else {
    ; Stand by
}
```

## Best Practices

- **Order matters** — put the most specific condition first, fallbacks last.  
- **Reuse variables** — compute values once, then compare them to different thresholds.  
- **Log branches** — during testing, log which branch fired to validate your assumptions.

When combined with loops and functions, if-else statements become the decision engine of your automation.
