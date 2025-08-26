---
sidebar_position: 3
title: "getShift"
description: "Retrieves a Schedule Shift by ID, or by location and name."
---

# system.mes.schedule.shift.getShift

## Description

Retrieves a [Schedule Shifts](../../data-model/schedule-shift-model/schedule-shift) record either by its ID, or by
`locationIdOrPath` and `name`.

## Syntax

```python
system.mes.schedule.shift.getShift(id)
system.mes.schedule.shift.getShift(locationIdOrPath, name)
```

## Parameters

### Method 1: Get by ID

| Parameter | Type     | Nullable | Description                               |
|-----------|----------|----------|-------------------------------------------|
| `id`      | `String` | False    | The ID of the schedule shift to retrieve. |

### Method 2: Get by Location and Name

| Parameter          | Type     | Nullable | Description                                                  |
|--------------------|----------|----------|--------------------------------------------------------------|
| `locationIdOrPath` | `String` | False    | The location ID or path where the schedule shift is defined. |
| `name`             | `String` | False    | The name of the schedule shift to retrieve.                  |

## Returns

Returns a JSON representation of the schedule shift. Returns nothing if no schedule shift is found.

| Name                      | Type            | Description                                                                |
|---------------------------|-----------------|----------------------------------------------------------------------------|
| `name`                    | `String`        | The shift name.                                                            |
| `description`             | `String`        | Description of the shift.                                                  |
| `scheduleName`            | `String`        | The name of the schedule defining this shift's timings.                    |
| `scheduleSource`          | `String`        | The source of the schedule (e.g., IGNITION_SCHEDULE, IGNITION_EXPRESSION). |
| `locationId`              | `String` (ULID) | The location where the shift runs.                                         |
| `locationPath`            | `String`        | The path of the location (for display purposes).                           |
| `currentRecordId`         | `String` (ULID) | The current shift record id, if any.                                       |
| `runningConflictStrategy` | `String`        | Strategy for handling conflicts when starting overlapping shifts.          |
| `startTriggerExpression`  | `String`        | Expression used to determine when the shift should start.                  |
| `startTriggerType`        | `String`        | Trigger type used to start the shift.                                      |
| `stopTriggerExpression`   | `String`        | Expression used to determine when the shift should end.                    |
| `stopTriggerType`         | `String`        | Trigger type used to end the shift.                                        |
| `id`                      | `String` (ULID) | The ULID of the schedule shift.                                            |
| `notes`                   | `String`        | Notes related to the schedule shift.                                       |
| `enabled`                 | `Boolean`       | Indicates if the schedule shift is active and enabled.                     |
| `spare1`                  | `String`        | Additional field for user-defined context.                                 |
| `spare2`                  | `String`        | Additional field for user-defined context.                                 |
| `spare3`                  | `String`        | Additional field for user-defined context.                                 |

## Code Examples

```python
# By ID
shift = system.mes.schedule.shift.getShift('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
print(shift)

# By location and name
shift = system.mes.schedule.shift.getShift('DairyCo/Plant1/Line1', 'Morning Shift')
print(shift)
```
