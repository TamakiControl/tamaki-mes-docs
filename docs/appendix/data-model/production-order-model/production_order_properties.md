---
sidebar_position: 4
title: "production_order_properties"
description: "Documentation for the production_order_properties table, detailing columns and constraints in the database schema."
---

# Production Order Properties Table

## Overview

The `production_order_properties` table defines customizable properties that can be associated with production orders in
TamakiMES. Each property specifies a data type, default values, and other configurations to support flexible production
order management.

## Table Structure

| Column                 | Type           | Description                                                                        | Example                  |
|------------------------|----------------|------------------------------------------------------------------------------------|--------------------------|
| `id`                   | `varchar(255)` | Primary key, unique identifier for the property.                                   | `01FZ8P9BJN-4VYZUKE1`    |
| `data_type`            | `varchar(255)` | Specifies the data type for the property, such as `STRING`, `INTEGER`, or `FLOAT`. | `STRING`                 |
| `default_blob_value`   | `longblob`     | Default blob value, if applicable, for properties storing binary data.             | `N/A`                    |
| `default_date_value`   | `datetime`     | Default date value for date-based properties.                                      | `2024-06-15 00:00:00`    |
| `default_float_value`  | `double`       | Default floating-point value, for properties requiring a float.                    | `10.5`                   |
| `default_int_value`    | `bigint`       | Default integer value, for properties requiring an integer.                        | `100`                    |
| `default_string_value` | `varchar(255)` | Default string value for text-based properties.                                    | `Standard Configuration` |
| `description`          | `varchar(255)` | Brief description of the property, providing context for its use.                  | `Batch size property`    |
| `format`               | `varchar(255)` | Formatting specification for the property value, if applicable.                    | `##.00`                  |
| `high_limit`           | `double`       | Upper limit for the property value, for properties with defined boundaries.        | `100.0`                  |
| `low_limit`            | `double`       | Lower limit for the property value, for properties with defined boundaries.        | `0.0`                    |
| `name`                 | `varchar(255)` | Unique name of the property, required to identify it within the system.            | `Batch Size`             |
| `nullable`             | `bit`          | Indicates whether the property value can be null (`1` for true, `0` for false).    | `0`                      |
| `options`              | `varchar(255)` | List of possible options if the property has a set of predefined values.           | `Option1, Option2`       |
| `units`                | `varchar(255)` | Measurement units for the property value, such as "kg" or "L."                     | `kg`                     |

## Constraints

- **Primary Key**: `id` - Uniquely identifies each property entry.
- **Unique Key**: `name` - Ensures each property name is unique within the system.

---

The `production_order_properties` table enables the addition of custom properties to production orders, offering
configurable attributes to support various production scenarios within TamakiMES.