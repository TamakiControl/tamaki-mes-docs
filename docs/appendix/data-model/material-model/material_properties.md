---
sidebar_position: 4
title: "material_properties"
description: "Documentation for the material_properties table, outlining its columns and structure."
---

# Material Properties

## Overview

The `MaterialProperty` entity represents properties associated with materials, specifically for a given `MaterialClass`.
Each property includes details such as data type, description, and value limits, allowing materials within the same
class to have standardized attributes while still allowing specific customization.

## Table Structure

The following table outlines the SQL columns for the `material_properties` table, providing a brief description of each,
along with sample data where applicable.

| Column              | Type                | Description                                                                                                | Example                               |
|---------------------|---------------------|------------------------------------------------------------------------------------------------------------|---------------------------------------|
| `id`                | `String` (ULID)     | Unique identifier for the material property.                                                               | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`        |
| `material_class_id` | `String` (ULID)     | References the material class to which this property belongs. See [material_classes](material_classes.md). | `01JAP8R5RT-3FPXQABY-7KQZT6VF`        |
| `name`              | `String`            | Name of the material property, unique within the material class.                                           | `Density`                             |
| `description`       | `String` (max 2048) | Detailed description of the material property.                                                             | `Defines the density of the material` |
| `data_type`         | `Enum`              | Data type of the property, such as `String`, `Integer`, `Float`, etc.                                      | `Float`                               |
| `default_value`     | `Mixed`             | Default value for the material property.                                                                   | `7.85` (for density of steel)         |
| `high_limit`        | `Double`            | Upper limit for the property value, if applicable.                                                         | `10.0`                                |
| `low_limit`         | `Double`            | Lower limit for the property value, if applicable.                                                         | `0.1`                                 |
| `format`            | `String`            | Formatting string for the property, useful for display or input parsing.                                   | `0.00`                                |
| `nullable`          | `Boolean`           | Indicates if the property value can be null.                                                               | `false`                               |

## Field Details

### `material_class_id`

References the `MaterialClass` entity associated with this property, ensuring that each material within the class can
share common properties.  
See [material_classes](material_classes.md) for details on `MaterialClass`.

### `name`

The `name` field is a descriptive identifier for the material property, such as "Density" or "Color."

### `description`

An optional, detailed description of the property that provides additional context or usage information.

### `data_type`

Specifies the data type of the property value, allowing properties to be typed as `String`, `Integer`, `Float`, and
more, based on the material’s requirements.

### `default_value`

An optional field specifying a default value for the property, used if no specific value is assigned to a material
instance.

### `high_limit` and `low_limit`

- **high_limit**: The maximum allowable value for the property, if applicable.
- **low_limit**: The minimum allowable value for the property, if applicable.

These fields are particularly useful for numeric properties, ensuring that values remain within an acceptable range.

### `format`

An optional field for defining how the property should be displayed or input, such as a numeric format string.

### `nullable`

Indicates if the property value is required or can be left empty (`null`).