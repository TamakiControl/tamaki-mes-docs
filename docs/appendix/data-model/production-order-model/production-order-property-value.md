---
sidebar_position: 5
title: "production_order_property_values"
description: "Documentation for the production_order_property_values table, detailing columns and constraints in the database schema."
---

# Production Order Property Values Table

## Overview

The `production_order_property_values` table stores specific values for properties associated with production orders.
Each entry links a production order to a property defined in `production_order_properties`, allowing for unique
configurations per order.

## Table Structure

| Column                | Type           | Description                                                                                                                                                               | Example                  |
|-----------------------|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| `id`                  | `varchar(255)` | Primary key, unique identifier for the property value entry.                                                                                                              | `01FZ8P9BJN-4VYZUKE1`    |
| `blob_value`          | `longblob`     | Value stored as a blob, used for properties storing binary data.                                                                                                          | `N/A`                    |
| `data_type`           | `varchar(255)` | Specifies the data type of the property value (e.g., `STRING`, `INTEGER`, `FLOAT`).                                                                                       | `STRING`                 |
| `date_value`          | `datetime`     | Value stored as a datetime, if the property is date-based.                                                                                                                | `2024-06-15 00:00:00`    |
| `float_value`         | `double`       | Value stored as a floating-point number, for properties of type `FLOAT`.                                                                                                  | `10.5`                   |
| `int_value`           | `bigint`       | Value stored as an integer, applicable to integer properties.                                                                                                             | `100`                    |
| `string_value`        | `longtext`     | Value stored as a string, suitable for text-based properties.                                                                                                             | `Standard Configuration` |
| `production_order_id` | `varchar(255)` | Foreign key to `production_orders`, linking to the associated production order. See [production_orders](production-order).                                            | `01FZ8P9BJN-4VYZUKE1`    |
| `property_id`         | `varchar(255)` | Foreign key to `production_order_properties`, specifying the property to which this value corresponds. See [production_order_properties](production-order-property). | `01FZ8P9BJN-4VYZUKE1`    |

## Constraints

- **Primary Key**: `id` - Uniquely identifies each property value entry.
- **Unique Key**: `(production_order_id, property_id)` - Ensures that each property value within a production order is
  unique.
- **Foreign Keys**:
  - `property_id` → `production_order_properties(id)`
  - `production_order_id` → `production_orders(id)`

---

The `production_order_property_values` table enables custom values for production order properties, providing
flexibility for specific configurations within TamakiMES.