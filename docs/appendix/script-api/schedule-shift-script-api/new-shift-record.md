---
sidebar_position: 14
title: "newShiftRecord"
description: "Generates an empty Schedule Shift Record object (DTO) to use with saveShiftRecord."
---

# system.mes.schedule.shift.newShiftRecord

## Description

Generates an empty non-persisted [Schedule Shift Records](../../data-model/schedule-shift-model/schedule-shift-record)
object to provide the structure required by the API to save a new record into the database. Use
with [saveShiftRecord](./save-shift-record).

## Syntax

```python
system.mes.schedule.shift.newShiftRecord()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created schedule shift record object. The following is a list of keys and
default values:

| Key               | Default Value |
|-------------------|---------------|
| `startDate`       | `null`        |
| `endDate`         | `null`        |
| `status`          | `null`        |
| `locationId`      | `null`        |
| `scheduleShiftId` | `null`        |
| `id`              | `null`        |
| `notes`           | `null`        |
| `enabled`         | `true`        |
| `spare1`          | `null`        |
| `spare2`          | `null`        |
| `spare3`          | `null`        |

## Code Examples

```python
# Create an empty Schedule Shift Record object
record = system.mes.schedule.shift.newShiftRecord()

# Populate fields (optional; many are set by start/stop methods)
record['scheduleShiftId'] = '01JAP8RJBN-8ZTPXSGY-J9GSDPE1'
record['locationId'] = '01JAP8RJBN-8ZTPXSGY-J9GSDPE1'

# Save the record
saved = system.mes.schedule.shift.saveShiftRecord(**record)
print(saved)
```
