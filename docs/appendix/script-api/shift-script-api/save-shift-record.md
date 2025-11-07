---
sidebar_position: 18
title: "saveShiftRecord"
description: "Creates or updates a shift record with specified parameters."
---

# system.mes.shift.saveShiftRecord

## Description

Creates or updates a [Shift Records](../../data-model/shift-model/shift-record) in the system
based on the provided parameters.

## Syntax

```python
system.mes.shift.saveShiftRecord(**record_data)
```

## Parameters

| Parameter     | Type            | Nullable | Description                                                  |
|---------------|-----------------|----------|--------------------------------------------------------------|
| `locationId`  | `String` (ULID) | False    | The ULID of the location where the shift runs.               |
| `shiftId`     | `String` (ULID) | False    | The ULID of the shift configuration this record belongs to.  |
| `startDate`   | `DateTime`      | True     | Actual start date/time when the shift began.                 |
| `endDate`     | `DateTime`      | True     | Actual end date/time when the shift ended.                   |
| `status`      | `String` (Enum) | False    | Current status (`IDLE`, `ACTIVE`, `CLOSED`, `VERIFIED`).     |
| `id`          | `String` (ULID) | True     | The ULID of the shift record (optional, used for updates).   |
| `notes`       | `String`        | True     | Notes related to the record.                                 |
| `enabled`     | `Boolean`       | True     | Indicates if the record is active and enabled. Default `true`. |
| `spare1`      | `String`        | True     | Additional field for user-defined context.                   |
| `spare2`      | `String`        | True     | Additional field for user-defined context.                   |
| `spare3`      | `String`        | True     | Additional field for user-defined context.                   |

## Returns

Returns a JSON representation of the saved shift record.

## Code Examples

```python
# Create a new record (typically use startShift instead)
rec = system.mes.shift.newShiftRecord()
rec['shiftId'] = '01JAP8RJBN-8ZTPXSGY-J9GSDPE1'
rec['locationId'] = '01JAP8RJBN-8ZTPXSGY-J9GSDPE1'
rec['status'] = 'ACTIVE'

saved = system.mes.shift.saveShiftRecord(**rec)
print(saved)

# Update an existing record
rec2 = system.mes.shift.newShiftRecord()
rec2['id'] = saved.id
rec2['status'] = 'CLOSED'

updated = system.mes.shift.saveShiftRecord(**rec2)
print(updated)
```
