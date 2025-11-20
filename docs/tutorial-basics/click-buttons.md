---
sidebar_position: 7
---

# Clicking Buttons

`Click()` is how NightShark presses on-screen controls for you. Use it to execute entries, exits, modal confirmations, or any other GUI interaction required by your trading platform.

## Basic Usage

```ahk
Click(point.a)
```

`point.a` (or any letter you configure) references a saved coordinate from the NightShark desktop recorder. The click fires instantly at that position.

## Sequencing Actions

Allow the UI to update between clicks with `Sleep` delays (milliseconds):

```ahk
Click(point.a)   ; Submit buy order
Sleep 750
Click(point.c)   ; Acknowledge confirmation dialog
```

Combine clicks with conditions to build smarter automation:

```ahk
if (toNumber(area[1]) >= 40) {
    Click(point.b) ; Take profit
} else if (toNumber(area[1]) <= -35) {
    Click(point.c) ; Emergency exit
}
```

## Best Practices

- **Record precisely** — re-capture points if your platform layout changes or you switch monitors.  
- **Use intent-based names** — label points (`BuyButton`, `FlattenButton`) so scripts read like English.  
- **Add safeguards** — wrap critical clicks in confirmation logic to avoid misfires.

:::warning Unexpected behaviour?
If the click lands slightly off-target, turn off Windows “display scaling” for the trading app or run NightShark as administrator to ensure coordinate accuracy.
:::

Mastering `Click()` lets you turn complex multi-step trading actions into a single automated routine.
