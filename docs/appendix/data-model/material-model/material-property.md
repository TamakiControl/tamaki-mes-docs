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

| Column                 | Type                | Description                                                                                                | Example                               |
|------------------------|---------------------|------------------------------------------------------------------------------------------------------------|---------------------------------------|
| `id`                   | `String` (ULID)     | Unique identifier for the entity.                                                                          | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`        |
| `enabled`              | `Boolean`           | If the entity is enabled or not.                                                                           | `true`                                |
| `created_date`         | `DateTime`          | Date the entity was created.                                                                               | `2024-12-31T19:48:44Z`                |
| `created_by`           | `String`            | Person who created the entity.                                                                             | `TamakiMES`                           |
| `modified_date`        | `DateTime`          | Date the entity was created.                                                                               | `2024-12-31T19:48:44Z`                |
| `modified_by`          | `String`            | Last person to modify the entity.                                                                          | `TamakiMES`                           |
| `notes`                | `Blob`              | Notes about the entity.                                                                                    | `This entity has these extra notes`   |
| `spare1`               | `String`            | The first spare column that can be used for additional context on the entity.                              | `some extra context 1`                |
| `spare2`               | `String`            | The second spare column that can be used for additional context on the entity.                             | `some extra context 2`                |
| `spare3`               | `String`            | The third spare column that can be used for additional context on the entity.                              | `some extra context 3`                |
| `data_type`            | `String`            | Specifies the data type of the property, such as `INTEGER` or `STRING`.                                    | `Float`                               |
| `default_blob_value`   | `Blob`              | Default binary value for the property if `data_type` is binary-compatible.                                 | `Binary data`                         |
| `default_date_value`   | `Datetime`          | Default date value for the property, if applicable.                                                        | `2024-05-01 00:00:00`                 |
| `default_float_value`  | `Double`            | Default floating-point value, if applicable.                                                               | `10.5`                                |
| `default_int_value`    | `BigInt`            | Default integer value for the property, if applicable.                                                     | `100`                                 |
| `default_string_value` | `String`            | Default string value for the property, if applicable.                                                      | `Default Value`                       |
| `name`                 | `String`            | Name of the material property, unique within the material class.                                           | `Density`                             |
| `description`          | `String` (max 2048) | Detailed description of the material property.                                                             | `Defines the density of the material` |
| `high_limit`           | `Double`            | Upper limit for the property value, if applicable.                                                         | `10.0`                                |
| `low_limit`            | `Double`            | Lower limit for the property value, if applicable.                                                         | `0.1`                                 |
| `format`               | `String`            | Formatting string for the property, useful for display or input parsing.                                   | `0.00`                                |
| `nullable`             | `Boolean`           | Indicates if the property value can be null.                                                               | `false`                               |
| `options`              | `String`            | Additional options or constraints for the property, if any.                                                | `Option1, Option2`                    |
| `units`                | `String`            | Units associated with the property, if applicable.                                                         | `kW`                                  |
| `material_class_id`    | `String` (ULID)     | References the material class to which this property belongs. See [material_classes](material-class).      | `01JAP8R5RT-3FPXQABY-7KQZT6VF`        |

## Field Details

### `data_type`

Specifies the data type of the property value, allowing properties to be typed as `String`, `Integer`, `Float`, and
more, based on the material’s requirements.

### `default_*_value`

The default value fields (`default_blob_value`, `default_date_value`, `default_float_value`, `default_int_value`,
`default_string_value`) specify initial values for the property based on its `data_type`.

### `name`

The `name` field is a descriptive identifier for the material property, such as "Density" or "Color."

### `description`

An optional, detailed description of the property that provides additional context or usage information.

### `high_limit` and `low_limit`

- **high_limit**: The maximum allowable value for the property, if applicable.
- **low_limit**: The minimum allowable value for the property, if applicable.

These fields are particularly useful for numeric properties, ensuring that values remain within an acceptable range.

### `format`

An optional field for defining how the property should be displayed or input, such as a numeric format string.

### `nullable`

Indicates if the property value is required or can be left empty (`null`).

### `units`

Specifies the units of measurement for the property (e.g., "kW" for power). This field helps in standardizing the
interpretation of values.

This is for display purposes only and is not a reference to any [unit_of_measure](../utility-models/unit-of-measure-model/unit-of-measure) entity.

### `material_class_id`

References the `MaterialClass` entity associated with this property, ensuring that each material within the class can
share common properties.  
See [material_classes](material-class) for details on `MaterialClass`.