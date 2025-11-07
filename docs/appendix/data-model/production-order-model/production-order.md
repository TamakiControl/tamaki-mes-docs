---
sidebar_position: 1
title: "production_orders"
description: "Documentation for the production_orders table, detailing columns and constraints in the database schema."
---

# Production Order

## Overview

The `ProductionOrder` entity manages information related to each production order, including product details,
scheduling, customer information, and production quantities. This table enables efficient tracking and organization of
production orders within the TamakiMES system.

## Table Structure

The following table outlines the SQL columns for the `production_orders` table, providing a brief description of each, along
with sample data where applicable.

| Column                     | Type            | Description                                                                                                                               | Example                             |
|----------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`                       | `String` (ULID) | Unique identifier for the entity.                                                                                                         | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`                  | `Boolean`       | If the entity is enabled or not.                                                                                                          | `true`                              |
| `created_date`             | `DateTime`      | Date the entity was created.                                                                                                              | `2024-12-31T19:48:44Z`              |
| `created_by`               | `String`        | Person who created the entity.                                                                                                            | `TamakiMES`                         |
| `modified_date`            | `DateTime`      | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.                              | `2024-12-31T19:48:44Z`              |
| `modified_by`              | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit.                          | `TamakiMES`                         |
| `notes`                    | `String`        | Notes about the entity.                                                                                                                   | `This entity has these extra notes` |
| `spare1`                   | `String`        | The first spare column that can be used for additional context on the entity.                                                             | `some extra context 1`              |
| `spare2`                   | `String`        | The second spare column that can be used for additional context on the entity.                                                            | `some extra context 2`              |
| `spare3`                   | `String`        | The third spare column that can be used for additional context on the entity.                                                             | `some extra context 3`              |
| `name`                     | `String`        | Unique name identifying the production order.                                                                                             | `Order001`                          |
| `start_date`               | `DateTime`      | Date when production on this order began.                                                                                                 | `2024-05-01 08:00:00`               |
| `due_date`                 | `DateTime`      | Expected completion date for the production order.                                                                                        | `2024-06-15 00:00:00`               |
| `end_date`                 | `DateTime`      | Date when the production was completed.                                                                                                   | `2024-07-01 12:00:00`               |
| `quantity`                 | `Double`        | Total quantity planned for production.                                                                                                    | `500.0`                             |
| `quantity_produced`        | `Double`        | Quantity already produced as part of this production order.                                                                               | `250.0`                             |
| `quantity_scheduled`       | `Double`        | Quantity scheduled for production.                                                                                                        | `300.0`                             |
| `schedule_priority`        | `String` (Enum) | Priority level for scheduling, determining order in the production queue, as defined by the **SchedulePriority** enum.                    | `NORMAL`                            |
| `status`                   | `String` (Enum) | Running status of the production order, as defined by the **ProductionOrderStatus** enum.                                                 | `IDLE`                              |
| `location_id`              | `String` (ULID) | References the location where the production is taking place. See [locations](../location-model/location).                                | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `product_material_id`      | `String` (ULID) | References the material being produced. See [materials](../material-model/material).                                                      | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `shift_record_id` | `String` (ULID) | References the associated shift record. See [shift_records](../shift-model/shift-record).                                                 | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `unit_of_measure_id`       | `String` (ULID) | References the unit of measure for quantity. See [unit_of_measure](../utility-models/unit-of-measure-model/unit-of-measure).              | `01JAP8R5RT-3FPXQABY-7KQZT6VF`      |

## Field Details

### `name`

The `name` field provides a descriptive identifier for the production order.

### `start_date`, `due_date`, `end_date`

- **start_date**: Timestamp indicating when the production started.
- **due_date**: Timestamp indicating the expected completion date for the production order.
- **end_date**: Timestamp indicating when the production was completed.

These timestamps provide temporal context for each production order.

### `quantity`, `quantity_produced`, `quantity_scheduled`

- **quantity**: The quantity of units planned for production.
- **quantity_produced**: The quantity of units already produced for this production order.
- **quantity_scheduled**: The quantity of units scheduled for production.

These quantities provide metrics about the progress of the production order.

### `schedule_priority`

Represents the priority of this production order, as defined by the **SchedulePriority** enum,
with options such as `LOW`, `NORMAL`, `HIGH`, and `URGENT`.

### `status`

Represents the running status of the production order, as defined by the **ProductionOrderStatus** enum, with options such as
`IDLE`, `SCHEDULED`, `RUNNING`, `PAUSED`, `STOPPED`, `CLOSED`, and `CANCELLED`.

### `location_id`

References the `Location` entity where this production order is taking place, allowing precise tracking of where
this production order is within the facility.
See [locations](../location-model/location) for details.

### `product_material_id`

References the `Material` entity associated with the production order, providing context about the material's characteristics and
properties.
See [materials](../material-model/material) for details.

### `schedule_shift_record_id`

References the `ShiftRecord` entity that was active at the location the production order ran. This relationship connects the production order to its specific shift instance, allowing for better tracking of production orders within the context of scheduled shifts.
See [shift_records](../shift-model/shift-record) for details.

### `unit_of_measure_id`

References the unit of measure applicable to this material, such as kilograms or liters, supporting precise tracking of quantities.
See [unit_of_measure](../utility-models/unit-of-measure-model/unit-of-measure) for details.
