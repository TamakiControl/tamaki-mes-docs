---
sidebar_position: 1
title: "production_orders"
description: "Documentation for the production_orders table, detailing columns and constraints in the database schema."
---

# Production Orders Table

## Overview

The `production_orders` table manages information related to each production order, including product details,
scheduling, customer information, and production quantities. This table enables efficient tracking and organization of
production orders within the TamakiMES system.

## Table Structure

| Column                | Type           | Description                                                                                                                                                             | Example               |
|-----------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|
| `due_date`            | `datetime`     | Expected completion date for the production order.                                                                                                                      | `2024-06-15 00:00:00` |
| `end_date`            | `datetime`     | Date when the production was completed.                                                                                                                                 | `2024-07-01 12:00:00` |
| `name`                | `varchar(255)` | Unique name identifying the production order.                                                                                                                           | `Order001`            |
| `quantity`            | `double`       | Total quantity planned for production.                                                                                                                                  | `500.0`               |
| `quantity_produced`   | `double`       | Quantity already produced as part of this production order.                                                                                                             | `250.0`               |
| `quantity_scheduled`  | `double`       | Quantity scheduled for production.                                                                                                                                      | `300.0`               |
| `schedule_priority`   | `varchar(255)` | Priority level for scheduling, determining order in the production queue.                                                                                               | `HIGH`                |
| `start_date`          | `datetime`     | Date when production on this order began.                                                                                                                               | `2024-05-01 08:00:00` |
| `status`              | `varchar(255)` | Current status of the production order, such as `IDLE` or `ACTIVE`.                                                                                                     | `ACTIVE`              |
| `location_id`         | `varchar(255)` | Foreign key to `locations`, indicating where the production is taking place. See [locations](../location-model/locations.md).                                           | `01FZ8P9BJN-4VYZUKE1` |
| `product_material_id` | `varchar(255)` | Foreign key to `materials`, referencing the material being produced. See [materials](/appendix/data-model/material-model/materials.md).                                 | `01G8V9S9B9-3QWXS4VC` |
| `customer_id`         | `varchar(255)` | Foreign key to `production_order_customers`, linking the customer associated with the order. See [production_order_customers](production_order_customers.md).           | `01H3XZ9JAB-4VKJ5LNY` |
| `unit_of_measure_id`  | `varchar(255)` | Foreign key to `unit_of_measure`, specifying the unit of measure for quantity. See [unit_of_measure](/appendix/data-model/utility-models/uom-model/unit_of_measure.md). | `Liters`              |

## Constraints

- **Primary Key**: `id` - Uniquely identifies each production order.
- **Unique Key**: `name` - Ensures each production order name is unique within the system.
- **Foreign Keys**:
  - `location_id` → `locations(id)`
  - `product_material_id` → `materials(id)`
  - `customer_id` → `production_order_customers(id)`
  - `unit_of_measure_id` → `unit_of_measure(id)`

---

This table structure provides an efficient layout for managing production orders within the TamakiMES system, allowing
each order to have detailed information on scheduling, quantities, and associated entities.