---
sidebar_position: 0
---

# Schedule Shift Model Overview

The **ScheduleShift** model in **TamakiMES** is designed to organize and manage production shifts within the
manufacturing environment. This schema facilitates systematic shift planning, workforce allocation, and production time tracking to
ensure consistent manufacturing operations across different time periods.

---

### 1. ScheduleShift

Defines a shift pattern or schedule template, including configuration for shift triggers, conflict resolution, and associated location.
Each **ScheduleShift** establishes rules for when shifts begin and end, providing a foundation for scheduling production activities.

### 2. ScheduleShiftRecord

Tracks individual instances of shifts, including their actual start and end times, status, and location. While the **ScheduleShift** 
entity defines shift patterns, this entity records the actual occurrences of shifts, enabling detailed tracking and analysis of 
production time.

---

The Schedule Shift model in **TamakiMES** supports systematic organization of manufacturing time periods, from defining
shift patterns to tracking specific shift occurrences. This structure enables efficient time management, shift rotation planning,
and production scheduling, ensuring that manufacturing operations maintain continuity across different work periods.

This high-level overview provides a clear picture of how the **Schedule Shift** model functions within TamakiMES,
focusing on key components without delving into field-level details. Each element contributes to a complete and
adaptable system for managing production shifts within the manufacturing environment.
