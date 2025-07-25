---
sidebar_position: 4
title: "location_properties"
description: "Documentation for the location_properties table, outlining its columns and structure."
---

# Location Property

## Overview

The `LocationProperty` entity defines configurable properties that can be assigned to various locations within the
manufacturing environment. These properties specify attributes or characteristics that are shared by locations of
similar types, supporting customization and configuration at the property level. Each property includes a name, data
type, default values, and optional metadata.

## Table Structure

The following table outlines the SQL columns for the `location_properties` table, providing a brief description of each.

| Column                 | Type              | Description                                                                                                                      | Example                             |
|------------------------|-------------------|----------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`                   | `String` (ULID)   | Unique identifier for the entity.                                                                                                | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`              | `Boolean`         | If the entity is enabled or not.                                                                                                 | `true`                              |
| `created_date`         | `DateTime`        | Date the entity was created.                                                                                                     | `2024-12-31T19:48:44Z`              |
| `created_by`           | `String`          | Person who created the entity.                                                                                                   | `TamakiMES`                         |
| `modified_date`        | `DateTime`        | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.                     | `2024-12-31T19:48:44Z`              |
| `modified_by`          | `String`          | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit.                 | `TamakiMES`                         |
| `notes`                | `String`          | Notes about the entity.                                                                                                          | `This entity has these extra notes` |
| `spare1`               | `String`          | The first spare column that can be used for additional context on the entity.                                                    | `some extra context 1`              |
| `spare2`               | `String`          | The second spare column that can be used for additional context on the entity.                                                   | `some extra context 2`              |
| `spare3`               | `String`          | The third spare column that can be used for additional context on the entity.                                                    | `some extra context 3`              |
| `data_type`            | `String` (Enum)   | Specifies the data type of the property, such as `INTEGER` or `STRING`.                                                          | `FLOAT`                             |
| `default_blob_value`   | `Blob`            | Default binary value for the property if `data_type` is binary-compatible.                                                       | `N/A`                               |
| `default_date_value`   | `Datetime`        | Default date value for the property, if applicable.                                                                              | `2024-05-01 00:00:00`               |
| `default_float_value`  | `Double`          | Default floating-point value, if applicable.                                                                                     | `10.5`                              |
| `default_int_value`    | `BigInt`          | Default integer value for the property, if applicable.                                                                           | `100`                               |
| `default_string_value` | `String`          | Default string value for the property, if applicable.                                                                            | `Default Value`                     |
| `description`          | `String`          | Optional description of the property.                                                                                            | `Temperature setting`               |
| `format`               | `String`          | Optional format string for property display.                                                                                     | `#.##`                              |
| `high_limit`           | `Double`          | High limit for the property's value, if applicable.                                                                              | `100.0`                             |
| `low_limit`            | `Double`          | Low limit for the property's value, if applicable.                                                                               | `0.0`                               |
| `name`                 | `String` (Unique) | Unique name of the property across all properties.                                                                               | `MaxTemperature`                    |
| `nullable`             | `Boolean`         | Indicates whether the property value can be null.                                                                                | `false`                             |
| `options`              | `String`          | Additional options or constraints for the property, if any.                                                                      | `Option1, Option2`                  |
| `unit_of_measure_id`   | `String` (ULID)   | References the unit of measure for the property. See [unit_of_measure](../utility-models/unit-of-measure-model/unit-of-measure). | `01JAP8RJBN-4VYZUKE1-LY2QHV8X`      |

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

### `unit_of_measure_id`

References the unit of measure applicable to this property, such as kilograms or liters, supporting context for values as well as conversions.
See [unit_of_measure](../utility-models/unit-of-measure-model/unit-of-measure) for details.