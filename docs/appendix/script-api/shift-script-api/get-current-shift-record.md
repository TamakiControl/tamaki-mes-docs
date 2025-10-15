---
sidebar_position: 16
title: "getCurrentShiftRecord"
description: "Gets the current shift record for a location, optionally at a specific timestamp."
---

# system.mes.shift.getCurrentShiftRecord

## Description

Gets the current [Shift Records](../../data-model/shift-model/shift-record) at the given
location. Optionally, you can specify a timestamp (milliseconds since epoch) to get the record active at that moment.


## Permissions

This method requires the `SHIFT.READ.GET` permission.

## Syntax

```python
system.mes.shift.getCurrentShiftRecord(locationIdOrPath)
system.mes.shift.getCurrentShiftRecord(locationIdOrPath, timestampMillis)
```

## Parameters

### Method 1: By Location at Current Time

| Parameter          | Type     | Nullable | Description                                                   |
|--------------------|----------|----------|---------------------------------------------------------------|
| `locationIdOrPath` | `String` | False    | The location ID or path to find the current shift record for. |

### Method 2: By Location at Specific Timestamp

| Parameter          | Type   | Nullable | Description                                                                 |
|--------------------|--------|----------|-----------------------------------------------------------------------------|
| `locationIdOrPath` | String | False    | The location ID or path to find the current shift record for.               |
| `timestampMillis`  | Long   | True     | The timestamp (ms since epoch) to evaluate. If null, uses the current time. |

## Returns

Returns a JSON representation of the shift record. Returns nothing if no record is found.

| Name         | Type            | Description                                         |
|--------------|-----------------|-----------------------------------------------------|
| `startDate`  | `DateTime`      | Actual start date/time when the shift began.        |
| `endDate`    | `DateTime`      | Actual end date/time when the shift ended.          |
| `status`     | `String` (Enum) | Current status (`IDLE`, `ACTIVE`, `CLOSED`, `VERIFIED`). |
| `locationId` | `String` (ULID) | The ULID of the location where the shift runs.      |
| `shiftId`    | `String` (ULID) | The ULID of the shift configuration for this record.|
| `shiftName`  | `String`        | The name of the shift configuration.                |
| `id`         | `String` (ULID) | The ULID of the shift record.                       |
| `notes`      | `String`        | Notes related to the record.                        |
| `enabled`    | `Boolean`       | Indicates if the record is active and enabled.      |
| `spare1`     | `String`        | Additional field for user-defined context.          |
| `spare2`     | `String`        | Additional field for user-defined context.          |
| `spare3`     | `String`        | Additional field for user-defined context.          |

## Code Examples

```python
# Current record for a location
rec = system.mes.shift.getCurrentShiftRecord('DairyCo/Plant1/Line1')
print(rec)

# Current record at a given timestamp
recAtTime = system.mes.shift.getCurrentShiftRecord('DairyCo/Plant1/Line1', 1735689600000)
print(recAtTime)
```
