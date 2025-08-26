---
sidebar_position: 17
title: "getShiftRecords"
description: "Retrieves all schedule shift records for a location within a time range."
---

# system.mes.schedule.shift.getShiftRecords

## Description

Retrieves all [Schedule Shift Records](../../data-model/schedule-shift-model/schedule-shift-record) for the given
location within the specified time range.

## Syntax

```python
system.mes.schedule.shift.getShiftRecords(locationIdOrPath, startDateMillis, endDateMillis)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                        |
|--------------------|----------|----------|----------------------------------------------------|
| `locationIdOrPath` | `String` | False    | The location ID or path to find shift records for. |
| `startDateMillis`  | `Long`   | False    | Start time (ms since epoch) for the search window. |
| `endDateMillis`    | `Long`   | False    | End time (ms since epoch) for the search window.   |

## Returns

Returns a list of JSON objects representing the schedule shift records.

## Code Examples

```python
# List records between two timestamps
records = system.mes.schedule.shift.getShiftRecords('DairyCo/Plant1/Line1', 1735689600000, 1735776000000)
print(records)
```
