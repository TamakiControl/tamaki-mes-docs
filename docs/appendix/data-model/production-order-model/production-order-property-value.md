---
sidebar_position: 5
title: "production_order_property_values"
description: "Documentation for the production_order_property_values table, detailing columns and constraints in the database schema."
---

# Production Order Property Value

## Overview

The `ProductionOrderPropertyValue` entity stores specific values for properties associated with production orders.
Each entry links a production order to a property defined in `production_order_properties`, allowing for unique
configurations per order.

## Table Structure

The following table outlines the SQL columns for the `production_order_property_values` table, providing a brief description of
each.

| Column                | Type            | Description                                                                                                                                            | Example                             |
| --------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| `id`                  | `String` (ULID) | Unique identifier for the entity.                                                                                                                      | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`             | `Boolean`       | If the entity is enabled or not.                                                                                                                       | `true`                              |
| `created_date`        | `DateTime`      | Date the entity was created.                                                                                                                           | `2024-12-31T19:48:44Z`              |
| `created_by`          | `String`        | Person who created the entity.                                                                                                                         | `TamakiMES`                         |
| `modified_date`       | `DateTime`      | Date the entity was created.                                                                                                                           | `2024-12-31T19:48:44Z`              |
| `modified_by`         | `String`        | Last person to modify the entity.                                                                                                                      | `TamakiMES`                         |
| `notes`               | `Blob`          | Notes about the entity.                                                                                                                                | `This entity has these extra notes` |
| `spare1`              | `String`        | The first spare column that can be used for additional context on the entity.                                                                          | `some extra context 1`              |
| `spare2`              | `String`        | The second spare column that can be used for additional context on the entity.                                                                         | `some extra context 2`              |
| `spare3`              | `String`        | The third spare column that can be used for additional context on the entity.                                                                          | `some extra context 3`              |
| `blob_value`          | `Blob`          | Binary data if the property type is binary-compatible.                                                                                                 | `Binary data`                       |
| `data_type`           | `String`        | Data type of the property value, corresponding to the property’s data type.                                                                            | `FLOAT`                             |
| `date_value`          | `Datetime`      | Date value for the property if applicable.                                                                                                             | `2024-05-01 00:00:00`               |
| `float_value`         | `Double`        | Floating-point value if the property is of type `FLOAT`.                                                                                               | `10.5`                              |
| `int_value`           | `BigInt`        | Integer value if the property type is `INTEGER`.                                                                                                       | `100`                               |
| `string_value`        | `Blob`          | String value for the property if the type is `STRING`.                                                                                                 | `Property value text`               |
| `production_order_id` | `String`        | References the `ProductionOrder`, linking to the associated production order. See [production_orders](../production-order-model/production-order).     | `01FZ8P9BJN-4VYZUKE1`               |
| `property_id`         | `String`        | References the property being applied to the production order. See [production_order_properties](../production-order-model/production-order-property). | `01FZ8P9BJN-4VYZUKE1`               |

## Field Details

### `blob_value`, `date_value`, `float_value`, `int_value`, `string_value`

These columns hold the actual property values, with the relevant field populated based on the `data_type` of the
property. For example:

- **blob_value** is used if the property is a binary type.
- **date_value** stores date values.
- **float_value** holds floating-point values.
- **int_value** stores integer values.
- **string_value** holds text-based values.

### `production_order_id`

References the `ProductionOrder` entity that this property value is associated with, allowing specific attributes to be
assigned to individual production orders.
See [production_orders](../production-order-model/production-order) for details.

### `property_id`

References the `ProductionOrderProperty` entity defining the property being set, enabling customization and unique attributes
for production orders.
See [production_order_properties](../production-order-model/production-order-property) for details.
