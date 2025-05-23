---
sidebar_position: 6
title: "equipment_maintenance_orders"
description: "Documentation for the equipment_maintenance_orders table, outlining its columns and structure."
---

# Equipment Maintenance Order

## Overview

The `EquipmentMaintenanceOrder` entity represents an individual maintenance task for specific equipment. These orders
can be generated from a maintenance plan or scheduled manually. Each order includes details such as the scheduled and
completion dates, the assigned personnel, and the status of the task.

## Table Structure

The following table outlines the SQL columns for the `equipment_maintenance_orders` table, providing a brief description
of each, along with sample data where applicable.

| Column                          | Type            | Description                                                                                                                                                      | Example                             |
|---------------------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`                            | `String` (ULID) | Unique identifier for the entity.                                                                                                                                | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`                       | `Boolean`       | If the entity is enabled or not.                                                                                                                                 | `true`                              |
| `created_date`                  | `DateTime`      | Date the entity was created.                                                                                                                                     | `2024-12-31T19:48:44Z`              |
| `created_by`                    | `String`        | Person who created the entity.                                                                                                                                   | `TamakiMES`                         |
| `modified_date`                 | `DateTime`      | Date the entity was created.                                                                                                                                     | `2024-12-31T19:48:44Z`              |
| `modified_by`                   | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit.                                                 | `TamakiMES`                         |
| `notes`                         | `Blob`          | Notes about the entity.                                                                                                                                          | `This entity has these extra notes` |
| `spare1`                        | `String`        | The first spare column that can be used for additional context on the entity.                                                                                    | `some extra context 1`              |
| `spare2`                        | `String`        | The second spare column that can be used for additional context on the entity.                                                                                   | `some extra context 2`              |
| `spare3`                        | `String`        | The third spare column that can be used for additional context on the entity.                                                                                    | `some extra context 3`              |
| `equipment_maintenance_plan_id` | `String` (ULID) | References the maintenance plan from which this order was generated. See [equipment_maintenance_plans](../equipment-model/equipment-maintenance-plan).           | `01JAP8R5RT-3FPXQABY-7KQZT6VF`      |
| `status`                        | `String` (Enum) | Current status of the maintenance order. Possible values: `PENDING`, `IN_PROGRESS`, `COMPLETED`, `CANCELLED`, as defined by the **MaintenanceOrderStatus** enum. | `PENDING`                           |
| `scheduled_date`                | `DateTime`      | Date when the maintenance is scheduled to occur.                                                                                                                 | `2024-05-10T08:00:00Z`              |
| `completion_date`               | `DateTime`      | Date when the maintenance was completed.                                                                                                                         | `2024-05-10T15:00:00Z`              |
| `scheduled_by_id`               | `String` (ULID) | References the person who scheduled the maintenance order. See [personnel](../personnel-model/personnel).                                                        | `01JAP8RJBN-4VYZUKE1-LY2QHV8X`      |
| `completed_by_id`               | `String` (ULID) | References the person who completed the maintenance order. See [personnel](../personnel-model/personnel).                                                        | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `description`                   | `String`        | Detailed description of the maintenance order.                                                                                                                   | `Quarterly check on forklift.`      |
| `equipment_id`                  | `String` (ULID) | References the equipment this maintenance order is for. See [equipment](../equipment-model/equipment).                                                           | `01JAP8RJBN-9WTGQRQW-Y3XCRTXF`      |
| `personnel_department_id`       | `String` (ULID) | References the department responsible for executing the maintenance order. See [personnel_departments](../personnel-model/personnel-department).                 | `01JAP8RJBN-7KQZT6VF-Q5VUZYPW`      |

## Field Details

### `equipment_maintenance_plan_id`

References the `EquipmentMaintenancePlan` that generated this maintenance order, allowing for scheduled or automated
maintenance tasks.
See [equipment_maintenance_plans](../equipment-model/equipment-maintenance-plan) for details.

### `status`

Represents the current state of the maintenance order, based on the **MaintenanceOrderStatus** enum, with the following possible values:

- **PENDING**: The maintenance order is scheduled but has not started.
- **IN_PROGRESS**: The maintenance order is currently being executed.
- **COMPLETED**: The maintenance order has been completed.
- **CANCELLED**: The maintenance order was cancelled and will not be completed.

### `scheduled_date` and `completion_date`

- **scheduled_date**: Indicates when the maintenance order is scheduled to take place.
- **completion_date**: Captures the date and time when the maintenance was completed.

### `scheduled_by_id` and `completed_by_id`

- **scheduled_by_id**: References the person who scheduled the maintenance order.
  See [personnel](../personnel-model/personnel) for details.
- **completed_by_id**: References the person who completed the maintenance order, providing accountability for task
  completion.
  See [personnel](../personnel-model/personnel) for details.

### `equipment_id`

Links to the specific `Equipment` item that this maintenance order pertains to, enabling targeted maintenance tasks for
individual pieces of equipment.
See [equipment](../equipment-model/equipment) for details.

### `personnel_department_id`

Specifies the `PersonnelDepartment` responsible for carrying out the maintenance task, ensuring that resources and
responsibilities are properly assigned.
See [personnel_departments](../personnel-model/personnel-department) for details.
