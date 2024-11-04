---
sidebar_position: 2
title: "locations"
description: "Documentation for the locations table, outlining its columns and structure."
---

# Locations

## Overview

The `Location` entity represents individual locations within the manufacturing environment, organized in a hierarchical
structure. Locations have attributes such as type, process type, and storage capabilities, supporting a wide range of
manufacturing and storage needs. This flexible structure enables configurations from high-level company sites to
specific production units.

## Table Structure

The following table outlines the SQL columns for the `locations` table, providing a brief description of each, along
with sample data where applicable.

| Column                     | Type              | Description                                                                                                                 | Example                        |
|----------------------------|-------------------|-----------------------------------------------------------------------------------------------------------------------------|--------------------------------|
| `id`                       | `String` (ULID)   | Unique identifier for the location.                                                                                         | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1` |
| `name`                     | `String`          | Name of the location. Required and unique within the parent location.                                                       | `Warehouse A`                  |
| `description`              | `String`          | Optional description of the location.                                                                                       | `Main storage warehouse`       |
| `parent_id`                | `String` (ULID)   | References the parent location, creating a hierarchical structure. See [locations](../location-model/locations.md).         | `01JAP8R5RT-3FPXQABY-7KQZT6VF` |
| `type`                     | `Enum`            | Type of the location, specifying its role within the hierarchy.                                                             | `SITE`                         |
| `process_type`             | `Enum`            | Type of process supported by the location, such as storage or continuous process.                                           | `STORAGE`                      |
| `sort_order`               | `Integer`         | Defines the order of locations within the hierarchy.                                                                        | `1`                            |
| `allow_storage`            | `Boolean`         | Indicates whether the location can store materials.                                                                         | `true`                         |
| `allow_negative_inventory` | `Boolean`         | Allows or disallows negative inventory at the location.                                                                     | `false`                        |
| `storage_capacity`         | `Double`          | Specifies the maximum storage capacity, or `null` for no limit.                                                             | `10000.0`                      |
| `storage_capacity_unit_id` | `String` (ULID)   | References the unit of measure for storage capacity. See [unit_of_measure](../utility-models/uom-model/unit_of_measure.md). | `01JAP8RJBN-4VYZUKE1-LY2QHV8X` |
| `max_lots`                 | `Integer`         | Maximum number of lots that can be stored at this location. `null` for no limit.                                            | `50`                           |
| `lot_conflict_strategy`    | `Enum`            | Strategy for handling conflicts when multiple lots are present.                                                             | `KEEP_PREVIOUS`                |
| `lot_use_strategy`         | `Enum`            | Strategy for using inventory lots, such as FIFO or LIFO.                                                                    | `FIFO`                         |
| `path`                     | `String` (unique) | Unique path for the location, generated based on the hierarchy.                                                             | `/Warehouse/Site1/UnitA`       |

## Field Details

### `parent_id`

References the parent `Location`, enabling a hierarchical structure across locations.
See [locations](../location-model/locations.md) for details on the parent `Location`.

### `type`

Defines the type of the location, based on the **LocationType** enum, which includes options such as `ENTERPRISE`,
`SITE`, `AREA`, and `UNIT`. Each type supports a specific role in the hierarchy, from top-level organizations to
individual units.

### `process_type`

Specifies the type of process the location supports, using the **ProcessType** enum. This allows each location to be
configured as `STORAGE`, `CONTINUOUS`, `BATCH`, `DISCRETE`, or `NONE`.

### `sort_order`

Determines the display or processing order within the location hierarchy, ensuring that locations are organized
consistently.

### `allow_storage` and `allow_negative_inventory`

- **allow_storage**: Indicates if materials can be stored at this location.
- **allow_negative_inventory**: Specifies whether the location permits negative inventory, useful for locations where
  overdraws may be intentional.

### `storage_capacity` and `storage_capacity_unit_id`

- **storage_capacity**: Defines the maximum storage capacity for the location, with `null` indicating no limit.
- **storage_capacity_unit_id**: References the unit of measure for capacity, allowing units such as kilograms, liters,
  or other relevant measures. See [unit_of_measure](../utility-models/uom-model/unit_of_measure.md) for details.

### `max_lots`

Sets the maximum number of inventory lots that can be stored at this location, with `null` indicating no limit.

### `lot_conflict_strategy` and `lot_use_strategy`

- **lot_conflict_strategy**: Determines how conflicts are handled when multiple lots are present, using the *
  *LotConflictStrategy** enum (e.g., `DISALLOW`, `KEEP_PREVIOUS`, `KEEP_NEW`).
- **lot_use_strategy**: Specifies the order in which inventory lots are consumed, using the **LotUseStrategy** enum,
  with options like `FIFO`, `LIFO`, and `FEFO`.

### `path`

The `path` is a unique identifier for the location, automatically generated based on the location name and hierarchy,
ensuring easy navigation within the facility structure.