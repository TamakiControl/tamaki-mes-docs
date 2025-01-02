---
sidebar_position: 4
title: "equipment_property_values"
description: "Documentation for the equipment_property_values table, outlining its columns and structure."
---

# Equipment Property Value

## Overview

The `EquipmentPropertyValue` entity represents the value of a property for a specific instance of `Equipment`. While
`EquipmentProperty` defines attributes at the class level, `EquipmentPropertyValue` provides the actual values for each
property on individual equipment items. For example, if "Horsepower" is a property of the "Motor" equipment class, then
`EquipmentPropertyValue` stores the specific horsepower of each motor.

## Table Structure

The following table outlines the SQL columns for the `equipment_property_values` table, providing a brief description of
each, along with sample data where applicable.

| Column         | Type            | Description                                                                          | Example                        |
|----------------|-----------------|--------------------------------------------------------------------------------------|--------------------------------|
| `id`           | `String` (ULID) | Unique identifier for the entity.                                                    | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1` |
| `enabled`      | `Boolean`       | If the entity is enabled or not.                                                     | `true`                         |
| `created-date` | `DateTime`      | Date the entity was created.                                                         | `2024-12-31T19:48:44Z`         |
| `created-by`   | `String`        | Person who created the entity.                                                       | `TamakiMES`                    |
| `modified-date`| `DateTime`      | Date the entity was created.                                                         | `2024-12-31T19:48:44Z`         |
| `modified-by`  | `String`        | Last person to modify the entity.                                                    | `TamakiMES`                    |
| `notes`        | `LongText`      | Notes about the entity.                                                              | `This entity has these extra notes`  |
| `spare1`       | `String`        | The first spare column that can be used for additional context on the entity.        | `some extra context 1`         |
| `spare2`       | `String`        | The second spare column that can be used for additional context on the entity.       | `some extra context 2`         |
| `spare3`       | `String`        | The third spare column that can be used for additional context on the entity.        | `some extra context 3`         |
| `blob_value`   | `LongBlob`      | Binary data if the property type is binary-compatible.                               | `Binary data`                  |
| `data_type`    | `String`        | Data type of the property value, corresponding to the property’s data type.          | `FLOAT`                        |
| `date_value`   | `Datetime`      | Date value for the property if applicable.                                           | `2024-05-01 00:00:00`          |
| `float_value`  | `Double`        | Floating-point value if the property is of type `FLOAT`.                             | `10.5`                         |
| `int_value`    | `BigInt`        | Integer value if the property type is `INTEGER`.                                     | `100`                          |
| `string_value` | `LongText`      | String value for the property if the type is `STRING`.                               | `Property value text`          |
| `equipment_id` | `String` (ULID) | References the specific equipment to which this property value applies.              | `01JAP8R5RT-3FPXQABY-7KQZT6VF` |
| `property_id`  | `String` (ULID) | References the `EquipmentProperty` that defines the property being valued.           | `01JAP8R5RT-9WTGQRQW-Y3XCRTXF` |
          
## Field Details

### `blob_value`, `date_value`, `float_value`, `int_value`, `string_value`

These columns hold the actual property values, with the relevant field populated based on the `data_type` of the
property. For example:

- **blob_value** is used if the property is a binary type.
- **date_value** stores date values.
- **float_value** holds floating-point values.
- **int_value** stores integer values.
- **string_value** holds text-based values.

### `equipment_id`

References the specific `Equipment` item this property value is associated with, allowing each piece of equipment to
have unique property values based on its actual configuration.

### `property_id`

Links to the `EquipmentProperty` that defines the attribute being valued (e.g., "Horsepower"). This association allows
`EquipmentPropertyValue` to inherit metadata, such as limits or units, from the property definition.