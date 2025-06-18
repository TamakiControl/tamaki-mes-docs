---
sidebar_position: 2
title: "production_order_bill_of_materials"
description: "Documentation for the production_order_bill_of_materials table, detailing columns and constraints in the database schema."
---

# Production Order Bill of Material

## Overview

The `ProductionOrderBillOfMaterial` entity defines the materials required for producing a unit within a specific
production order. Each entry specifies the material, its quantity per unit, and additional details, enabling precise
planning and material allocation.

## Table Structure

The following table outlines the SQL columns for the `production_order_bill_of_materials` table, providing a brief description of
each, along with sample data where applicable.

| Column                       | Type            | Description                                                                                                                                        | Example                             |
|------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`                         | `String` (ULID) | Unique identifier for the entity.                                                                                                                  | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`                    | `Boolean`       | If the entity is enabled or not.                                                                                                                   | `true`                              |
| `created_date`               | `DateTime`      | Date the entity was created.                                                                                                                       | `2024-12-31T19:48:44Z`              |
| `created_by`                 | `String`        | Person who created the entity.                                                                                                                     | `TamakiMES`                         |
| `modified_date`              | `DateTime`      | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.                                       | `2024-12-31T19:48:44Z`              |
| `modified_by`                | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit.                                   | `TamakiMES`                         |
| `notes`                      | `String`        | Notes about the entity.                                                                                                                            | `This entity has these extra notes` |
| `spare1`                     | `String`        | The first spare column that can be used for additional context on the entity.                                                                      | `some extra context 1`              |
| `spare2`                     | `String`        | The second spare column that can be used for additional context on the entity.                                                                     | `some extra context 2`              |
| `spare3`                     | `String`        | The third spare column that can be used for additional context on the entity.                                                                      | `some extra context 3`              |
| `material_group`             | `String`        | Group categorizing similar materials, supporting organized tracking.                                                                               | `Raw Materials`                     |
| `material_type`              | `String` (Enum) | Type of material, as defined by the **MaterialType** enum.                                                                                         | `PRODUCT`                           |
| `position`                   | `Integer`       | Position or order of the material within the production order’s materials list.                                                                    | `1`                                 |
| `quantity_order`             | `Double`        | Total quantity required for the entire production order.                                                                                           | `500.0`                             |
| `quantity_per_produced_unit` | `Double`        | Quantity of the material per unit produced.                                                                                                        | `10.5`                              |
| `material_id`                | `String` (ULID) | References the `Material` that is the input material required for production. See [materials](../material-model/material).                         | `01G8V9S9B9-3QWXS4VC`               |
| `product_material_id`        | `String` (ULID) | References the `Material` product that this bill of materials is used for. See [materials](../material-model/material).                            | `01G8V9S9B9-4YJXS9W8`               |
| `production_order_id`        | `String` (ULID) | References the `ProductionOrder`, linking to the associated production order. See [production_orders](../production-order-model/production-order). | `01FZ8P9BJN-4VYZUKE1`               |
| `unit_of_measure_id`         | `String` (ULID) | References the unit of measure for quantity. See [unit_of_measure](../utility-models/unit-of-measure-model/unit-of-measure).                       | `01JAP8R5RT-3FPXQABY-7KQZT6VF`      |

## Field Details

### `material_group`

The `material_group` field categorizes similar materials and supports organized tracking.

### `material_type`

Represents the type of material, as defined by the **MaterialType** enum, with options such as `COMPONENT`, `PRODUCT`, and `BYPRODUCT`.

### `position`

Represents the position of this bill of materials within the production order's materials list.

### `quantity_order`

Represents the quantity of the material used for the entire production order.

### `quantity_per_produced_unit`

Represents the quantity of the material used per unit produced of the product.

### `material_id`

References the `Material` entity associated with the input material required for production.
See [materials](../material-model/material) for details.

### `product_material_id`

References the `Material` entity associated with the product material that this bill of materials supports.
See [materials](../material-model/material) for details.

### `production_order_id`

References the `ProductionOrder` entity associated with the bill of materials, providing us information on
See [production_orders](../production-order-model/production-order) for details.

### `unit_of_measure_id`

References the unit of measure applicable to this material, such as kilograms or liters, supporting precise tracking of quantities.
See [unit_of_measure](../utility-models/unit-of-measure-model/unit-of-measure) for details.
