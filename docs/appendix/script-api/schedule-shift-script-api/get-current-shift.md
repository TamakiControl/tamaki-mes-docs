---
sidebar_position: 6
title: "getCurrentShift"
description: "Gets the current schedule shift for a location, optionally at a specified timestamp."
---

# system.mes.schedule.shift.getCurrentShift

## Description

Gets the current [Schedule Shifts](../../data-model/schedule-shift-model/schedule-shift) at the given location.
Optionally, you can specify a timestamp (milliseconds since epoch) to get the shift active at that moment.

## Syntax

```python
system.mes.schedule.shift.getCurrentShift(locationIdOrPath)
system.mes.schedule.shift.getCurrentShift(locationIdOrPath, timestampMillis)
```

## Parameters

### Method 1: By Location at Current Time

| Parameter          | Type     | Nullable | Description                                            |
|--------------------|----------|----------|--------------------------------------------------------|
| `locationIdOrPath` | `String` | False    | The location ID or path to find the current shift for. |

### Method 2: By Location at Specific Timestamp

| Parameter          | Type     | Nullable | Description                                                                 |
|--------------------|----------|----------|-----------------------------------------------------------------------------|
| `locationIdOrPath` | `String` | False    | The location ID or path to find the current shift for.                      |
| `timestampMillis`  | `Long`   | True     | The timestamp (ms since epoch) to evaluate. If null, uses the current time. |

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
# Current shift for a location
shift = system.mes.schedule.shift.getCurrentShift('DairyCo/Plant1/Line1')
print(shift)

# Current shift at a given timestamp
shiftAtTime = system.mes.schedule.shift.getCurrentShift('DairyCo/Plant1/Line1', 1735689600000)
print(shiftAtTime)
```
