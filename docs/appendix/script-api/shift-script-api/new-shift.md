---
sidebar_position: 2
title: "newShift"
description: "Generates an empty Shift object (DTO) to use with saveShift."
---

# system.mes.shift.newShift

## Description

Generates an empty non-persisted [Shifts](../../data-model/shift-model/shift) object to
provide the structure required by the API to save a new record into the database. Use with [saveShift](./save-shift).

## Syntax

```python
system.mes.shift.newShift()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created shift object. The following is a list of keys and default
values:

| Key                       | Default Value       |
|---------------------------|---------------------|
| `name`                    | `null`              |
| `description`             | `null`              |
| `shiftScheduleName`       | `null`              |
| `shiftScheduleSource`     | `IGNITION_SCHEDULE` |
| `locationId`              | `null`              |
| `locationPath`            | `null`              |
| `currentRecordId`         | `null`              |
| `runningConflictStrategy` | `STOP_PREVIOUS`     |
| `startTriggerExpression`  | `null`              |
| `startTriggerType`        | `RISING_EDGE`       |
| `stopTriggerExpression`   | `null`              |
| `stopTriggerType`         | `FALLING_EDGE`      |
| `id`                      | `null`              |
| `notes`                   | `null`              |
| `enabled`                 | `true`              |
| `spare1`                  | `null`              |
| `spare2`                  | `null`              |
| `spare3`                  | `null`              |

Valid values for `shiftScheduleSource` are `IGNITION_SCHEDULE`, `IGNITION_EXPRESSION`.

## Code Examples

```python
# Create an empty Shift object
shift = system.mes.shift.newShift()

# Populate required fields
shift['locationId'] = '01JAP8RJBN-8ZTPXSGY-J9GSDPE1'
shift['name'] = 'Morning Shift'
shift['shiftScheduleName'] = 'Weekday Schedule'
shift['shiftScheduleSource'] = 'IGNITION_SCHEDULE'
shift['startTriggerType'] = 'RISING_EDGE'
shift['stopTriggerType'] = 'FALLING_EDGE'

# Save the shift
saved = system.mes.shift.saveShift(**shift)
print(saved)
```
