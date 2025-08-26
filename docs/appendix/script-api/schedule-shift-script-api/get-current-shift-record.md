---
sidebar_position: 16
title: "getCurrentShiftRecord"
description: "Gets the current schedule shift record for a location, optionally at a specific timestamp."
---

# system.mes.schedule.shift.getCurrentShiftRecord

## Description

Gets the current [Schedule Shift Records](../../data-model/schedule-shift-model/schedule-shift-record) at the given
location. Optionally, you can specify a timestamp (milliseconds since epoch) to get the record active at that moment.

## Syntax

```python
system.mes.schedule.shift.getCurrentShiftRecord(locationIdOrPath)
system.mes.schedule.shift.getCurrentShiftRecord(locationIdOrPath, timestampMillis)
```

## Parameters

### Method 1: By Location at Current Time

| Parameter          | Type     | Nullable | Description                                                   |
|--------------------|----------|----------|---------------------------------------------------------------|
| `locationIdOrPath` | `String` | False    | The location ID or path to find the current shift record for. |

### Method 2: By Location at Specific Timestamp

| Parameter          | Type     | Nullable | Description                                                                 |
|--------------------|----------|----------|-----------------------------------------------------------------------------|
| `locationIdOrPath` | `String` | False    | The location ID or path to find the current shift record for.               |
| `timestampMillis`  | `Long`   | True     | The timestamp (ms since epoch) to evaluate. If null, uses the current time. |

## Returns

Returns a JSON representation of the schedule shift record. Returns nothing if no record is found.

| Name              | Type            | Description                                                                                   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------|
| `startDate`       | `DateTime`      | Actual start date/time when the shift began.                                                  |
| `endDate`         | `DateTime`      | Actual end date/time when the shift ended (null until stopped).                               |
| `status`          | `String` (Enum) | Current status (`IDLE`, `RUNNING`, `COMPLETED`, `FAULTED`, `CANCELLED`, `UNKNOWN`, `PAUSED`). |
| `locationId`      | `String` (ULID) | The ULID of the location where the shift runs.                                                |
| `scheduleShiftId` | `String` (ULID) | The ULID of the schedule shift definition this record belongs to.                             |
| `id`              | `String` (ULID) | The ULID of the schedule shift record.                                                        |
| `notes`           | `String`        | Notes related to the record.                                                                  |
| `enabled`         | `Boolean`       | Indicates if the record is active and enabled.                                                |
| `spare1`          | `String`        | Additional field for user-defined context.                                                    |
| `spare2`          | `String`        | Additional field for user-defined context.                                                    |
| `spare3`          | `String`        | Additional field for user-defined context.                                                    |

## Code Examples

```python
# Current record for a location
rec = system.mes.schedule.shift.getCurrentShiftRecord('DairyCo/Plant1/Line1')
print(rec)

# Current record at a given timestamp
recAtTime = system.mes.schedule.shift.getCurrentShiftRecord('DairyCo/Plant1/Line1', 1735689600000)
print(recAtTime)
```
