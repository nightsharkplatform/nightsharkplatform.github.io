---
sidebar_position: 5
---

# Introducing Variables

Variables are the building blocks of every NightShark strategy. They capture market state, track progress, and feed decision logic throughout your script.

## Declaring Variables

NightShark uses the `:=` assignment operator:

```ahk
variableName := value
```

The assignment can be a literal, a function result, or another variable.

<img src={require('../variables.gif').default} alt="Recording variables in NightShark" width="720" />

## Capturing Market Data

Pair variables with `read_areas()` to store the latest on-screen values:

```ahk
read_areas()
currentTradePL := toNumber(area[1])
dayPL          := toNumber(area[2])
```

Now you can reuse `currentTradePL` and `dayPL` everywhere instead of repeatedly calling `toNumber()`.

## Using Variables in Logic

```ahk
if (currentTradePL >= 25) {
    Click(point.b) ; Lock in profits
} else if (currentTradePL <= -40) {
    Click(point.c) ; Trigger your custom safety handler
}
```

## Best Practices

- **Name clearly** — e.g., `maxLossPerTrade` beats `ml`.  
- **Scope wisely** — declare variables near the logic that owns them; promote to globals only when necessary.  
- **Update intentionally** — reassign the variable as soon as new data arrives so your logic always reflects the latest state.

With variables under control, you’re ready to start packaging logic into reusable functions.
