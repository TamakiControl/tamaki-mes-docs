---
sidebar_position: 6
title: "location_property_values"
description: "Documentation for the location_property_values table, outlining its columns and structure."
---

# Location Property Value

## Overview

The `LocationPropertyValue` entity represents specific property values assigned to individual `Location` entities,
allowing each location to have customized property settings. This table links properties defined in `LocationProperty`
to actual `Location` records, storing values for each assigned property.

## Table Structure

The following table outlines the SQL columns for the `location_property_values` table, providing a brief description of
each.

| Column          | Type            | Description                                                                                                                          | Example                             |
|-----------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`            | `String` (ULID) | Unique identifier for the entity.                                                                                                    | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`       | `Boolean`       | If the entity is enabled or not.                                                                                                     | `true`                              |
| `created_date`  | `DateTime`      | Date the entity was created.                                                                                                         | `2024-12-31T19:48:44Z`              |
| `created_by`    | `String`        | Person who created the entity.                                                                                                       | `TamakiMES`                         |
| `modified_date` | `DateTime`      | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.                         | `2024-12-31T19:48:44Z`              |
| `modified_by`   | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit.                     | `TamakiMES`                         |
| `notes`         | `Blob`          | Notes about the entity.                                                                                                              | `This entity has these extra notes` |
| `spare1`        | `String`        | The first spare column that can be used for additional context on the entity.                                                        | `some extra context 1`              |
| `spare2`        | `String`        | The second spare column that can be used for additional context on the entity.                                                       | `some extra context 2`              |
| `spare3`        | `String`        | The third spare column that can be used for additional context on the entity.                                                        | `some extra context 3`              |
| `blob_value`    | `Blob`          | Binary data if the property type is binary-compatible.                                                                               | `Binary data`                       |
| `data_type`     | `String` (Enum) | Data type of the property value, corresponding to the property’s data type.                                                          | `FLOAT`                             |
| `date_value`    | `Datetime`      | Date value for the property if applicable.                                                                                           | `2024-05-01 00:00:00`               |
| `float_value`   | `Double`        | Floating-point value if the property is of type `FLOAT`.                                                                             | `10.5`                              |
| `int_value`     | `BigInt`        | Integer value if the property type is `INTEGER`.                                                                                     | `100`                               |
| `string_value`  | `Blob`          | String value for the property if the type is `STRING`.                                                                               | `Property value text`               |
| `location_id`   | `String` (ULID) | References the `Location` associated with this property value. See [locations](../location-model/location).                          | `01JAP8R5RT-3FPXQABY-7KQZT6VF`      |
| `property_id`   | `String` (ULID) | References the specific `LocationProperty` assigned to the location. See [location_properties](../location-model/location-property). | `01JAP8RJBN-4VYZUKE1-LY2QHV8X`      |

## Field Details

### `blob_value`, `date_value`, `float_value`, `int_value`, `string_value`

These columns hold the actual property values, with the relevant field populated based on the `data_type` of the
property. For example:

- **blob_value** is used if the property is a binary type.
- **date_value** stores date values.
- **float_value** holds floating-point values.
- **int_value** stores integer values.
- **string_value** holds text-based values.

### `location_id`

References the `Location` associated with this property value, enabling specific property settings per location.
See [locations](../location-model/location) for details.

### `property_id`

References the `LocationProperty` assigned to the location, linking to a defined property and its characteristics.
See [location_properties](../location-model/location-property) for details.

## Relationship Structure

Each entry in the `location_property_values` table assigns a specific value to a property for an individual location,
allowing unique configurations across locations. The table uses a composite unique key on `location_id` and
`property_id` to prevent duplicate property assignments for the same location.
