---
sidebar_position: 5
title: "getShiftsByLocation"
description: "Retrieves schedule shifts for a specific location."
---

# system.mes.schedule.shift.getShiftsByLocation

## Description

Retrieves [Schedule Shifts](../../data-model/schedule-shift-model/schedule-shift) records for the specified location.

## Syntax

```python
system.mes.schedule.shift.getShiftsByLocation(locationIdOrPath)
system.mes.schedule.shift.getShiftsByLocation(locationIdOrPath, includeDisabled)
```

## Parameters

### Method 1: With Location Only

| Parameter          | Type     | Nullable | Description                                          |
|--------------------|----------|----------|------------------------------------------------------|
| `locationIdOrPath` | `String` | False    | The location ID or path to find schedule shifts for. |

### Method 2: With Include Disabled Flag

| Parameter          | Type      | Nullable | Description                                                              |
|--------------------|-----------|----------|--------------------------------------------------------------------------|
| `locationIdOrPath` | `String`  | False    | The location ID or path to find schedule shifts for.                     |
| `includeDisabled`  | `Boolean` | True     | Whether to include disabled records. If null/omitted, defaults to false. |

## Returns

Returns a list of JSON objects representing the schedule shifts found for the location.

## Code Examples

```python
# Retrieve shifts for a location (enabled only)
shifts = system.mes.schedule.shift.getShiftsByLocation('DairyCo/Plant1/Line1')
print(shifts)

# Retrieve shifts for a location including disabled
all_shifts = system.mes.schedule.shift.getShiftsByLocation('DairyCo/Plant1/Line1', True)
print(all_shifts)
```
