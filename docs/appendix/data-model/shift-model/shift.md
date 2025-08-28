---
sidebar_position: 1
title: "shifts"
description: "Documentation for the shifts table, outlining its columns and structure."
---

# Shift

## Overview

The `Shift` entity defines a shift configuration at a location. It establishes how a shift is identified, where it runs, how to resolve conflicts with other shifts, and optionally how it starts and stops via schedule/expressions.

## Table Structure

The following table outlines the SQL columns for the `shifts` table, providing a brief description of each, along with sample data where applicable.

| Column                      | Type              | Description                                                                                                             | Example                        |
|----------------------------|-------------------|-------------------------------------------------------------------------------------------------------------------------|--------------------------------|
| `id`                       | `String` (ULID)   | Unique identifier for the entity.                                                                                       | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1` |
| `enabled`                  | `Boolean`         | If the entity is enabled or not.                                                                                        | `true`                         |
| `created_date`             | `DateTime`        | Date the entity was created.                                                                                            | `2024-12-31T19:48:44Z`         |
| `created_by`               | `String`          | Person who created the entity.                                                                                           | `TamakiMES`                    |
| `modified_date`            | `DateTime`        | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.             | `2024-12-31T19:48:44Z`         |
| `modified_by`              | `String`          | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit.         | `TamakiMES`                    |
| `notes`                    | `Blob`            | Notes about the entity.                                                                                                  | `This entity has these notes`  |
| `spare1`                   | `String`          | The first spare column that can be used for additional context on the entity.                                            | `some extra context 1`         |
| `spare2`                   | `String`          | The second spare column that can be used for additional context on the entity.                                           | `some extra context 2`         |
| `spare3`                   | `String`          | The third spare column that can be used for additional context on the entity.                                            | `some extra context 3`         |
| `name`                     | `String`          | Name identifier for the shift.                                                                                           | `Morning Shift`                |
| `description`              | `String`          | Optional description of the shift.                                                                                       | `Morning shift M–F`            |
| `shift_schedule_name`      | `String`          | Name of the schedule that defines this shift's timings (if using schedule-based timing).                                 | `Weekday Schedule`             |
| `shift_schedule_source`    | `String` (Enum)   | Source of the schedule that defines this shift's timings. One of: `IGNITION_SCHEDULE`, `IGNITION_EXPRESSION`, `MES_SCHEDULE`.            | `IGNITION_SCHEDULE`            |
| `running_conflict_strategy`| `String` (Enum)   | Strategy for handling conflicts when starting a shift while another is active. One of: `THROW_EXCEPTION`, `STOP_PREVIOUS`. | `STOP_PREVIOUS`                |
| `start_trigger_expression` | `String`          | Expression used to determine when the shift should start (if using expressions).                                         | `0 0 6 * * 1-5`                |
| `start_trigger_type`       | `String` (Enum)   | Trigger type used to start the shift (e.g., `RISING_EDGE`, `FALLING_EDGE`, `CHANGE`).                                     | `RISING_EDGE`                  |
| `stop_trigger_expression`  | `String`          | Expression used to determine when the shift should end (if using expressions).                                           | `0 0 14 * * 1-5`               |
| `stop_trigger_type`        | `String` (Enum)   | Trigger type used to end the shift (e.g., `RISING_EDGE`, `FALLING_EDGE`, `CHANGE`).                                       | `FALLING_EDGE`                 |
| `location_id`              | `String` (ULID)   | Reference to the location where this shift runs. See [locations](../location-model/location).                             | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1` |
| `current_shift_record_id`  | `String` (ULID)   | Reference to the current active shift record for this shift. See [shift_records](./shift-record).               | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1` |

## Field Details

### `name` and `description`

Human-readable identifiers for the shift. The `name` is typically a short label, while `description` provides optional detail.

### `shift_schedule_name` and `shift_schedule_source`

- `shift_schedule_name` references the name of the schedule that defines timings for the shift, when using schedule-based timing.
- `shift_schedule_source` can be:
  - `IGNITION_SCHEDULE`: Requires a schedule defined in the Ignition gateway Alarming module.
  - `IGNITION_EXPRESSION`: Use start/stop expression triggers.
  - `MES_SCHEDULE`: A MES-defined schedule source.

### `running_conflict_strategy`

Specifies how to handle situations where a new shift is started while another is already active:
- `THROW_EXCEPTION`: Throw an exception if a shift is already active.
- `STOP_PREVIOUS`: Stop the previous active shift and start this one.

### `start_trigger_*` and `stop_trigger_*`

Define when and how a shift should start and end when using expression-based timing. Trigger types include `RISING_EDGE`, `FALLING_EDGE`, and `CHANGE`.

### `location_id`

References the location where this shift applies. Resolution may traverse up the location hierarchy when querying the current shift for a location.

### `current_shift_record_id`

References the currently active shift record associated with this shift, if one exists, for quick access to the running instance.
