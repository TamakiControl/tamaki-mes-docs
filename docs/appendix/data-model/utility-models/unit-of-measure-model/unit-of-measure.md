---
sidebar_position: 2
title: "unit_of_measure"
description: "Documentation for the unit_of_measure table, outlining its columns and structure."
---

# Unit Of Measure

## Overview

The `UnitOfMeasure` entity represents specific measurement definitions within the system used to quantify and 
contextualize values for materials.

## Table Structure

The following table outlines the SQL columns for the `unit_of_measure` table, providing a brief description of each,
along with sample data where applicable.

| Column          | Type            | Description                                                                                          | Example                              |
|-----------------|-----------------|------------------------------------------------------------------------------------------------------|--------------------------------------|
| `id`            | `String` (ULID) | Unique identifier for the entity.                                                                    | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`       |
| `enabled`       | `Boolean`       | If the entity is enabled or not.                                                                     | `true`                               |
| `created_date`  | `DateTime`      | Date the entity was created.                                                                         | `2024-12-31T19:48:44Z`               |
| `created_by`    | `String`        | Person who created the entity.                                                                       | `TamakiMES`                          |
| `modified_date` | `DateTime`      | Date the entity was created.                                                                         | `2024-12-31T19:48:44Z`               |
| `modified_by`   | `String`        | Last person to modify the entity.                                                                    | `TamakiMES`                          |
| `notes`         | `Blob`          | Notes about the entity.                                                                              | `This entity has these extra notes`  |
| `spare1`        | `String`        | The first spare column that can be used for additional context on the entity.                        | `some extra context 1`               |
| `spare2`        | `String`        | The second spare column that can be used for additional context on the entity.                       | `some extra context 2`               |
| `spare3`        | `String`        | The third spare column that can be used for additional context on the entity.                        | `some extra context 3`               |
| `name`          | `String`        | Name of the unit of measure.                                                                         | `Pound`                              |
| `symbol`        | `String`        | Abbreviation of the unit of measure.                                                                 | `lb`                                 |

## Field Details

### `name`

The `name` field provides a unique identifier for the unit of measure, used to distinguish it from other units of measure.

### `symbol`

The `symbol` field provides an abbreviation of the unit of measure. It is typically the same as the name, but can 
become an abbreviation of the name.