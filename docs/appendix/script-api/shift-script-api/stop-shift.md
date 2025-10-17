---
sidebar_position: 13
title: "stopShift"
description: "Stops a shift by ID or by location and name; returns the updated shift record."
---

# system.mes.shift.stopShift

## Description

Stops a [Shifts](../../data-model/shift-model/shift). This updates the current [Shift Records](../../data-model/shift-model/shift-record) entry with the given end time (optional; defaults to now).


## Permissions

This method requires the `SHIFT.EXECUTE` permission.

## Syntax

```python
system.mes.shift.stopShift(shiftId)
system.mes.shift.stopShift(shiftId, endDateMillis)
system.mes.shift.stopShift(locationIdOrPath, name)
system.mes.shift.stopShift(locationIdOrPath, name, endDateMillis)
```

## Parameters

### Method 1: Stop by Shift ID (Now)

| Parameter | Type            | Nullable | Description                    |
|-----------|-----------------|----------|--------------------------------|
| `shiftId` | `String` (ULID) | False    | The ID of the shift to stop.   |

### Method 2: Stop by Shift ID and End Date (Millis)

| Parameter       | Type            | Nullable | Description                          |
|-----------------|-----------------|----------|--------------------------------------|
| `shiftId`       | `String` (ULID) | False    | The ID of the shift to stop.         |
| `endDateMillis` | `Long`          | False    | End time in milliseconds since epoch.|

### Method 3: Stop by Location and Name (Now)

| Parameter          | Type     | Nullable | Description                                         |
|--------------------|----------|----------|-----------------------------------------------------|
| `locationIdOrPath` | `String` | False    | The location ID or path where the shift is defined. |
| `name`             | `String` | False    | The name of the shift to stop.                      |

### Method 4: Stop by Location, Name, and End Date (Millis)

| Parameter          | Type   | Nullable | Description                                         |
|--------------------|--------|----------|-----------------------------------------------------|
| `locationIdOrPath` | String | False    | The location ID or path where the shift is defined. |
| `name`             | String | False    | The name of the shift to stop.                      |
| `endDateMillis`    | Long   | False    | End time in milliseconds since epoch.               |

## Returns

Returns a JSON representation of the updated shift record.

| Name         | Type            | Description                                              |
|--------------|-----------------|----------------------------------------------------------|
| `startDate`  | `DateTime`      | Actual start date/time when the shift began.             |
| `endDate`    | `DateTime`      | Actual end date/time when the shift ended (set on stop). |
| `status`     | `String` (Enum) | Current status (`IDLE`, `ACTIVE`, `CLOSED`, `VERIFIED`). |
| `locationId` | `String` (ULID) | The location where the shift runs.                       |
| `shiftId`    | `String` (ULID) | The shift configuration this record belongs to.          |
| `id`         | `String` (ULID) | The ULID of the shift record.                            |
| `notes`      | `String`        | Notes related to the record.                             |
| `enabled`    | `Boolean`       | Indicates if the record is active and enabled.           |
| `spare1`     | `String`        | Additional field for user-defined context.               |
| `spare2`     | `String`        | Additional field for user-defined context.               |
| `spare3`     | `String`        | Additional field for user-defined context.               |

## Code Examples

```python
# Stop by shift ID (now)
record = system.mes.shift.stopShift('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
print(record)

# Stop by shift ID at a specific time
ts = 1735693200000
record = system.mes.shift.stopShift('01JAP8RJBN-8ZTPXSGY-J9GSDPE1', ts)
print(record)

# Stop by location and name (now)
record = system.mes.shift.stopShift('DairyCo/Plant1/Line1', 'Morning Shift')
print(record)

# Stop by location and name at a specific time
record = system.mes.shift.stopShift('DairyCo/Plant1/Line1', 'Morning Shift', ts)
print(record)
```
