---
id: intro
title: Getting Started on MacOS
sidebar_position: 1
---

NightShark’s real-time trading stack is optimized for Windows. Core services lean on the Windows API and GPU acceleration pathways to keep our vision models fast and stable when markets move quickly. macOS locks down low-level system access, which limits the performance tuning required for low-latency trading, so we recommend running NightShark inside a Windows environment.

## Options for Mac users

| Mac model | Description | Type | Guides / Links |
| --- | --- | --- | --- |
| Intel-based Mac (2019 & older) | Install Windows 10 with Boot Camp to run NightShark natively on the hardware. | Free | [Apple Boot Camp guide](https://support.apple.com/en-us/102622), [YouTube walkthrough](https://www.youtube.com/watch?v=Hmm9Q-T0oTo) |
| Apple silicon (M-series, 2020 & newer) | Use VMware Fusion (free for individual use) to virtualize Windows 11 on ARM and run NightShark in the VM. | Free | [VMware Fusion setup video](https://youtu.be/f9TUIVDUjto?si=mfppSfZ1mu9BCiO_) |
| Any Mac with reliable internet | Rent a Windows VPS, connect through Remote Desktop, and leave NightShark running in the cloud. | Paid (subscription) | [NYC Servers Windows VPS (referral link)](https://newyorkcityservers.com/billing/aff.php?aff=635) |
| Refurb Intel MacBook (2017–2019) | Buy a used Intel MacBook (often <$300 on resale sites), install Windows with Boot Camp, and dedicate it to trading. | Paid (one-time) | [Apple Boot Camp guide](https://support.apple.com/en-us/102622) |

Choose the path that best fits your hardware and budget, then follow the linked guide to get Windows ready before installing NightShark. Tutorials in this section will point to the relevant Windows setup steps where needed. 

:::tip
NightShark requires the display to stay on because its vision models read live pixels from the screen to drive trading decisions. The app keeps the session awake automatically while it is running.
:::

