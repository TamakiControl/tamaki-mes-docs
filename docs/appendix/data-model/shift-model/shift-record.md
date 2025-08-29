---
sidebar_position: 2
title: "shift_records"
description: "Documentation for the shift_records table, outlining its columns and structure."
---

# Shift Record

## Overview

The `ShiftRecord` entity represents individual instances of a shift at a location. While `Shift` defines configuration, `ShiftRecord` captures runtime details such as actual start/end times, status, duration, and location.

## Table Structure

The following table outlines the SQL columns for the `shift_records` table, providing a brief description of each, along with sample data where applicable.

| Column          | Type            | Description                                                                                       | Example                        |
|-----------------|-----------------|---------------------------------------------------------------------------------------------------|--------------------------------|
| `id`            | `String` (ULID) | Unique identifier for the entity.                                                                 | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1` |
| `enabled`       | `Boolean`       | If the entity is enabled or not.                                                                  | `true`                         |
| `created_date`  | `DateTime`      | Date the entity was created.                                                                      | `2024-12-31T19:48:44Z`         |
| `created_by`    | `String`        | Person who created the entity.                                                                    | `TamakiMES`                    |
| `modified_date` | `DateTime`      | Date the entity was modified. Value is null on creation; populated on first edit.                 | `2024-12-31T19:48:44Z`         |
| `modified_by`   | `String`        | Last person to modify the entity. Value is null on creation; populated on first edit.             | `TamakiMES`                    |
| `notes`         | `Blob`          | Notes about the entity.                                                                           | `This entity has these notes`  |
| `spare1`        | `String`        | The first spare column that can be used for additional context on the entity.                     | `some extra context 1`         |
| `spare2`        | `String`        | The second spare column that can be used for additional context on the entity.                    | `some extra context 2`         |
| `spare3`        | `String`        | The third spare column that can be used for additional context on the entity.                     | `some extra context 3`         |
| `start_date`    | `DateTime`      | Actual start date/time when the shift began.                                                      | `2024-12-31T06:00:00Z`         |
| `end_date`      | `DateTime`      | Actual end date/time when the shift ended.                                                        | `2024-12-31T14:00:00Z`         |
| `status`        | `String` (Enum) | Current status of the record: `IDLE`, `ACTIVE`, `CLOSED`, `VERIFIED`.                             | `ACTIVE`                       |
| `duration`      | `Double`        | Duration of the shift record in seconds.                                                          | `28800`                        |
| `location_id`   | `String` (ULID) | Reference to the location where this record applies. See [locations](../location-model/location). | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1` |
| `shift_id`      | `String` (ULID) | Reference to the shift configuration that created this record. See [shifts](./shift).             | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1` |

## Field Details

### `start_date` and `end_date`

Record the actual start and end times of the shift occurrence.

### `status`

Indicates the current state of the record:

- `IDLE`: Created but not started
- `ACTIVE`: Currently in progress
- `CLOSED`: Ended
- `VERIFIED`: Reviewed and verified

### `duration`

Total time of the shift record in seconds; updated as the record progresses and finalized at end.

### `location_id`

References the location where the shift ran.

### `shift_id`

References the `Shift` that defines the configuration for this record.
