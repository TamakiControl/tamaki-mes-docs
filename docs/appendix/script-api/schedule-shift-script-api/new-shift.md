---
sidebar_position: 2
title: "newShift"
description: "Generates an empty Schedule Shift object (DTO) to use with saveShift."
---

# system.mes.schedule.shift.newShift

## Description

Generates an empty non-persisted [Schedule Shifts](../../data-model/schedule-shift-model/schedule-shift) object to
provide the structure required by the API to save a new record into the database. Use with [saveShift](./save-shift).

## Syntax

```python
system.mes.schedule.shift.newShift()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created schedule shift object. The following is a list of keys and default
values:

| Key                       | Default Value       |
|---------------------------|---------------------|
| `name`                    | `null`              |
| `description`             | `null`              |
| `scheduleName`            | `null`              |
| `scheduleSource`          | `IGNITION_SCHEDULE` |
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

## Code Examples

```python
# Create an empty Schedule Shift object
shift = system.mes.schedule.shift.newShift()

# Populate required fields
shift['locationId'] = '01JAP8RJBN-8ZTPXSGY-J9GSDPE1'
shift['name'] = 'Morning Shift'
shift['scheduleName'] = 'Weekday Schedule'
shift['scheduleSource'] = 'IGNITION_SCHEDULE'
shift['startTriggerType'] = 'RISING_EDGE'
shift['stopTriggerType'] = 'FALLING_EDGE'

# Save the shift
saved = system.mes.schedule.shift.saveShift(**shift)
print(saved)
```
