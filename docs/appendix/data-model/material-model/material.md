---
sidebar_position: 2
title: "materials"
description: "Documentation for the materials table, outlining its columns and structure."
---

# Material

## Overview

The `Material` entity represents specific materials used within a manufacturing or production process. Each material
belongs to a `MaterialClass`, has a unit of measure, and can include additional details such as an ERP ID, shelf life,
safety datasheet, and image. This entity enables tracking and categorization of each material independently for
operational, inventory, and regulatory needs.

## Table Structure

The following table outlines the SQL columns for the `materials` table, providing a brief description of each, along
with sample data where applicable.

| Column                 | Type               | Description                                                                                                             | Example                         |
|------------------------|--------------------|-------------------------------------------------------------------------------------------------------------------------|---------------------------------|
| `id`                   | `String` (ULID)    | Unique identifier for the material item.                                                                                | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`  |
| `material_class_id`    | `String` (ULID)    | References the material class to which this item belongs. See [material_classes](material-class).                  | `01JAP8R5RT-3FPXQABY-7KQZT6VF`  |
| `name`                 | `String`           | Name of the material item. Required and unique within the material class.                                               | `Steel Sheet`                   |
| `erpId`                | `String`           | Optional ERP system identifier for the material.                                                                        | `STEEL12345`                    |
| `path`                 | `String` (unique)  | Unique path for the material, generated based on the hierarchy.                                                         | `/Materials/RawMaterials/Steel` |
| `description`          | `String` (max 500) | Detailed description of the material item.                                                                              | `High-grade steel sheet`        |
| `unit_of_measure_id`   | `String` (ULID)    | References the unit of measure for the material. See [unit_of_measure](../utility-models/unit-of-measure-model/unit-of-measure). | `01JAP8RJBN-4VYZUKE1-LY2QHV8X`  |
| `shelfLifeDays`        | `Integer`          | Shelf life of the material in days.                                                                                     | `365`                           |
| `safety_data_sheet_id` | `String` (ULID)    | References a safety datasheet associated with this material.                                                            | `01JAP8RJBN-9WTGQRQW-Y3XCRTXF`  |
| `image`                | `Byte[]`           | Stores an image of the material (binary large object).                                                                  | `Binary data`                   |

## Field Details

### `material_class_id`

References the `MaterialClass` entity to which this material belongs. This association allows materials to inherit
characteristics from their class.
See [material_classes](material-class) for details on `MaterialClass`.

### `name`

The `name` field provides a descriptive identifier for the material item, such as "Steel Sheet" or "Aluminum Coil." This
name must be unique within its material class.

### `erpId`

Optional field for storing an identifier used within an ERP system, allowing integration with enterprise resource
planning systems for inventory and order management.

### `path`

The `path` is a unique identifier for the material, generated automatically based on the class hierarchy, providing a
traceable path within the classification structure.

### `unit_of_measure_id`

References the unit of measure applicable to this material, such as kilograms or liters, supporting precise tracking of
quantities.
See [unit_of_measure](../utility-models/unit-of-measure-model/unit-of-measure) for details on `UnitOfMeasure`.

### `shelfLifeDays`

Optional field specifying the material's shelf life in days, used primarily for perishable materials or those with a
limited useful life.

### `safety_data_sheet_id`

References a `Document` entity that contains safety information about this material, ensuring compliance with safety and
regulatory requirements.

### `image`

Stores an optional image of the material, which can be useful for identification or documentation purposes.