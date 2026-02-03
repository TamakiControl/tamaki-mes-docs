---
sidebar_position: 19
title: "validateShiftRecord"
description: "Validates a shift record object and returns any validation errors."
---

# system.mes.shift.validateShiftRecord

## Description

Validates the specified parameters for a [Shift Records](../../data-model/shift-model/shift-record) record and returns any validation errors. This only checks if the object can be saved based on the attributes given.

## Syntax

```python
system.mes.shift.validateShiftRecord(**recordData)
```

## Parameters

| Parameter     | Type            | Nullable | Description                                              |
|---------------|-----------------|----------|----------------------------------------------------------|
| `locationId`  | `String` (ULID) | False    | The ULID of the location where the shift runs.           |
| `shiftId`     | `String` (ULID) | False    | The ULID of the shift configuration this record belongs to. |
| `startDate`   | `DateTime`      | True     | Actual start date/time when the shift began.             |
| `endDate`     | `DateTime`      | True     | Actual end date/time when the shift ended.               |
| `status`      | `String` (Enum) | False    | Current status (`IDLE`, `ACTIVE`, `CLOSED`, `VERIFIED`). |
| `id`          | `String` (ULID) | True     | The ULID of the shift record.                            |
| `notes`       | `String`        | True     | Notes related to the record.                             |
| `enabled`     | `Boolean`       | True     | Indicates if the record is active and enabled. Default `true`. |
| `spare1`      | `String`        | True     | Additional field for user-defined context.               |
| `spare2`      | `String`        | True     | Additional field for user-defined context.               |
| `spare3`      | `String`        | True     | Additional field for user-defined context.               |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
rec = system.mes.shift.newShiftRecord()
rec['status'] = None  # invalid (required)
violations = system.mes.shift.validateShiftRecord(**rec)
print(violations)
```
