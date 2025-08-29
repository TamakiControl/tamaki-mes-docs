---
sidebar_position: 15
title: "getShiftRecord"
description: "Retrieves a shift record by ID."
---

# system.mes.shift.getShiftRecord

## Description

Retrieves a [Shift Records](../../data-model/shift-model/shift-record) record by its ID.

## Syntax

```python
system.mes.shift.getShiftRecord(id)
```

## Parameters

| Parameter | Type     | Nullable | Description                           |
|-----------|----------|----------|---------------------------------------|
| `id`      | `String` | False    | The ID of the shift record to retrieve. |

## Returns

Returns a JSON representation of the shift record. Returns nothing if no record is found.

| Name         | Type            | Description                                              |
|--------------|-----------------|----------------------------------------------------------|
| `startDate`  | `DateTime`      | Actual start date/time when the shift began.             |
| `endDate`    | `DateTime`      | Actual end date/time when the shift ended (until stopped). |
| `status`     | `String` (Enum) | Current status (`IDLE`, `ACTIVE`, `CLOSED`, `VERIFIED`). |
| `locationId` | `String` (ULID) | The ULID of the location where the shift runs.          |
| `shiftId`    | `String` (ULID) | The ULID of the shift configuration this record belongs to. |
| `id`         | `String` (ULID) | The ULID of the shift record.                           |
| `notes`      | `String`        | Notes related to the record.                            |
| `enabled`    | `Boolean`       | Indicates if the record is active and enabled.          |
| `spare1`     | `String`        | Additional field for user-defined context.              |
| `spare2`     | `String`        | Additional field for user-defined context.              |
| `spare3`     | `String`        | Additional field for user-defined context.              |

## Code Examples

```python
record = system.mes.shift.getShiftRecord('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
print(record)
```
