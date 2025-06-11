---
sidebar_position: 2
title: "schedule_equipment"
description: "Documentation for the schedule_equipment table, detailing columns and constraints in the database schema."
---

# Schedule Equipment

## Overview

The `ScheduleEquipment` entity tracks equipment assignments to specific schedules. It defines when and which equipment is allocated to a scheduled activity, allowing for effective equipment utilization planning and tracking.

## Table Structure

The following table outlines the SQL columns for the `schedule_equipment` table, providing a brief description of
each, along with sample data where applicable.

| Column                       | Type            | Description                                                                                                                                        | Example                             |
|------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`                         | `String` (ULID) | Unique identifier for the entity.                                                                                                                  | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`                    | `Boolean`       | If the entity is enabled or not.                                                                                                                   | `true`                              |
| `created_date`               | `DateTime`      | Date the entity was created.                                                                                                                       | `2024-12-31T19:48:44Z`              |
| `created_by`                 | `String`        | Person who created the entity.                                                                                                                     | `TamakiMES`                         |
| `modified_date`              | `DateTime`      | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.                                       | `2024-12-31T19:48:44Z`              |
| `modified_by`                | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit.                                   | `TamakiMES`                         |
| `notes`                      | `Blob`          | Notes about the entity.                                                                                                                            | `This entity has these extra notes` |
| `spare1`                     | `String`        | The first spare column that can be used for additional context on the entity.                                                                      | `some extra context 1`              |
| `spare2`                     | `String`        | The second spare column that can be used for additional context on the entity.                                                                     | `some extra context 2`              |
| `spare3`                     | `String`        | The third spare column that can be used for additional context on the entity.                                                                      | `some extra context 3`              |
| `end_date`                   | `DateTime`      | Planned end date and time for the equipment assignment.                                                                                            | `2025-01-01T19:48:44Z`              |
| `start_date`                 | `DateTime`      | Planned start date and time for the equipment assignment.                                                                                          | `2024-12-31T19:48:44Z`              |
| `equipment_id`               | `String` (ULID) | Reference to the equipment that is assigned to the schedule. See [equipment](../equipment-model/equipment).                                         | `01G8V9S9B9-3QWXS4VC`               |
| `schedule_id`                | `String` (ULID) | Reference to the schedule that the equipment is assigned to. See [schedules](../schedule-model/schedule).                                          | `01FZ8P9BJN-4VYZUKE1`               |

## Field Details

### `end_date` and `start_date`

These fields define the time window during which the equipment is assigned to the schedule. This may be the same as the schedule's timeframe, but could also represent a subset of the schedule's duration if the equipment is only needed for part of the operation.

### `equipment_id`

References the specific piece of equipment assigned to the schedule. This links to the Equipment entity in the Equipment Model, allowing for detailed tracking of equipment utilization and availability.

### `schedule_id`

References the schedule to which this equipment assignment belongs. This creates a many-to-many relationship between schedules and equipment, as a single schedule may require multiple pieces of equipment, and a piece of equipment may be assigned to multiple schedules over time.
