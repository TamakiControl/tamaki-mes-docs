---
sidebar_position: 12
title: "startShift"
description: "Starts a shift by ID or by location and name; returns the created shift record."
---

# system.mes.shift.startShift

## Description

Starts a [Shifts](../../data-model/shift-model/shift). This creates a new [Shift Records](../../data-model/shift-model/shift-record) entry with the given start time (optional; defaults to now).

## Syntax

```python
system.mes.shift.startShift(shiftId)
system.mes.shift.startShift(shiftId, startDateMillis)
system.mes.shift.startShift(locationIdOrPath, name)
system.mes.shift.startShift(locationIdOrPath, name, startDateMillis)
```

## Parameters

### Method 1: Start by Shift ID (Now)

| Parameter | Type            | Nullable | Description                   |
|-----------|-----------------|----------|-------------------------------|
| `shiftId` | `String` (ULID) | False    | The ID of the shift to start. |

### Method 2: Start by Shift ID and Start Date (Millis)

| Parameter         | Type            | Nullable | Description                             |
|-------------------|-----------------|----------|-----------------------------------------|
| `shiftId`         | `String` (ULID) | False    | The ID of the shift to start.           |
| `startDateMillis` | `Long`          | False    | Start time in milliseconds since epoch. |

### Method 3: Start by Location and Name (Now)

| Parameter          | Type     | Nullable | Description                                           |
|--------------------|----------|----------|-------------------------------------------------------|
| `locationIdOrPath` | `String` | False    | The location ID or path where the shift is defined.   |
| `name`             | `String` | False    | The name of the shift to start.                       |

### Method 4: Start by Location, Name, and Start Date (Millis)

| Parameter          | Type   | Nullable | Description                                           |
|--------------------|--------|----------|-------------------------------------------------------|
| `locationIdOrPath` | String | False    | The location ID or path where the shift is defined.   |
| `name`             | String | False    | The name of the shift to start.                       |
| `startDateMillis`  | Long   | False    | Start time in milliseconds since epoch.               |

## Returns

Returns a JSON representation of the created shift record.

| Name         | Type            | Description                                                |
|--------------|-----------------|------------------------------------------------------------|
| `startDate`  | `DateTime`      | Actual start date/time when the shift began.               |
| `endDate`    | `DateTime`      | Actual end date/time when the shift ended (until stopped). |
| `status`     | `String` (Enum) | Current status (`IDLE`, `ACTIVE`, `CLOSED`, `VERIFIED`).   |
| `locationId` | `String` (ULID) | The location where the shift runs.                         |
| `shiftId`    | `String` (ULID) | The shift configuration this record belongs to.            |
| `id`         | `String` (ULID) | The ULID of the shift record.                              |
| `notes`      | `String`        | Notes related to the record.                               |
| `enabled`    | `Boolean`       | Indicates if the record is active and enabled.             |
| `spare1`     | `String`        | Additional field for user-defined context.                 |
| `spare2`     | `String`        | Additional field for user-defined context.                 |
| `spare3`     | `String`        | Additional field for user-defined context.                 |

## Code Examples

```python
# Start by shift ID (now)
record = system.mes.shift.startShift('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
print(record)

# Start by shift ID at a specific time
ts = 1735689600000
record = system.mes.shift.startShift('01JAP8RJBN-8ZTPXSGY-J9GSDPE1', ts)
print(record)

# Start by location and name (now)
record = system.mes.shift.startShift('DairyCo/Plant1/Line1', 'Morning Shift')
print(record)

# Start by location and name at a specific time
record = system.mes.shift.startShift('DairyCo/Plant1/Line1', 'Morning Shift', ts)
print(record)
```
