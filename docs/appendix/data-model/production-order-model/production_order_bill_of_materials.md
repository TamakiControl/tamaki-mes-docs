---
sidebar_position: 2
title: "production_order_bill_of_materials"
description: "Documentation for the production_order_bill_of_materials table, detailing columns and constraints in the database schema."
---

# Production Order Bill of Materials Table

## Overview

The `production_order_bill_of_materials` table defines the materials required for producing a unit within a specific
production order. Each entry specifies the material, its quantity per unit, and additional details, enabling precise
planning and material allocation.

## Table Structure

| Column                       | Type           | Description                                                                                                                                                        | Example               |
|------------------------------|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|
| `id`                         | `varchar(255)` | Primary key, unique identifier for the bill of materials entry.                                                                                                    | `01FZ8P9BJN-4VYZUKE1` |
| `material_group`             | `varchar(255)` | Group categorizing similar materials, supporting organized tracking.                                                                                               | `Raw Materials`       |
| `material_type`              | `varchar(255)` | Type of material, such as `COMPONENT`, `PRODUCT`, or `BYPRODUCT`.                                                                                                  | `COMPONENT`           |
| `position`                   | `int`          | Position or order of the material within the production order’s materials list.                                                                                    | `1`                   |
| `quantity_order`             | `double`       | Total quantity required for the entire production order.                                                                                                           | `500.0`               |
| `quantity_per_produced_unit` | `double`       | Quantity of the material per unit produced.                                                                                                                        | `10.5`                |
| `material_id`                | `varchar(255)` | Foreign key to `materials`, identifying the input material required for production. See [materials](../material-model/materials.md).                               | `01G8V9S9B9-3QWXS4VC` |
| `product_material_id`        | `varchar(255)` | Foreign key to `materials`, referencing the product material that this bill of materials supports. See [materials](../material-model/materials.md).                | `01G8V9S9B9-4YJXS9W8` |
| `production_order_id`        | `varchar(255)` | Foreign key to `production_orders`, linking to the specific production order. See [production_orders](production_orders.md).                                       | `01FZ8P9BJN-4VYZUKE1` |
| `unit_of_measure_id`         | `varchar(255)` | Foreign key to `unit_of_measure`, specifying the unit of measure for the material quantity. See [unit_of_measure](../utility-models/uom-model/unit_of_measure.md). | `Liters`              |

## Constraints

- **Primary Key**: `id` - Uniquely identifies each bill of materials entry.
- **Unique Key**: `(production_order_id, material_id)` - Ensures that each material is unique within a production order.
- **Foreign Keys**:
  - `production_order_id` → `production_orders(id)`
  - `material_id` → `materials(id)`
  - `product_material_id` → `materials(id)`
  - `unit_of_measure_id` → `unit_of_measure(id)`

---

This table provides a structured approach for managing materials required in production orders, allowing for detailed
tracking and organization of input materials within TamakiMES.