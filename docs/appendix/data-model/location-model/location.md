---
sidebar_position: 2
title: "locations"
description: "Documentation for the locations table, outlining its columns and structure."
---

# Location

## Overview

The `Location` entity represents individual locations within the manufacturing environment, organized in a hierarchical
structure. Locations have attributes such as type, process type, and storage capabilities, supporting a wide range of
manufacturing and storage needs. This flexible structure enables configurations from high-level company sites to
specific production units.

## Table Structure

The following table outlines the SQL columns for the `locations` table, providing a brief description of each, along
with sample data where applicable.

| Column                     | Type              | Description                                                                                                                          | Example                             |
|----------------------------|-------------------|--------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`                       | `String` (ULID)   | Unique identifier for the entity.                                                                                                    | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`                  | `Boolean`         | If the entity is enabled or not.                                                                                                     | `true`                              |
| `created_date`             | `DateTime`        | Date the entity was created.                                                                                                         | `2024-12-31T19:48:44Z`              |
| `created_by`               | `String`          | Person who created the entity.                                                                                                       | `TamakiMES`                         |
| `modified_date`            | `DateTime`        | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.                         | `2024-12-31T19:48:44Z`              |
| `modified_by`              | `String`          | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit.                     | `TamakiMES`                         |
| `notes`                    | `String`          | Notes about the entity.                                                                                                              | `This entity has these extra notes` |
| `spare1`                   | `String`          | The first spare column that can be used for additional context on the entity.                                                        | `some extra context 1`              |
| `spare2`                   | `String`          | The second spare column that can be used for additional context on the entity.                                                       | `some extra context 2`              |
| `spare3`                   | `String`          | The third spare column that can be used for additional context on the entity.                                                        | `some extra context 3`              |
| `name`                     | `String`          | Name of the location. Required and unique within the parent location.                                                                | `Warehouse A`                       |
| `description`              | `String`          | Optional description of the location.                                                                                                | `Main storage warehouse`            |
| `parent_id`                | `String` (ULID)   | References the parent location, creating a hierarchical structure. See [locations](../location-model/location).                      | `01JAP8R5RT-3FPXQABY-7KQZT6VF`      |
| `type`                     | `String` (Enum)   | Type of the location, specifying its role within the hierarchy, as defined by the **LocationType** enum.                             | `SITE`                              |
| `process_type`             | `String` (Enum)   | Type of process supported by the location, such as storage or continuous process, as defined by the **ProcessType** enum.            | `STORAGE`                           |
| `sort_order`               | `Integer`         | Defines the order of locations within the hierarchy.                                                                                 | `1`                                 |
| `allow_negative_inventory` | `Boolean`         | Allows or disallows negative inventory at the location.                                                                              | `false`                             |
| `storage_capacity`         | `Double`          | Specifies the maximum storage capacity, or `null` for no limit.                                                                      | `10000.0`                           |
| `storage_capacity_unit_id` | `String` (ULID)   | References the unit of measure for storage capacity. See [unit_of_measure](../utility-models/unit-of-measure-model/unit-of-measure). | `01JAP8RJBN-4VYZUKE1-LY2QHV8X`      |
| `lot_storage_strategy`     | `String` (Enum)   | Strategy for storing different numbers of lots, as defined by the **LotStorageStrategy** enum.                                       | `KEEP_PREVIOUS`                     |
| `lot_use_strategy`         | `String` (Enum)   | Strategy for using inventory lots, such as FIFO or LIFO, as defined by the **LotUseStrategy** enum.                                  | `FIFO`                              |
| `path`                     | `String` (unique) | Unique path for the location, generated based on the hierarchy.                                                                      | `/Warehouse/Site1/UnitA`            |

## Field Details

### `parent_id`

References the parent `Location`, enabling a hierarchical structure across locations.
See [locations](../location-model/location) for details.

### `type`

Defines the type of the location, based on the **LocationType** enum, which includes options such as `ENTERPRISE`, `COMPANY`, `SITE`, `AREA`, `LINE`, `CELL_GROUP`, `CELL`, and `UNIT`.
Each type supports a specific role in the hierarchy, from top-level organizations to
individual units.

### `process_type`

Specifies the type of process the location supports, using the **ProcessType** enum. This allows each location to be
configured as `STORAGE`, `CONTINUOUS`, `BATCH`, `DISCRETE`, or `NONE`.

### `sort_order`

Determines the display or processing order within the location hierarchy, ensuring that locations are organized
consistently.

### `allow_negative_inventory`

Specifies whether the location permits negative inventory. This is useful for locations where
  overdraws may be intentional.

### `storage_capacity` and `storage_capacity_unit_id`

- **storage_capacity**: Defines the maximum storage capacity for the location, with `null` indicating no limit.
- **storage_capacity_unit_id**: References the unit of measure for capacity, allowing units such as kilograms, liters,
  or other relevant measures.
  See [unit_of_measure](../utility-models/unit-of-measure-model/unit-of-measure) for details.

### `lot_storage_strategy` and `lot_use_strategy`

- **lot_storage_strategy**: Determines how many lots can be stored in a location, using the **LotStorageStrategy** enum, with options like `ALLOW_MULTIPLE`, `ALLOW_SINGLE_OR_THROW`, `MERGE_INTO_PREVIOUS`, `MERGE_INTO_NEW`, and `NO_STORAGE`.
- **lot_use_strategy**: Specifies the order in which inventory lots are consumed, using the **LotUseStrategy** enum, with options like `FIFO`, `LIFO`, and `FEFO`.

### `path`

The `path` is a unique identifier for the location, automatically generated based on the location name and hierarchy,
ensuring easy navigation within the facility structure.
