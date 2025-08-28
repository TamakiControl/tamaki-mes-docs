---
sidebar_position: 4
title: "getAllShifts"
description: "Retrieves all shifts."
---

# system.mes.shift.getAllShifts

## Description

Retrieves a list of all [Shifts](../../data-model/shift-model/shift) records in the system.

## Syntax

```python
system.mes.shift.getAllShifts()
system.mes.shift.getAllShifts(includeDisabled)
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

Returns a list of JSON objects representing all shifts.

## Code Examples

```python
# Retrieve all shifts (enabled only)
shifts = system.mes.shift.getAllShifts()
print(shifts)

# Retrieve all shifts, including disabled
all_shifts = system.mes.shift.getAllShifts(True)
print(all_shifts)
```
