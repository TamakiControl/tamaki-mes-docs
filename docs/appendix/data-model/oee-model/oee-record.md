---
sidebar_position: 7
title: "oee_records"
description: "Documentation for the oee_records table, outlining its columns and structure."
---

# OEE Record

## Overview

The `OeeRecord` entity stores information for Past/Current runs in SQL to be reported on later. The entity contains 
several properties including the start and end time of the OEE record, the expected, quality, and total production units
count, and the standard rate of production.

## Table Structure

The following table outlines the SQL columns for the `oee_records` table, providing a brief description of each.

| Column                       | Type            | Description                                                                                                                                  | Example                             |
|------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`                         | `String` (ULID) | Unique identifier for the entity.                                                                                                            | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`                    | `Boolean`       | If the entity is enabled or not.                                                                                                             | `true`                              |
| `created_date`               | `DateTime`      | Date the entity was created.                                                                                                                 | `2024-12-31T19:48:44Z`              |
| `created_by`                 | `String`        | Person who created the entity.                                                                                                               | `TamakiMES`                         |
| `modified_date`              | `DateTime`      | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.                                 | `2024-12-31T19:48:44Z`              |
| `modified_by`                | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit.                             | `TamakiMES`                         |
| `notes`                      | `String`        | Notes about the entity.                                                                                                                      | `This entity has these extra notes` |
| `spare1`                     | `String`        | The first spare column that can be used for additional context on the entity.                                                                | `some extra context 1`              |
| `spare2`                     | `String`        | The second spare column that can be used for additional context on the entity.                                                               | `some extra context 2`              |
| `spare3`                     | `String`        | The third spare column that can be used for additional context on the entity.                                                                | `some extra context 3`              |
| `location_id`                | `String` (ULID) | References the location for the OEE record. See [Location](../location-model/location).                                                      | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `status`                     | `String` (Enum) | Status of the OEE record (running, faulted, cancelled, complete etc.).                                                                       | `RUNNING`                           |
| `start_date`                 | `DateTime`      | Start date/time of OEE record.                                                                                                               | `2025-12-09T19:48:44Z`              |
| `end_date`                   | `DateTime`      | End date/time of OEE record.                                                                                                                 | `2025-12-09T19:48:44Z`              |
| `total_duration_sec`         | `Double`        | Total duration of the OEE record in seconds.                                                                                                 | `36.054`                            |
| `production_count`           | `Double`        | Total units produced in the recorded time period.                                                                                            | `52.5`                              |
| `expected_production_count`  | `Double`        | Expected production count in the recorded time period.                                                                                       | `60.09`                             |
| `quality_strategy`           | `String` (Enum) | Quality Strategy for this OEE Record.                                                                                                        | `WASTE_COUNT`                       |
| `quality_count`              | `Double`        | Provided Quality Units Count in the recorded time period.                                                                                    | `2.9`                               |
| `production_count_uom_id`    | `String` (ULID) | Represents the unit of measure for production/quality count. See [unit_of_measure](../utility-models/unit-of-measure-model/unit-of-measure). | `02K4M9QY3F-7XW8A2ZL-QM9D6B1P`      |
| `production_rate_time_units` | `String` (Enum) | Unit of measure for the machine production rate & standard rate.                                                                             | `MINUTES`                           |
| `state_record_id`            | `String` (ULID) | Reperesents the current state for the OEE record. See [Oee State Record](../oee-model/oee-state-record).                                     | `02K4M9QY3F-7XW8A2ZL-QM9D6B1P`      |
| `standard_rate`              | `Double`        | Standard production rate for the OEE record.                                                                                                 | `100.0`                             |
| `production_order_id`        | `String` (ULID) | Represents the production order for the OEE record. See [Production Order](../production-order-model/production-order).                      | `02K4M9QY3F-7XW8A2ZL-QM9D6B1P`      |

## Field Details

### `location_id`

References the location for the OEE record.
See [Location](../location-model/location) for details.

### `status`

Status of the OEE record. Status types include `IDLE`, `RUNNING`, `COMPLETED`, `FAULTED`, `CANCELLED`, `UNKNOWN`, and
`PAUSED`.

### `start_date`

Start date/time of OEE record.

### `end_date`

End date/time of OEE record.   

### `total_duration_sec`

Total duration of the OEE record in seconds. 

### `production_count`

Total units produced in the recorded time period.

### `expected_production_count`

Expected production count in the recorded time period.

### `quality_strategy`

Quality Strategy for this OEE Record. The quality strategy is used to determine how to calculate an OEE state number. 
Types include `WASTE_COUNT` and `GOOD_COUNT`.

### `quality_count`

Provided Quality Units Count in the recorded time period. 

### `production_count_uom_id`

Represents the unit of measure for production/quality count.
See [unit_of_measure](../utility-models/unit-of-measure-model/unit-of-measure) for details.

### `production_rate_time_units`

Unit of measure for the machine production rate & standard rate. Time Unit types are `NANOSECONDS`, `MICROSECONDS`, 
`MILLISECONDS`, `SECONDS`, `MINUTES`, `HOURS`, and `DAYS`. 

### `state_record`

Represents the current state of the machine for the OEE record.
See [Oee State Record](../oee-model/oee-state-record) for details.

### `standard_rate`

Standard production rate for the OEE record.

### `production_order_id`

This is the current production order of the machine for the OEE record.
See [Production Order](../production-order-model/production-order) for details.