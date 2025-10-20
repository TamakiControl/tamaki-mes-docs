---
sidebar_position: 7
title: "saveShift"
description: "Creates or updates a shift with specified parameters."
---

# system.mes.shift.saveShift

## Description

Creates or updates a [Shifts](../../data-model/shift-model/shift) record in the system based on the provided parameters.


## Permissions

This method requires the `SHIFT.WRITE.SAVE` permission.

## Syntax

```python
system.mes.shift.saveShift(**shift_data)
```

## Parameters

| Parameter                 | Type            | Nullable | Description                                                                                           |
|---------------------------|-----------------|----------|-------------------------------------------------------------------------------------------------------|
| `locationId`              | `String` (ULID) | False    | The ULID of the location where the shift runs.                                                        |
| `locationPath`            | `String`        | True     | The path of the location where the shift runs. For display purposes.                                  |
| `name`                    | `String`        | False    | The name of the shift.                                                                                |
| `description`             | `String`        | True     | A detailed description of the shift.                                                                  |
| `shiftScheduleName`       | `String`        | True     | The name of the schedule that defines this shift's timings (when using schedule-based timing).        |
| `shiftScheduleSource`     | `String` (Enum) | False    | The source of timing (e.g., `IGNITION_SCHEDULE`, `IGNITION_EXPRESSION`).              |
| `currentRecordId`         | `String` (ULID) | True     | The current shift record id for the shift (if any).                                                   |
| `runningConflictStrategy` | `String` (Enum) | False    | Strategy when a new shift starts while another is running (e.g., `STOP_PREVIOUS`, `THROW_EXCEPTION`). |
| `startTriggerExpression`  | `String`        | True     | The expression used to determine when the shift should start.                                         |
| `startTriggerType`        | `String` (Enum) | False    | The trigger mechanism used to start the shift (e.g., `RISING_EDGE`, `FALLING_EDGE`, `CHANGE`).        |
| `stopTriggerExpression`   | `String`        | True     | The expression used to determine when the shift should end.                                           |
| `stopTriggerType`         | `String` (Enum) | False    | The trigger mechanism used to end the shift (e.g., `RISING_EDGE`, `FALLING_EDGE`, `CHANGE`).          |
| `id`                      | `String` (ULID) | True     | The ULID of the shift (optional, used for updating an existing shift).                                |
| `notes`                   | `String`        | True     | Notes related to the shift.                                                                           |
| `enabled`                 | `Boolean`       | True     | Indicates if the shift is active and enabled. Default value is `true`.                                |
| `spare1`                  | `String`        | True     | Additional field for user-defined context.                                                            |
| `spare2`                  | `String`        | True     | Additional field for user-defined context.                                                            |
| `spare3`                  | `String`        | True     | Additional field for user-defined context.                                                            |

## Returns

Returns a JSON representation of the saved shift.

## Code Examples

```python
# Create a new shift and save it
shift = system.mes.shift.newShift()
shift['locationId'] = '01JAP8RJBN-8ZTPXSGY-J9GSDPE1'
shift['name'] = 'Morning Shift'
shift['shiftScheduleName'] = 'Weekday Schedule'
shift['shiftScheduleSource'] = 'IGNITION_SCHEDULE'
shift['startTriggerType'] = 'RISING_EDGE'
shift['stopTriggerType'] = 'FALLING_EDGE'

saved = system.mes.shift.saveShift(**shift)
print(saved)

# Update an existing shift
shift2 = system.mes.shift.newShift()
shift2['id'] = saved.id
shift2['locationId'] = '01JAP8RJBN-8ZTPXSGY-J9GSDPE1'
shift2['name'] = 'Morning Shift'
shift2['shiftScheduleName'] = 'Weekday Schedule'
shift2['shiftScheduleSource'] = 'IGNITION_SCHEDULE'
shift2['startTriggerType'] = 'RISING_EDGE'
shift2['stopTriggerType'] = 'FALLING_EDGE'
shift2['description'] = 'Updated description'

updated = system.mes.shift.saveShift(**shift2)
print(updated)
```
