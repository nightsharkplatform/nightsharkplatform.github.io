---
sidebar_position: 3
---

# Dynamic Scalper

Dynamic Scalper is NightShark’s flagship strategy template. It combines multi-stage profit targets, adaptive trailing stops, and loss controls that you can tune to match your risk profile. This guide explains how to wire the strategy to your trading platform, configure every input, and run the automation with confidence.

## When to Use Dynamic Scalper

- You want to capture quick moves with automated profit-locking  
- You need configurable guardrails for both individual trades and daily performance  
- You’re looking for an out-of-the-box strategy you can tweak without rewriting code

:::info Quick setup overview
Calibrate your screen points, drop in the parameter values that fit your instrument, and start the strategy from the NightShark desktop app.
:::

## Screen Mapping Checklist

Before enabling the scalper, make sure the following points and areas are configured in NightShark:

| Element   | Map To                                  | Purpose                                                     |
|-----------|------------------------------------------|-------------------------------------------------------------|
| `point.a` | Buy button                               | Executes a long entry or closes a short                     |
| `point.b` | Sell button                              | Executes a short entry or closes a long                     |
| `point.c` | Neutral area (no platform interaction)   | Safe location for “no action” clicks or resets              |
| `area[1]` | Open position P/L                        | Feeds trade-level profit and loss into the strategy logic   |
| `area[2]` | Daily P/L                                | Tracks overall session performance for day-level controls   |

![NightShark screen layout with buy/sell points and monitored areas](image-9.png)

## Configuration Cheat Sheet

Set the following values in the script header. The defaults illustrate a balanced intraday scalping setup; adjust to match volatility and account size.

| Parameter           | Example | What It Controls                                                                 |
|---------------------|---------|----------------------------------------------------------------------------------|
| `L1`                | `75`    | Profit (in dollars) to reach before the first trailing stop activates            |
| `PL1`               | `60`    | Fixed stop value applied once `L1` is achieved                                   |
| `L2`                | `100`   | Profit target that unlocks the dynamic trailing stop                             |
| `PL2Pct`            | `0.7`   | Percentage-based trail used after `L2` (e.g., 0.7 keeps 70% of unrealised gains)|
| `maxLossPerTrade`   | `-115`  | Hard stop per position; the script exits immediately if breached                |
| `dailyMaxLoss`      | `-600`  | Daily drawdown limit; halts the algorithm once reached                           |
| `DailyprofitLevel1` | `200`   | Profit threshold that triggers day-level trailing                               |
| `DailyCapturePct`   | `0.7`   | Percentage retained on daily profits after `DailyprofitLevel1` is surpassed      |
| `LossStreak`        | `2`     | Number of consecutive losses before the strategy flips direction                 |

:::tip Sizing guidance
Start with conservative values on a simulator. Once you understand the behaviour, scale up gradually to match real capital at risk.
:::

## Sample Script Block

Drop the snippet below into a new NightShark script or update your existing Dynamic Scalper configuration. Only modify the parameter values; the constructor logic should remain untouched.

```ahk
; === Dynamic Scalper configuration ===
L1                := 75
PL1               := 60
L2                := 100
PL2Pct            := 0.7
maxLossPerTrade   := -115
dailyMaxLoss      := -600
DailyprofitLevel1 := 200
DailyCapturePct   := 0.7
LossStreak        := 2

; === Strategy bootstrap (do not edit below) ===
myScalper := new DynamicScalper(
    L1,
    PL1,
    L2,
    PL2Pct,
    maxLossPerTrade,
    dailyMaxLoss,
    DailyprofitLevel1,
    DailyCapturePct,
    LossStreak
)

myScalper.Start()
```

## How the Parameters Work Together

- **Stage 1 trailing (`L1` / `PL1`)** locks a minimum gain once the first profit milestone hits, ideal for managing choppy sessions.  
- **Stage 2 trailing (`L2` / `PL2Pct`)** scales with momentum, letting winners run while still protecting realised profits.  
- **Loss controls (`maxLossPerTrade`, `dailyMaxLoss`)** guard against runaway moves or platform anomalies.  
- **Daily clamps (`DailyprofitLevel1`, `DailyCapturePct`)** enforce an “enough for today” rule so you keep a healthy share of gains.  
- **Direction flip (`LossStreak`)** automatically reverses bias after a predefined number of losses to adapt to changing market regimes.

## Launch Checklist

1. Verify that `read_areas()` is populating the P/L fields correctly.  
2. Run the strategy in paper trading mode and watch the console for parameter values.  
3. Confirm that profit targets, stops, and loss streak rules trigger as expected.  
4. Switch to live trading only after documenting the exact settings you intend to use.

:::info Next steps
Pair Dynamic Scalper with the tutorials in this documentation to extend the strategy—add custom alerts, integrate with broker hotkeys, or build your own hybrid logic.
:::
