---
sidebar_position: 3
title: "equipment_properties"
description: "Documentation for the equipment_properties table, outlining its columns and structure."
---

# Equipment Property

## Overview

The `EquipmentProperty` entity defines attributes that are shared across all instances of an `EquipmentClass`. For
example, an `EquipmentClass` of "Motor" might have a property such as "Horsepower" that applies to all motors, though
the actual values may vary for each individual motor. This structure allows standardized properties for each category of
equipment.

## Table Structure

The following table outlines the SQL columns for the `equipment_properties` table, providing a brief description of
each, along with sample data where applicable.

| Column                   | Type                | Description                                                                     | Example                                 |
|--------------------------|---------------------|---------------------------------------------------------------------------------|-----------------------------------------|
| `id`                     | `String` (ULID)     | Unique identifier for the entity.                                               | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`          |
| `enabled`                | `Boolean`           | If the entity is enabled or not.                                                | `true`                                  |
| `created-date`           | `DateTime`          | Date the entity was created.                                                    | `2024-12-31T19:48:44Z`                  |
| `created-by`             | `String`            | Person who created the entity.                                                  | `TamakiMES`                             |
| `modified-date`          | `DateTime`          | Date the entity was created.                                                    | `2024-12-31T19:48:44Z`                  |
| `modified-by`            | `String`            | Last person to modify the entity.                                               | `TamakiMES`                             |
| `notes`                  | `LongText`          | Notes about the entity.                                                         | `This entity has these extra notes`     |
| `spare1`                 | `String`            | The first spare column that can be used for additional context on the entity.   | `some extra context 1`                  |
| `spare2`                 | `String`            | The second spare column that can be used for additional context on the entity.  | `some extra context 2`                  |
| `spare3`                 | `String`            | The third spare column that can be used for additional context on the entity.   | `some extra context 3`                  |
| `data_type`              | `String`            | Specifies the data type of the property, such as `INTEGER` or `STRING`.         | `FLOAT`                                 |
| `default_blob_value`     | `LongBlob`          | Default binary value for the property if `data_type` is binary-compatible.      | `Binary data`                           |
| `default_date_value`     | `Datetime`          | Default date value for the property, if applicable.                             | `2024-05-01 00:00:00`                   |
| `default_float_value`    | `Double`            | Default floating-point value, if applicable.                                    | `10.5`                                  |
| `default_int_value`      | `BigInt`            | Default integer value for the property, if applicable.                          | `100`                                   |
| `default_string_value`   | `String`            | Default string value for the property, if applicable.                           | `Default Value`                         |
| `description`            | `String`            | Optional description of the property.                                           | `Temperature setting`                   |
| `format`                 | `String`            | Optional format string for property display.                                    | `#.##`                                  |
| `high_limit`             | `Double`            | High limit for the property's value, if applicable.                             | `100.0`                                 |
| `low_limit`              | `Double`            | Low limit for the property's value, if applicable.                              | `0.0`                                   |
| `name`                   | `String`            | Unique name of the property across all properties.                              | `HorsePower`                            |
| `nullable`               | `Boolean`           | Indicates whether the property value can be null.                               | `false`                                 |
| `options`                | `String`            | Additional options or constraints for the property, if any.                     | `Option1, Option2`                      |
| `units`                  | `String`            | Units associated with the property, if applicable.                              | `kW`                                    |
| `equipment_class_id`     | `String` (ULID)     | References the equipment class to which this property belongs.                  | `01JAP8R5RT-3FPXQABY-7KQZT6VF`          |

## Field Details

### `data_type`

Specifies the data type of the property, such as `INTEGER`, `STRING`, `FLOAT`, or `DATETIME`, which defines the kind of
data this property holds.

### `default_*_value`

The default value fields (`default_blob_value`, `default_date_value`, `default_float_value`, `default_int_value`,
`default_string_value`) specify initial values for the property based on its `data_type`.

### `format`

An optional field that allows formatting the display of property values, useful for data precision or specific
formatting needs.

### `high_limit` and `low_limit`

Defines the acceptable range for the property’s values. These constraints help enforce limits on numeric properties.

### `nullable`

Indicates whether the property can have null values, allowing flexibility in optional or required property
configurations.

### `units`

Specifies the units of measurement for the property (e.g., "kW" for power). This field helps in standardizing the
interpretation of values.

### `equipment_class_id`

References the `EquipmentClass` that this property applies to. This relationship allows the property to be defined at
the class level and inherited by all instances within the class.