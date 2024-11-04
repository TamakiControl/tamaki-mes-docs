---
sidebar_position: 2
title: "equipment"
description: "Documentation for the equipment table, outlining its columns and structure."
---

# Equipment

## Overview

The `Equipment` entity represents an actual piece of equipment within a factory or manufacturing environment. While
`EquipmentClass` defines categories like "Forklift" or "Saw," the `Equipment` entity models individual instances of
those categories, such as a specific forklift used on a production line. This allows tracking of each piece of equipment
independently for operational, maintenance, and reporting purposes.

## Table Structure

The following table outlines the SQL columns for the `equipment` table, providing a brief description of each, along
with sample data where applicable.

| Column               | Type                | Description                                                                                                                  | Example                                        |
|----------------------|---------------------|------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| `id`                 | `String` (ULID)     | Unique identifier for the equipment item.                                                                                    | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`                 |
| `equipment_class_id` | `String` (ULID)     | References the equipment class to which this item belongs. See [equipment_classes](../equipment-model/equipment-classes.md). | `01JAP8R5RT-3FPXQABY-7KQZT6VF`                 |
| `location_id`        | `String` (ULID)     | Indicates where the equipment is stored or currently in use. See [locations](../location-model/locations.md).                | `01JAP8RJBN-4VYZUKE1-LY2QHV8X`                 |
| `name`               | `String`            | The name of the specific equipment item, unique within the equipment class.                                                  | `Forklift #12`                                 |
| `description`        | `String` (max 2048) | Detailed description of the equipment item.                                                                                  | `Electric forklift used for material handling` |
| `status`             | `Enum`              | Current operational status of the equipment. Possible values: `OPERATIONAL`, `DOWN`, `UNDER_MAINTENANCE`, `UNKNOWN`.         | `OPERATIONAL`                                  |

## Field Details

### `equipment_class_id`

References the `EquipmentClass` that this item belongs to, allowing the equipment to inherit properties and attributes
defined by the class. See [equipment_classes](equipment-classes.md).

### `location_id`

Links to the `Location` entity, specifying the physical location of the equipment. This enables tracking of where the
equipment is deployed or stored within the facility. See [locations](/appendix/data-model/location-model/locations.md).

### `name`

The `name` field provides a unique identifier for the equipment within the context of its class, such as "Forklift #12."
This allows easy differentiation of multiple equipment items in the same category.

### `description`

An optional field for a more detailed description of the equipment, with a character limit of 2048. This can provide
additional context about the equipment’s purpose or specifications.

### `status`

Represents the current operational state of the equipment, with possible values:

- **OPERATIONAL**: Equipment is fully functional and in use.
- **DOWN**: Equipment is not operational.
- **UNDER_MAINTENANCE**: Equipment is currently undergoing maintenance.
- **UNKNOWN**: Equipment status is not known.