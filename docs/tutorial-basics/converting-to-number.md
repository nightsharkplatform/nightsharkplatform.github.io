---
sidebar_position: 8
---

# Converting to Numbers

On-screen values arrive as text—`$143.25`, `-12.5`, `1.25%`. Use `toNumber()` to turn them into numeric data NightShark can compare, add, and subtract.

## Syntax

```ahk
numericValue := toNumber(area[index])
```

`area[index]` references the region you mapped in the desktop app. `toNumber()` strips out currency symbols and commas automatically.

## Practical Examples

```ahk
read_areas()

openPL  := toNumber(area[1])
dailyPL := toNumber(area[2])

if (openPL >= 30) {
    Click(point.b) ; Flatten the position
}

if (dailyPL <= -400) {
    Log("Daily loss limit reached—script stopped")
    stopCode()
}
```

## Handling Edge Cases

- **Missing data** — `toNumber()` returns `0` if the area is blank. Add guards if that would trigger unwanted actions.  
- **Percentages** — values like `1.25%` become `1.25`. Divide by `100` if you need the decimal (0.0125).  
- **Negative numbers** — they keep the minus sign, so `<` checks work as expected.

:::tip Debugging conversions
Use `Log()` messages to confirm how values are parsed, then open the **Log** window from the NightShark toolbar to review the output:

```ahk
Log("Current PL: " . toNumber(area[1]))
```
:::

Convert first, then compare—your logic will be faster, safer, and easier to read.
