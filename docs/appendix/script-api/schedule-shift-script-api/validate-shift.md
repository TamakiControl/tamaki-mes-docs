---
sidebar_position: 8
title: "validateShift"
description: "Validates a schedule shift object and returns any validation errors."
---

# system.mes.schedule.shift.validateShift

## Description

Validates the specified parameters for a [Schedule Shifts](../../data-model/schedule-shift-model/schedule-shift) record
and returns any validation errors. This only checks if the object can be saved based on the attributes given.

## Syntax

```python
system.mes.schedule.shift.validateShift(**shift_data)
```

## Parameters

| Parameter                 | Type            | Nullable | Description                                                                                           |
|---------------------------|-----------------|----------|-------------------------------------------------------------------------------------------------------|
| `locationId`              | `String` (ULID) | False    | The ULID of the location where the shift runs.                                                        |
| `locationPath`            | `String`        | True     | The path of the location where the shift runs. For display purposes.                                  |
| `name`                    | `String`        | False    | The name of the schedule shift.                                                                       |
| `description`             | `String`        | True     | A detailed description of the schedule shift.                                                         |
| `scheduleName`            | `String`        | False    | The name of the schedule that defines this shift's timings.                                           |
| `scheduleSource`          | `String` (Enum) | False    | The source of the schedule (e.g., `IGNITION_SCHEDULE`, `IGNITION_EXPRESSION`, `MES_SCHEDULE`).        |
| `currentRecordId`         | `String` (ULID) | True     | The current shift record id for the shift (if any).                                                   |
| `runningConflictStrategy` | `String` (Enum) | False    | Strategy when a new shift starts while another is running (e.g., `STOP_PREVIOUS`, `THROW_EXCEPTION`). |
| `startTriggerExpression`  | `String`        | True     | The expression used to determine when the shift should start.                                         |
| `startTriggerType`        | `String` (Enum) | False    | The trigger mechanism used to start the shift (e.g., `RISING_EDGE`, `FALLING_EDGE`, `CHANGE`).        |
| `stopTriggerExpression`   | `String`        | True     | The expression used to determine when the shift should end.                                           |
| `stopTriggerType`         | `String` (Enum) | False    | The trigger mechanism used to end the shift (e.g., `RISING_EDGE`, `FALLING_EDGE`, `CHANGE`).          |
| `id`                      | `String` (ULID) | True     | The ULID of the schedule shift.                                                                       |
| `notes`                   | `String`        | True     | Notes related to the schedule shift.                                                                  |
| `enabled`                 | `Boolean`       | True     | Indicates if the schedule shift is active and enabled. Default value is `true`.                       |
| `spare1`                  | `String`        | True     | Additional field for user-defined context.                                                            |
| `spare2`                  | `String`        | True     | Additional field for user-defined context.                                                            |
| `spare3`                  | `String`        | True     | Additional field for user-defined context.                                                            |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
shift = system.mes.schedule.shift.newShift()
shift['name'] = ''  # invalid (required)
violations = system.mes.schedule.shift.validateShift(**shift)
print(violations)
```
