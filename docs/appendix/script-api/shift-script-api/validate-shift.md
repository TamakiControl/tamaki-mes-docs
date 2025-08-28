---
sidebar_position: 8
title: "validateShift"
description: "Validates a shift object and returns any validation errors."
---

# system.mes.shift.validateShift

## Description

Validates the specified parameters for a [Shifts](../../data-model/shift-model/shift) record
and returns any validation errors. This only checks if the object can be saved based on the attributes given.

## Syntax

```python
system.mes.shift.validateShift(**shift_data)
```

## Parameters

| Parameter                 | Type            | Nullable | Description                                                                                           |
|---------------------------|-----------------|----------|-------------------------------------------------------------------------------------------------------|
| `locationId`              | `String` (ULID) | False    | The ULID of the location where the shift runs.                                                        |
| `locationPath`            | `String`        | True     | The path of the location where the shift runs. For display purposes.                                  |
| `name`                    | `String`        | False    | The name of the shift.                                                                                |
| `description`             | `String`        | True     | A detailed description of the shift.                                                                  |
| `shiftScheduleName`       | `String`        | True     | The name of the schedule that defines this shift's timings (when using schedule-based timing).        |
| `shiftScheduleSource`     | `String` (Enum) | False    | The source of timing (e.g., `IGNITION_SCHEDULE`, `IGNITION_EXPRESSION`, `MES_SCHEDULE`).              |
| `currentRecordId`         | `String` (ULID) | True     | The current shift record id for the shift (if any).                                                   |
| `runningConflictStrategy` | `String` (Enum) | False    | Strategy when a new shift starts while another is running (e.g., `STOP_PREVIOUS`, `THROW_EXCEPTION`). |
| `startTriggerExpression`  | `String`        | True     | The expression used to determine when the shift should start.                                         |
| `startTriggerType`        | `String` (Enum) | False    | The trigger mechanism used to start the shift (e.g., `RISING_EDGE`, `FALLING_EDGE`, `CHANGE`).        |
| `stopTriggerExpression`   | `String`        | True     | The expression used to determine when the shift should end.                                           |
| `stopTriggerType`         | `String` (Enum) | False    | The trigger mechanism used to end the shift (e.g., `RISING_EDGE`, `FALLING_EDGE`, `CHANGE`).          |
| `id`                      | `String` (ULID) | True     | The ULID of the shift.                                                                                |
| `notes`                   | `String`        | True     | Notes related to the shift.                                                                           |
| `enabled`                 | `Boolean`       | True     | Indicates if the shift is active and enabled. Default value is `true`.                                |
| `spare1`                  | `String`        | True     | Additional field for user-defined context.                                                            |
| `spare2`                  | `String`        | True     | Additional field for user-defined context.                                                            |
| `spare3`                  | `String`        | True     | Additional field for user-defined context.                                                            |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
shift = system.mes.shift.newShift()
shift['name'] = ''  # invalid (required)
violations = system.mes.shift.validateShift(**shift)
print(violations)
```
