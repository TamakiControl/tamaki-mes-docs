---
sidebar_position: 4
title: "getAllShifts"
description: "Retrieves all schedule shifts."
---

# system.mes.schedule.shift.getAllShifts

## Description

Retrieves a list of all [Schedule Shifts](../../data-model/schedule-shift-model/schedule-shift) records in the system.

## Syntax

```python
system.mes.schedule.shift.getAllShifts()
system.mes.schedule.shift.getAllShifts(includeDisabled)
```

## Parameters

### Method 1: No Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

### Method 2: Include Disabled Flag

| Parameter         | Type      | Nullable | Description                                                              |
|-------------------|-----------|----------|--------------------------------------------------------------------------|
| `includeDisabled` | `Boolean` | True     | Whether to include disabled records. If null/omitted, defaults to false. |

## Returns

Returns a list of JSON objects representing all schedule shifts.

## Code Examples

```python
# Retrieve all schedule shifts (enabled only)
shifts = system.mes.schedule.shift.getAllShifts()
print(shifts)

# Retrieve all schedule shifts, including disabled
all_shifts = system.mes.schedule.shift.getAllShifts(True)
print(all_shifts)
```
