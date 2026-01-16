---
sidebar_position: 5
title: "getShiftsByLocation"
description: "Retrieves shifts for a specific location."
---

# system.mes.shift.getShiftsByLocation

## Description

Retrieves [Shifts](../../data-model/shift-model/shift) records for the specified location.

## Syntax

```python
system.mes.shift.getShiftsByLocation(locationIdOrPath)
system.mes.shift.getShiftsByLocation(locationIdOrPath, includeDisabled)
```

## Parameters

### Method 1: With Location Only

| Parameter          | Type     | Nullable | Description                                      |
|--------------------|----------|----------|--------------------------------------------------|
| `locationIdOrPath` | `String` | False    | The location ID or path to find shifts for.      |

### Method 2: With Include Disabled Flag

| Parameter          | Type      | Nullable | Description                                                              |
|--------------------|-----------|----------|--------------------------------------------------------------------------|
| `locationIdOrPath` | `String`  | False    | The location ID or path to find shifts for.                               |
| `includeDisabled`  | `Boolean` | True     | Whether to include disabled records. If null/omitted, defaults to false. |

## Returns

Returns a list of JSON objects representing the shifts found for the location.

## Code Examples

```python
# Retrieve shifts for a location (enabled only)
shifts = system.mes.shift.getShiftsByLocation('DairyCo/Plant1/Line1')
print(shifts)

# Retrieve shifts for a location including disabled
allShifts = system.mes.shift.getShiftsByLocation('DairyCo/Plant1/Line1', True)
print(allShifts)
```
