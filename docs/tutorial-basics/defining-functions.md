---
sidebar_position: 4
---

# Defining Functions

Functions let you package trading logic once and reuse it everywhere. They reduce duplication, clarify intent, and make it easier to test new ideas.

## Function Syntax

```ahk
FunctionName(param1, param2) {
    ; Optional: expose outer-scope variables
    global sharedVariable

    ; Body
    return expression
}
```

Key ideas:

- Parameters are optional—omit them for simple helpers.  
- Use `global` inside the function when you need to access variables defined outside.  
- Always `return` the value you want to pass back to the caller.

## Example: Trade Signals

```ahk
ShouldBuy() {
    global area
    return (toNumber(area[1]) >= 20)
}

ShouldSell() {
    global area
    return (toNumber(area[1]) <= -15)
}
```

With these helpers, the main loop becomes easier to read:

```ahk
read_areas()

if (ShouldBuy()) {
    Click(point.a)
} else if (ShouldSell()) {
    Click(point.b)
}
```

## Example: Utility Function with Input

```ahk
IsDailyDrawdownExceeded(dailyLimit) {
    global area
    return (toNumber(area[2]) <= dailyLimit)
}
```

Call it with a custom threshold:

```ahk
if (IsDailyDrawdownExceeded(-500)) {
    Log("Drawdown limit reached—script stopped")
    stopCode()
}
```

## Tips for Clean Functions

- **Single responsibility** — each function should answer one question or perform one action.  
- **Meaningful names** — describe the decision or behavior (`ShouldCloseTrade`, `LockProfit`).  
- **Short bodies** — if a function exceeds ~10 lines, consider breaking it up.

Next, combine these functions with loops to keep your automation responsive.
