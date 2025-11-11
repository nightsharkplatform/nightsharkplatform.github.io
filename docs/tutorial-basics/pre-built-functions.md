---
sidebar_position: 2
---

# Pre-Built Functions

NightShark ships with a handful of helpers that remove tedious boilerplate from your automation scripts. Mastering these functions lets you focus on strategy logic instead of UI handling.

## Function Overview

| Function        | Purpose                                                                 | Typical Use Case                                |
|-----------------|-------------------------------------------------------------------------|-------------------------------------------------|
| `read_areas()`  | Polls the on-screen regions you configured in the desktop app           | Capture live P/L, bid/ask spreads, or indicators|
| `Click(point)`  | Simulates a mouse click at a saved point (e.g., buy/sell buttons)       | Submit orders, acknowledge popups, toggle modes |
| `toNumber()`    | Converts area text (e.g., `$152.34`) into a numeric value you can compare | Build conditional checks and trailing logic    |
| `Log(message)`  | Writes a message to the NightShark application log                      | Trace script flow, debug data, audit actions    |

:::tip Keep reads fresh
`read_areas()` captures a single snapshot each time it runs. For continuous monitoring, call it inside a loop (with a small sleep or exit condition) so your strategy always works with up-to-date data.
:::

## Putting Them Together

```ahk
; Refresh live data
read_areas()

; Store values for later checks
currentPL := toNumber(area[1])
dailyPL   := toNumber(area[2])

; React to the latest state
if (currentPL >= 50) {
    Click(point.b) ; Take profit by clicking the sell button
}
Log("Current PL: " . currentPL)
```

:::tip Troubleshooting clicks
If the button click doesn’t register, re-record the point in the NightShark desktop app or add a short `Sleep 250` before the `Click()` call.
:::

## Logging Output

Use `Log()` whenever you want to capture a breadcrumb without pausing execution. Open the **Log** window from the NightShark toolbar (Log button) to review entries in real time.

```ahk
Log("Application started")

loop {
    read_areas()
    signal := area[1]
    openPL := toNumber(area[2])

    Log("Current signal: " . signal)
    Log("Open P/L: " . openPL)
}
```

:::tip Formatting log messages
Concatenate strings with `.` and convert non-strings (numbers, booleans) before logging so the output remains readable.
:::

## Stopping a Script Safely

Use the `stopCode()` helper to halt execution cleanly from your script. Log first, then call `stopCode()` so the message reaches the application log.

```ahk
if (dailyPL <= -400) {
    Log("Daily loss limit reached—script stopped")
    stopCode()
}
```

You can still press **F2** in the NightShark console (default stop hotkey) whenever you want to interrupt manually.

With these building blocks in place, you’re ready to start capturing data and reacting to it in later lessons.