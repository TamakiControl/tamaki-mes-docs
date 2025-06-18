---
sidebar_position: 4
title: "schedule_personnel"
description: "Documentation for the schedule_personnel table, detailing columns and constraints in the database schema."
---

# Schedule Personnel

## Overview

The `SchedulePersonnel` entity tracks personnel assignments to specific schedules. It defines when and which staff members are allocated to a scheduled activity, enabling effective workforce planning and tracking of labor resources.

## Table Structure

The following table outlines the SQL columns for the `schedule_personnel` table, providing a brief description of
each, along with sample data where applicable.

| Column                       | Type            | Description                                                                                                                                        | Example                             |
|------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`                         | `String` (ULID) | Unique identifier for the entity.                                                                                                                  | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`                    | `Boolean`       | If the entity is enabled or not.                                                                                                                   | `true`                              |
| `created_date`               | `DateTime`      | Date the entity was created.                                                                                                                       | `2024-12-31T19:48:44Z`              |
| `created_by`                 | `String`        | Person who created the entity.                                                                                                                     | `TamakiMES`                         |
| `modified_date`              | `DateTime`      | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.                                       | `2024-12-31T19:48:44Z`              |
| `modified_by`                | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit.                                   | `TamakiMES`                         |
| `notes`                      | `String`        | Notes about the entity.                                                                                                                            | `This entity has these extra notes` |
| `spare1`                     | `String`        | The first spare column that can be used for additional context on the entity.                                                                      | `some extra context 1`              |
| `spare2`                     | `String`        | The second spare column that can be used for additional context on the entity.                                                                     | `some extra context 2`              |
| `spare3`                     | `String`        | The third spare column that can be used for additional context on the entity.                                                                      | `some extra context 3`              |
| `end_date`                   | `DateTime`      | Planned end date and time for the personnel assignment.                                                                                            | `2025-01-01T19:48:44Z`              |
| `start_date`                 | `DateTime`      | Planned start date and time for the personnel assignment.                                                                                          | `2024-12-31T19:48:44Z`              |
| `person_id`                  | `String` (ULID) | Reference to the person that is assigned to the schedule. See [personnel](../personnel-model/personnel).                                           | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `schedule_id`                | `String` (ULID) | Reference to the schedule that the person is assigned to. See [schedules](../schedule-model/schedule).                                             | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |

## Field Details

### `end_date` and `start_date`

These fields define the time window during which the person is assigned to the schedule. This may be the same as the schedule's timeframe, but could also represent a subset of the schedule's duration if the person is only needed for part of the operation.

### `person_id`

References the specific person assigned to the schedule. This links to the Person entity, allowing for detailed tracking of personnel utilization, skills allocation, and availability.

### `schedule_id`

References the schedule to which this personnel assignment belongs. This creates a many-to-many relationship between schedules and personnel, as a single schedule may require multiple people, and a person may be assigned to multiple schedules over time.
