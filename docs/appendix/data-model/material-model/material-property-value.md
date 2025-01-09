---
sidebar_position: 5
title: "material_property_values"
description: "Documentation for the material_property_values table, outlining its columns and structure."
---

# Material Property Value

## Overview

The `MaterialPropertyValue` entity stores the actual values of properties for specific material instances. Each property
value is linked to a material and its associated property, allowing customization and specific attributes to be set at
the individual material level.

## Table Structure

The following table outlines the SQL columns for the `material_property_values` table, providing a brief description of
each, along with sample data where applicable.

| Column          | Type            | Description                                                                                                            | Example                              |
|-----------------|-----------------|------------------------------------------------------------------------------------------------------------------------|--------------------------------------|
| `id`            | `String` (ULID) | Unique identifier for the entity.                                                                                      | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`       |
| `enabled`       | `Boolean`       | If the entity is enabled or not.                                                                                       | `true`                               |
| `created_date`  | `DateTime`      | Date the entity was created.                                                                                           | `2024-12-31T19:48:44Z`               |
| `created_by`    | `String`        | Person who created the entity.                                                                                         | `TamakiMES`                          |
| `modified_date` | `DateTime`      | Date the entity was created.                                                                                           | `2024-12-31T19:48:44Z`               |
| `modified_by`   | `String`        | Last person to modify the entity.                                                                                      | `TamakiMES`                          |
| `notes`         | `Blob`          | Notes about the entity.                                                                                                | `This entity has these extra notes`  |
| `spare1`        | `String`        | The first spare column that can be used for additional context on the entity.                                          | `some extra context 1`               |
| `spare2`        | `String`        | The second spare column that can be used for additional context on the entity.                                         | `some extra context 2`               |
| `spare3`        | `String`        | The third spare column that can be used for additional context on the entity.                                          | `some extra context 3`               |
| `blob_value`    | `Blob`          | Binary data if the property type is binary-compatible.                                                                 | `Binary data`                        |
| `data_type`     | `String`        | Data type of the property value, corresponding to the property’s data type.                                            | `FLOAT`                              |
| `date_value`    | `Datetime`      | Date value for the property if applicable.                                                                             | `2024-05-01 00:00:00`                |
| `float_value`   | `Double`        | Floating-point value if the property is of type `FLOAT`.                                                               | `10.5`                               |
| `int_value`     | `BigInt`        | Integer value if the property type is `INTEGER`.                                                                       | `100`                                |
| `string_value`  | `Blob`          | String value for the property if the type is `STRING`.                                                                 | `Property value text`                |
| `material_id`   | `String` (ULID) | References the material to which this property value belongs. See [materials](../material-model/material).             | `01JAP8R5RT-3FPXQABY-7KQZT6VF`       |
| `property_id`   | `String` (ULID) | References the property being applied to the material. See [material_properties](../material-model/material-property). | `01JAP8RJBN-4VYZUKE1-LY2QHV8X`       |

## Field Details

### `blob_value`, `date_value`, `float_value`, `int_value`, `string_value`

These columns hold the actual property values, with the relevant field populated based on the `data_type` of the
property. For example:

- **blob_value** is used if the property is a binary type.
- **date_value** stores date values.
- **float_value** holds floating-point values.
- **int_value** stores integer values.
- **string_value** holds text-based values.

### `material_id`

References the `Material` entity that this property value is associated with, allowing specific attributes to be
assigned to individual materials.
See [materials](../material-model/material) for details.

### `property_id`

References the `MaterialProperty` entity defining the property being set, enabling customization and unique attributes
for materials.
See [material_properties](../material-model/material-property) for details.