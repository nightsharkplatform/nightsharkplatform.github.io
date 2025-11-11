---
sidebar_position: 3
---

# Logging with `Log()`

NightShark includes a built-in `Log()` helper so you can record what your script is doing without breaking execution. Logs appear immediately in the NightShark console and inside the application log window.

## Why Log?

- Trace strategy decisions step by step
- Inspect live data flowing through your variables
- Capture audit trails for fills, exits, and safety triggers

## Opening the Log Window

Click the **Log** button in the NightShark UI to pop out the application log viewer. New `Log()` messages stream into this window in real time, letting you monitor behaviour while the script runs.

<img src={require('../Area.gif').default} alt="NightShark log window" width="720" />

## Basic Usage

```ahk
Log("Application started")
```

Use string concatenation (`.`) to include dynamic data:

```ahk
read_areas()
currentSignal := area[1]
openPL        := toNumber(area[2])

Log("Current signal: " . currentSignal)
Log("Open P/L: " . openPL)
```

## Logging Inside Loops

```ahk
loop {
    read_areas()
    targetReached := toNumber(area[1]) >= 40

    Log("Tick processed at " . A_Hour ":" . A_Min ":" . A_Sec)
    Log("Target reached? " . targetReached)

    if (targetReached) {
        Click(point.b)
        Log("Profit target hit—closing position")
        break
    }

    Sleep 250
}
```

## Best Practices

- **Keep messages concise** — focus on the most important data per line.
- **Standardise wording** — consistent phrasing makes it easier to search historical logs.
- **Avoid over-logging** — high-frequency logging can slow scripts; add `Sleep` calls or conditional logging where appropriate.
- **Review regularly** — export or copy logs after each session to build a trading journal.

With disciplined logging you can debug faster, validate strategies, and build confidence before trading live capital.
