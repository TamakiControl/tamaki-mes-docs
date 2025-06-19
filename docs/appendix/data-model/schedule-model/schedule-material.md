---
sidebar_position: 3
title: "schedule_materials"
description: "Documentation for the schedule_materials table, detailing columns and constraints in the database schema."
---

# Schedule Material

## Overview

The `ScheduleMaterial` entity manages the materials required for or produced during a scheduled activity. It tracks quantities, priorities, and links to inventory lots, enabling precise material planning and consumption tracking for production schedules.

## Table Structure

The following table outlines the SQL columns for the `schedule_materials` table, providing a brief description of
each, along with sample data where applicable.

| Column                   | Type            | Description                                                                                                                                           | Example                             |
|--------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`                     | `String` (ULID) | Unique identifier for the entity.                                                                                                                     | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`                | `Boolean`       | If the entity is enabled or not.                                                                                                                      | `true`                              |
| `created_date`           | `DateTime`      | Date the entity was created.                                                                                                                          | `2024-12-31T19:48:44Z`              |
| `created_by`             | `String`        | Person who created the entity.                                                                                                                        | `TamakiMES`                         |
| `modified_date`          | `DateTime`      | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.                                          | `2024-12-31T19:48:44Z`              |
| `modified_by`            | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit.                                      | `TamakiMES`                         |
| `notes`                  | `String`        | Notes about the entity.                                                                                                                               | `This entity has these extra notes` |
| `spare1`                 | `String`        | The first spare column that can be used for additional context on the entity.                                                                         | `some extra context 1`              |
| `spare2`                 | `String`        | The second spare column that can be used for additional context on the entity.                                                                        | `some extra context 2`              |
| `spare3`                 | `String`        | The third spare column that can be used for additional context on the entity.                                                                         | `some extra context 3`              |
| `priority`               | `Integer`       | Priority level of the material in the schedule, used for material allocation decisions.                                                               | `1`                                 |
| `quantity`               | `Double`        | Quantity of the material required for or produced during the scheduled activity.                                                                      | `50.0`                              |
| `inventory_lot_id`       | `String` (ULID) | Reference to a specific inventory lot that supplies the material. See [inventory_lots](../inventory-model/inventory-lot).                             | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `inventory_operation_id` | `String` (ULID) | Reference to an inventory operation that records the material movement. See [inventory_operations](../inventory-model/inventory-operation).           | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `material_id`            | `String` (ULID) | Reference to the material that is required for or produced during the scheduled activity. See [materials](../material-model/material).                | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `production_order_id`    | `String` (ULID) | Reference to the production order that the schedule material is associated with. See [production_orders](../production-order-model/production-order). | `01JAP8R5RT-3FPXQABY-7KQZT6VF`      |
| `schedule_id`            | `String` (ULID) | Reference to the schedule that the material is assigned to. See [schedules](../schedule-model/schedule).                                              | `01JAP8RJBN-9ZTPXSGY-K9GSDPE2`      |

## Field Details

### `priority`

The `priority` field indicates the importance or sequence of the material within the schedule. Higher priority materials may be allocated first when there are resource constraints.

### `quantity`

Specifies the amount of the material required for or produced during the scheduled activity. This value is used for material requirements planning and inventory management.

### `inventory_lot_id`

References a specific inventory lot that supplies the material. This allows for detailed tracking of material consumption from specific lots, which is important for traceability and quality control.

### `inventory_operation_id`

References an inventory operation that records the material movement associated with this schedule material. This links the scheduled material usage to actual inventory transactions.

### `material_id`

References the specific material that is required for or produced during the scheduled activity. This links to the Material entity in the Material Model.

### `production_order_id`

References the production order associated with this schedule material, allowing materials to be traced back to their originating production order.

### `schedule_id`

References the schedule to which this material is assigned. This creates a relationship between schedules and materials, defining what materials are needed for specific scheduled activities.
