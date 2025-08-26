---
sidebar_position: 18
title: "saveShiftRecord"
description: "Creates or updates a schedule shift record with specified parameters."
---

# system.mes.schedule.shift.saveShiftRecord

## Description

Creates or updates a [Schedule Shift Records](../../data-model/schedule-shift-model/schedule-shift-record) in the system
based on the provided parameters.

## Syntax

```python
system.mes.schedule.shift.saveShiftRecord(**record_data)
```

## Parameters

| Parameter         | Type            | Nullable | Description                                                                                   |
|-------------------|-----------------|----------|-----------------------------------------------------------------------------------------------|
| `locationId`      | `String` (ULID) | False    | The ULID of the location where the shift runs.                                                |
| `scheduleShiftId` | `String` (ULID) | False    | The ULID of the schedule shift definition this record belongs to.                             |
| `startDate`       | `DateTime`      | True     | Actual start date/time when the shift began.                                                  |
| `endDate`         | `DateTime`      | True     | Actual end date/time when the shift ended.                                                    |
| `status`          | `String` (Enum) | False    | Current status (`IDLE`, `RUNNING`, `COMPLETED`, `FAULTED`, `CANCELLED`, `UNKNOWN`, `PAUSED`). |
| `id`              | `String` (ULID) | True     | The ULID of the schedule shift record (optional, used for updates).                           |
| `notes`           | `String`        | True     | Notes related to the record.                                                                  |
| `enabled`         | `Boolean`       | True     | Indicates if the record is active and enabled. Default value is `true`.                       |
| `spare1`          | `String`        | True     | Additional field for user-defined context.                                                    |
| `spare2`          | `String`        | True     | Additional field for user-defined context.                                                    |
| `spare3`          | `String`        | True     | Additional field for user-defined context.                                                    |

## Returns

Returns a JSON representation of the saved schedule shift record.

## Code Examples

```python
# Create a new record (typically use startShift instead)
rec = system.mes.schedule.shift.newShiftRecord()
rec['scheduleShiftId'] = '01JAP8RJBN-8ZTPXSGY-J9GSDPE1'
rec['locationId'] = '01JAP8RJBN-8ZTPXSGY-J9GSDPE1'
rec['status'] = 'RUNNING'

saved = system.mes.schedule.shift.saveShiftRecord(**rec)
print(saved)

# Update an existing record
rec2 = system.mes.schedule.shift.newShiftRecord()
rec2['id'] = saved.id
rec2['status'] = 'COMPLETED'

updated = system.mes.schedule.shift.saveShiftRecord(**rec2)
print(updated)
```
