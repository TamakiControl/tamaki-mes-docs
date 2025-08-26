---
sidebar_position: 13
title: "stopShift"
description: "Stops a shift by schedule shift ID or by location and name; returns the updated shift record."
---

# system.mes.schedule.shift.stopShift

## Description

Stops a [Schedule Shifts](../../data-model/schedule-shift-model/schedule-shift). This updates the
current [Schedule Shift Records](../../data-model/schedule-shift-model/schedule-shift-record) entry with the given end
time (optional; defaults to now).

## Syntax

```python
system.mes.schedule.shift.stopShift(scheduleShiftId)
system.mes.schedule.shift.stopShift(scheduleShiftId, endDateMillis)
system.mes.schedule.shift.stopShift(locationIdOrPath, name)
system.mes.schedule.shift.stopShift(locationIdOrPath, name, endDateMillis)
```

## Parameters

### Method 1: Stop by Schedule Shift ID (Now)

| Parameter         | Type            | Nullable | Description                           |
|-------------------|-----------------|----------|---------------------------------------|
| `scheduleShiftId` | `String` (ULID) | False    | The ID of the schedule shift to stop. |

### Method 2: Stop by Schedule Shift ID and End Date (Millis)

| Parameter         | Type            | Nullable | Description                           |
|-------------------|-----------------|----------|---------------------------------------|
| `scheduleShiftId` | `String` (ULID) | False    | The ID of the schedule shift to stop. |
| `endDateMillis`   | `Long`          | False    | End time in milliseconds since epoch. |

### Method 3: Stop by Location and Name (Now)

| Parameter          | Type     | Nullable | Description                                                  |
|--------------------|----------|----------|--------------------------------------------------------------|
| `locationIdOrPath` | `String` | False    | The location ID or path where the schedule shift is defined. |
| `name`             | `String` | False    | The name of the schedule shift to stop.                      |

### Method 4: Stop by Location, Name, and End Date (Millis)

| Parameter          | Type     | Nullable | Description                                                  |
|--------------------|----------|----------|--------------------------------------------------------------|
| `locationIdOrPath` | `String` | False    | The location ID or path where the schedule shift is defined. |
| `name`             | `String` | False    | The name of the schedule shift to stop.                      |
| `endDateMillis`    | `Long`   | False    | End time in milliseconds since epoch.                        |

## Returns

Returns a JSON representation of the updated schedule shift record.

| Name              | Type            | Description                                                                                   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------|
| `startDate`       | `DateTime`      | Actual start date/time when the shift began.                                                  |
| `endDate`         | `DateTime`      | Actual end date/time when the shift ended (set on stop).                                      |
| `status`          | `String` (Enum) | Current status (`IDLE`, `RUNNING`, `COMPLETED`, `FAULTED`, `CANCELLED`, `UNKNOWN`, `PAUSED`). |
| `locationId`      | `String` (ULID) | The location where the shift runs.                                                            |
| `scheduleShiftId` | `String` (ULID) | The schedule shift definition this record belongs to.                                         |
| `id`              | `String` (ULID) | The ULID of the schedule shift record.                                                        |
| `notes`           | `String`        | Notes related to the record.                                                                  |
| `enabled`         | `Boolean`       | Indicates if the record is active and enabled.                                                |
| `spare1`          | `String`        | Additional field for user-defined context.                                                    |
| `spare2`          | `String`        | Additional field for user-defined context.                                                    |
| `spare3`          | `String`        | Additional field for user-defined context.                                                    |

## Code Examples

```python
# Stop by shift ID (now)
record = system.mes.schedule.shift.stopShift('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
print(record)

# Stop by shift ID at a specific time
ts = 1735693200000
record = system.mes.schedule.shift.stopShift('01JAP8RJBN-8ZTPXSGY-J9GSDPE1', ts)
print(record)

# Stop by location and name (now)
record = system.mes.schedule.shift.stopShift('DairyCo/Plant1/Line1', 'Morning Shift')
print(record)

# Stop by location and name at a specific time
record = system.mes.schedule.shift.stopShift('DairyCo/Plant1/Line1', 'Morning Shift', ts)
print(record)
```
