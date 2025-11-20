---
sidebar_position: 6
---

# Reading Areas

`read_areas()` is the heartbeat of every NightShark script. It refreshes the values from each region you mapped in the desktop recorder so your automation always works with live data.

## What It Does

- Captures the latest text from every configured `area[index]`  
- Stores the results in the global `area` array for immediate use  
- Should be called before any decision that depends on market state

## Continuous Monitoring

Call `read_areas()` in a loop to keep your data fresh:

```ahk
loop {
    read_areas()
    Sleep 250 ; throttle updates to quarter-second intervals
}
```

For responsive yet controlled scripts, add a break condition with `loop` + `until`:

```ahk
loop {
    read_areas()
} until (toNumber(area[1]) >= 50 || toNumber(area[1]) <= -35)
```

## Integrating with Strategy Logic

```ahk
loop {
    read_areas()

    currentPL := toNumber(area[1])
    dailyPL   := toNumber(area[2])

    if (currentPL >= 25) {
        Click(point.b)
    }
    if (dailyPL <= -400) {
        Log("Daily loss limit reached—script stopped")
        stopCode()
        break
    }

    Sleep 200
}
```

## Tips for Reliable Reads

- **Consistent UI** — keep the trading platform window in the same position and resolution you used when recording areas.  
- **Avoid overlays** — tooltips or floating windows covering the area can block accurate reads.  
- **Throttle as needed** — aggressive polling can overwhelm slower machines; adjust `Sleep` durations to balance responsiveness and stability.

With a solid `read_areas()` loop in place, your script can react instantly to market changes.
