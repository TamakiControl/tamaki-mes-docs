---
sidebar_position: 5
title: "equipment_maintenance_plans"
description: "Documentation for the equipment_maintenance_plans table, outlining its columns and structure."
---

# Equipment Maintenance Plan

## Overview

The `EquipmentMaintenancePlan` entity defines maintenance schedules and triggers for specific pieces of equipment. These
plans specify when maintenance should occur, the triggering conditions, and the department responsible. This enables
proactive and automated maintenance scheduling based on predefined criteria.

## Table Structure

The following table outlines the SQL columns for the `equipment_maintenance_plans` table, providing a brief description
of each, along with sample data where applicable.

| Column               | Type                | Description                                                                                                                                       | Example                            |
|----------------------|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------|
| `id`                 | `String` (ULID)     | Unique identifier for the maintenance plan.                                                                                                       | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`     |
| `description`        | `String` (max 2048) | Detailed description of the maintenance plan.                                                                                                     | `Quarterly inspection of forklift` |
| `trigger_type`       | `Enum`              | The type of trigger that initiates maintenance. Possible values: `MANUAL`, `EXPRESSION`, `CRONTAB`.                                               | `CRONTAB`                          |
| `trigger_expression` | `String`            | An optional expression that defines the trigger condition (e.g., cron syntax).                                                                    | `0 0 * * 1`                        |
| `equipment_id`       | `String` (ULID)     | References the specific equipment this maintenance plan applies to. See [equipment](../equipment-model/equipment.md).                             | `01JAP8R5RT-3FPXQABY-7KQZT6VF`     |
| `department_id`      | `String` (ULID)     | References the department responsible for carrying out the maintenance. See [personnel_departments](../personnel-model/personnel_departments.md). | `01JAP8RJBN-4VYZUKE1-LY2QHV8X`     |

## Field Details

### `description`

An optional field for a longer description of the maintenance plan, with a character limit of 2048. This field provides
context on the type and purpose of the maintenance.

### `trigger_type`

Defines the trigger type for initiating a maintenance order. The possible values are:

- **MANUAL**: Maintenance is manually initiated.
- **EXPRESSION**: Triggered by an expression, such as a PLC condition.
- **CRONTAB**: Triggered by a cron-like schedule, allowing for regular, automated maintenance.

### `trigger_expression`

An optional field that stores the condition or schedule for maintenance, typically used with `EXPRESSION` or `CRONTAB`
trigger types.

### `equipment_id`

References the specific `Equipment` item this maintenance plan applies to, enabling targeted scheduling for individual
pieces of equipment. See [equipment](../equipment-model/equipment.md).

### `department_id`

References the `PersonnelDepartment` responsible for executing the maintenance plan, ensuring accountability and
resource allocation. See [personnel_departments](../personnel-model/personnel_departments.md).