---
sidebar_position: 3
title: "getShift"
description: "Retrieves a Shift by ID, or by location and name."
---

# system.mes.shift.getShift

## Description

Retrieves a [Shifts](../../data-model/shift-model/shift) record either by its ID, or by `locationIdOrPath` and `name`.


## Permissions

This method requires the `SHIFT.READ.GET` permission.

## Syntax

```python
system.mes.shift.getShift(id)
system.mes.shift.getShift(locationIdOrPath, name)
```

## Parameters

### Method 1: Get by ID

| Parameter | Type     | Nullable | Description                      |
|-----------|----------|----------|----------------------------------|
| `id`      | `String` | False    | The ID of the shift to retrieve. |

### Method 2: Get by Location and Name

| Parameter          | Type     | Nullable | Description                                             |
|--------------------|----------|----------|---------------------------------------------------------|
| `locationIdOrPath` | `String` | False    | The location ID or path where the shift is defined.     |
| `name`             | `String` | False    | The name of the shift to retrieve.                      |

## Returns

Returns a JSON representation of the shift. Returns nothing if no shift is found.

| Name                      | Type            | Description                                                                                         |
|---------------------------|-----------------|-----------------------------------------------------------------------------------------------------|
| `name`                    | `String`        | The shift name.                                                                                     |
| `description`             | `String`        | Description of the shift.                                                                           |
| `shiftScheduleName`       | `String`        | The name of the schedule defining this shift's timings.                                             |
| `shiftScheduleSource`     | `String`        | The source of the schedule (e.g., `IGNITION_SCHEDULE`, `IGNITION_EXPRESSION`).      |
| `locationId`              | `String` (ULID) | The location where the shift runs.                                                                  |
| `locationPath`            | `String`        | The path of the location (for display purposes).                                                    |
| `currentRecordId`         | `String` (ULID) | The current shift record id, if any.                                                                |
| `runningConflictStrategy` | `String`        | Strategy for conflicts (e.g., `STOP_PREVIOUS`, `THROW_EXCEPTION`).                                  |
| `startTriggerExpression`  | `String`        | Expression used to determine when the shift should start.                                           |
| `startTriggerType`        | `String`        | Trigger type used to start the shift (e.g., `RISING_EDGE`, `FALLING_EDGE`, `CHANGE`).               |
| `stopTriggerExpression`   | `String`        | Expression used to determine when the shift should end.                                             |
| `stopTriggerType`         | `String`        | Trigger type used to end the shift (e.g., `RISING_EDGE`, `FALLING_EDGE`, `CHANGE`).                 |
| `id`                      | `String` (ULID) | The ULID of the shift.                                                                              |
| `notes`                   | `String`        | Notes related to the shift.                                                                         |
| `enabled`                 | `Boolean`       | Indicates if the shift is active and enabled.                                                       |
| `spare1`                  | `String`        | Additional field for user-defined context.                                                          |
| `spare2`                  | `String`        | Additional field for user-defined context.                                                          |
| `spare3`                  | `String`        | Additional field for user-defined context.                                                          |

## Code Examples

```python
# By ID
shift = system.mes.shift.getShift('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
print(shift)

# By location and name
shift = system.mes.shift.getShift('DairyCo/Plant1/Line1', 'Morning Shift')
print(shift)
```
