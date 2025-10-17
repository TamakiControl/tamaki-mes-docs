---
sidebar_position: 14
title: 'newShiftRecord'
description: 'Generates an empty Shift Record object (DTO) to use with saveShiftRecord.'
---

# system.mes.shift.newShiftRecord

## Description

Generates an empty non-persisted [Shift Records](../../data-model/shift-model/shift-record)
object to provide the structure required by the API to save a new record into the database. Use
with [saveShiftRecord](./save-shift-record).

## Permissions

This method does not require any permissions.

## Syntax

```python
system.mes.shift.newShiftRecord()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created shift record object. The following is a list of keys and
default values:

| Key            | Default Value |
| -------------- | ------------- |
| `startDate`    | `null`        |
| `endDate`      | `null`        |
| `status`       | `IDLE`        |
| `locationId`   | `null`        |
| `locationPath` | `null`        |
| `shiftId`      | `null`        |
| `shiftName`    | `null`        |
| `id`           | `null`        |
| `notes`        | `null`        |
| `enabled`      | `true`        |
| `spare1`       | `null`        |
| `spare2`       | `null`        |
| `spare3`       | `null`        |

## Code Examples

```python
# Create an empty Shift Record object
record = system.mes.shift.newShiftRecord()

# Populate fields (optional; many are set by start/stop methods)
record['shiftId'] = '01JAP8RJBN-8ZTPXSGY-J9GSDPE1'
record['locationId'] = '01JAP8RJBN-8ZTPXSGY-J9GSDPE1'

# Save the record
saved = system.mes.shift.saveShiftRecord(**record)
print(saved)
```
