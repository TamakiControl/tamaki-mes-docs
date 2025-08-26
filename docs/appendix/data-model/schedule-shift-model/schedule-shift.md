---
sidebar_position: 1
title: "schedule_shifts"
description: "Documentation for the schedule_shifts table, outlining its columns and structure."
---

# Schedule Shift

## Overview

The `ScheduleShift` entity defines a shift pattern or schedule template within the manufacturing environment. It establishes rules for when shifts begin and end, how conflicts are handled, and where the shift takes place. This entity serves as the foundation for scheduling production activities across different time periods.

## Table Structure

The following table outlines the SQL columns for the `schedule_shifts` table, providing a brief description of each, along with sample data where applicable.

| Column                      | Type              | Description                                                                                                                                        | Example                             |
|-----------------------------|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`                        | `String` (ULID)   | Unique identifier for the entity.                                                                                                                  | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`                   | `Boolean`         | If the entity is enabled or not.                                                                                                                   | `true`                              |
| `created_date`              | `DateTime`        | Date the entity was created.                                                                                                                       | `2024-12-31T19:48:44Z`              |
| `created_by`                | `String`          | Person who created the entity.                                                                                                                     | `TamakiMES`                         |
| `modified_date`             | `DateTime`        | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.                                       | `2024-12-31T19:48:44Z`              |
| `modified_by`               | `String`          | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit.                                   | `TamakiMES`                         |
| `notes`                     | `String`          | Notes about the entity.                                                                                                                            | `This entity has these extra notes` |
| `spare1`                    | `String`          | The first spare column that can be used for additional context on the entity.                                                                      | `some extra context 1`              |
| `spare2`                    | `String`          | The second spare column that can be used for additional context on the entity.                                                                     | `some extra context 2`              |
| `spare3`                    | `String`          | The third spare column that can be used for additional context on the entity.                                                                      | `some extra context 3`              |
| `name`                      | `String`          | Name identifier for the schedule shift.                                                                                                            | `Morning Shift`                     |
| `description`               | `String`          | Detailed description of the shift pattern or schedule.                                                                                             | `Morning shift Monday-Friday`       |
| `schedule_name`             | `String`          | Name of schedule that defines this shift's timings.                                                                                                | `Weekday Schedule`                  |
| `schedule_source`           | `String` (Enum)   | Source of the schedule that defines this shift's timings (e.g., `IGNITION_SCHEDULE`, `IGNITION_EXPRESSION`, `MES_SCHEDULE`).                       | `IGNITION_SCHEDULE`                 |
| `running_conflict_strategy` | `String` (Enum)   | Strategy for handling conflicts when a new shift starts while another is still running.                                                            | `STOP_PREVIOUS`                     |
| `start_trigger_expression`  | `String`          | Expression used to determine when the shift should start.                                                                                          | `0 0 6 * * 1-5`                     |
| `start_trigger_type`        | `String` (Enum)   | Type of trigger mechanism used to start the shift (e.g., `RISING_EDGE`, `FALLING_EDGE`, `CHANGE`).                                                 | `RISING_EDGE`                       |
| `stop_trigger_expression`   | `String`          | Expression used to determine when the shift should end.                                                                                            | `0 0 14 * * 1-5`                    |
| `stop_trigger_type`         | `String` (Enum)   | Type of trigger mechanism used to end the shift (e.g., `RISING_EDGE`, `FALLING_EDGE`, `CHANGE`).                                                   | `FALLING_EDGE`                      |
| `location_id`               | `String` (ULID)   | Reference to the location where this schedule shift runs. See [locations](../location-model/location).                                             | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `current_shift_record_id`   | `String` (ULID)   | Reference to the current active shift record for this schedule shift. See [schedule_shift_records](../schedule-shift-model/schedule-shift-record). | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |

## Field Details

### `name` and `description`

These fields provide human-readable identifiers for the shift pattern. The `name` is typically a short identifier, while the `description` provides more detailed information about when and how the shift operates.

### `schedule_name`

References the name of the schedule that defines the timings for this shift. It links the shift pattern to a specific schedule configuration, which may include start/end times, days of the week, and other scheduling rules.

### `schedule_source`

`schedule_source` can have the following values:
- `IGNITION_SCHEDULE`: Requires a corresponding schedule in the Alarming section of the Ignition gateway. See: https://www.docs.inductiveautomation.com/docs/8.1/platform/alarming/alarming-schedules
- `IGNITION_EXPRESSION`: Use start and stop expression triggers.
- `MES_SCHEDULE`: TBD

### `running_conflict_strategy`

Specifies how the system should handle situations where a new shift is triggered to start while another shift is still active. Possible values include:

- `THROW_EXCEPTION`: Throw an exception if a shift is already running.
- `STOP_PREVIOUS`: Stop the previous shift and start a new one.

### `start_trigger_expression` and `start_trigger_type`

Define when and how a shift should start. The `start_trigger_type` specifies the mechanism (such as `RISING_EDGE`, `FALLING_EDGE`, or `CHANGE`), while the `start_trigger_expression` provides the specific configuration for that mechanism.

### `stop_trigger_expression` and `stop_trigger_type`

Define when and how a shift should end. Possible values for `stop_trigger_type` are `RISING_EDGE`, `FALLING_EDGE`, and `CHANGE`.

### `location_id`

References the location where this shift schedule applies. If there is no shift running at the specified location, this field can be null. When looking for the `ScheduleShift` of a specific location, the system will first check if there is a shift running at that location. If not, it will check that location's parent location, and so on, until it finds the first `ScheduleShift` for a location that encompasses its own location.

### `current_shift_record_id`

References the currently active shift record associated with this schedule shift, if one exists. This allows quick access to the current instance of this shift pattern.
