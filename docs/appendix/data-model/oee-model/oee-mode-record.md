---
sidebar_position: 6
title: "oee_mode_records"
description: "Documentation for the oee_mode_records table, outlining its columns and structure."
---

# OEE Mode Record

## Overview

The `OeeModeRecord` entity represents a record of an [Oee Mode](../oee-model/oee-mode-record.md) event. The entity 
contains properties including the start and end time of the record, the calculation type for the OEE mode, the location
for the record, and the status of the OEE record.

## Table Structure

The following table outlines the SQL columns for the `oee_mode_records` table, providing a brief description of each.

| Column                 | Type            | Description                                                                                                      | Example                             |
|------------------------|-----------------|------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`                   | `String` (ULID) | Unique identifier for the entity.                                                                                | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`              | `Boolean`       | If the entity is enabled or not.                                                                                 | `true`                              |
| `created_date`         | `DateTime`      | Date the entity was created.                                                                                     | `2024-12-31T19:48:44Z`              |
| `created_by`           | `String`        | Person who created the entity.                                                                                   | `TamakiMES`                         |
| `modified_date`        | `DateTime`      | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.     | `2024-12-31T19:48:44Z`              |
| `modified_by`          | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit. | `TamakiMES`                         |
| `notes`                | `String`        | Notes about the entity.                                                                                          | `This entity has these extra notes` |
| `spare1`               | `String`        | The first spare column that can be used for additional context on the entity.                                    | `some extra context 1`              |
| `spare2`               | `String`        | The second spare column that can be used for additional context on the entity.                                   | `some extra context 2`              |
| `spare3`               | `String`        | The third spare column that can be used for additional context on the entity.                                    | `some extra context 3`              |
| `location_id`          | `String` (ULID) | References the location for the mode record. See [Location](../location-model/location).                         | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `code`                 | `Integer`       | Integer code for the Oee Mode.                                                                                   | `1`                                 |
| `name`                 | `Integer`       | Name of the mode.                                                                                                | `Production`                        |
| `calculation_type`     | `String` (Enum) | Determines how the mode is used to calculate OEE.                                                                | `SCHEDULED_DOWNTIME`                |
| `color`                | `String`        | Hex color code for the mode.                                                                                     | `#a0c741`                           |
| `status`               | `String` (Enum) | Status of the OEE record (running, faulted, cancelled, complete etc.).                                           | `RUNNING`                           |
| `start_date`           | `DateTime`      | Start date/time of mode record.                                                                                  | `2025-12-09T19:48:44Z`              |
| `end_date`             | `DateTime`      | End date/time of mode record.                                                                                    | `2025-12-09T19:48:44Z`              |
| `duration`             | `Double`        | Duration of the mode record.                                                                                     | `3293240.656`                       |
| `overrun_duration_sec` | `Double`        | Duration that the machine has overrun it's scheduled downtime.                                                   | `5.3`                               |
| `expected_duration`    | `Double`        | Expected duration of the mode in seconds.                                                                        | `10.0`                              |


## Field Details

### `location_id`

References the location for the mode record.
See [Location](../location-model/location).

### `code`

Integer code for the Oee Mode.

### `name`

Name of the mode.

### `calculation_type`

Determines how the mode is used to calculate OEE. Calculation types include `SCHEDULED_PRODUCTION`,
`SCHEDULED_DOWNTIME`, and `UNSCHEDULED_DOWNTIME`.

### `color`

Hex color code for the mode. 

### `status`

Status of the OEE record. Status types include `IDLE`, `RUNNING`, `COMPLETED`, `FAULTED`, `CANCELLED`, `UNKNOWN`, and
`PAUSED`.

### `startDate`

Start date/time of mode record.

### `endDate`

End date/time of mode record.   

### `duration`

Duration of the mode record.

### `overrun_duration_sec`

Duration that the machine has overrun it's scheduled downtime.

### `expected_duration`

Expected duration of the mode in seconds. 