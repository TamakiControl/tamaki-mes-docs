---
sidebar_position: 8
title: "oee_waste_records"
description: "Documentation for the oee_waste_records table, outlining its columns and structure."
---

# OEE Waste Record

## Overview

The OEE Waste Record entity captures quality-related waste events that occur during production at a specific location. Each record tracks a period of time during which waste was produced, the quantity of waste units, the associated quality reason, and the unit of measure used to quantify the waste. Waste records contribute to the Quality component of the OEE calculation.

## Table Structure

The following table outlines the SQL columns for the `oee_waste_records` table, providing a brief description of each, along
with sample data where applicable.

| Column                          | Type            | Description                                                                                                      | Example                             |
|---------------------------------|-----------------|------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`                            | `String` (ULID) | Unique identifier for the entity.                                                                                | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`                       | `Boolean`       | If the entity is enabled or not.                                                                                 | `true`                              |
| `created_date`                  | `DateTime`      | Date the entity was created.                                                                                     | `2024-12-31T19:48:44Z`              |
| `created_by`                    | `String`        | Person who created the entity.                                                                                   | `TamakiMES`                         |
| `modified_date`                 | `DateTime`      | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.     | `2024-12-31T19:48:44Z`              |
| `modified_by`                   | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit. | `TamakiMES`                         |
| `notes`                         | `Blob`          | Notes about the entity.                                                                                          | `This entity has these extra notes` |
| `spare1`                        | `String`        | The first spare column that can be used for additional context on the entity.                                    | `some extra context 1`              |
| `spare2`                        | `String`        | The second spare column that can be used for additional context on the entity.                                   | `some extra context 2`              |
| `spare3`                        | `String`        | The third spare column that can be used for additional context on the entity.                                    | `some extra context 3`              |
| `location_id`                   | `String` (ULID) | Foreign key reference to the location where this waste record was captured.                                      | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `start_date`                    | `DateTime`      | The start date and time of the waste record period.                                                              | `2024-12-31T06:00:00Z`              |
| `end_date`                      | `DateTime`      | The end date and time of the waste record period. Null if the record is still open.                              | `2024-12-31T07:00:00Z`              |
| `total_duration_sec`            | `Double`        | The total duration of the waste record period in seconds.                                                        | `3600.0`                            |
| `quality_reason_id`             | `String` (ULID) | Foreign key reference to the quality reason associated with this waste record. Nullable.                         | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `waste_count`                   | `Double`        | The total number of waste units recorded during this period.                                                     | `12.5`                              |
| `waste_count_unit_of_measure_id`| `String` (ULID) | Foreign key reference to the unit of measure used for the waste count. Nullable.                                 | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |

## Field Details

### `location_id`

References the location entity where the waste event occurred. This is used to associate the waste record with a specific production line, machine, or area in the equipment hierarchy.

### `start_date` / `end_date`

Define the time window of the waste event. The `end_date` may be null while the record is still actively accumulating waste. The `total_duration_sec` field reflects the elapsed time between these two timestamps.

### `quality_reason_id`

An optional reference to a quality reason entity that classifies the cause of the waste (e.g., defective material, process out of tolerance). When set, the reason contributes to quality analysis and reporting.

### `waste_count`

The quantity of waste produced during the record period, expressed in the unit of measure specified by `waste_count_unit_of_measure_id`. This value feeds directly into the Quality metric of the OEE calculation.

### `waste_count_unit_of_measure_id`

References the unit of measure entity used to quantify the waste count (e.g., units, kilograms, liters). When null, the waste count is treated as dimensionless.

