---
sidebar_position: 2
title: "inventory_lots"
description: "Documentation for the inventory_lots table, outlining its columns and structure."
---

# Inventory Lot

## Overview

The `InventoryLot` entity represents a specific batch or lot of a material. Each lot is associated with a parent
material, has a defined status, and includes details like total quantity, expiration date, and unit of measure. This
entity supports tracking and management of materials in discrete quantities for production, inventory, and compliance.

## Table Structure

The following table outlines the SQL columns for the `inventory_lots` table, providing a brief description of each, along
with sample data where applicable.

| Column               | Type            | Description                                                                                                                          | Example                             |
|----------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`                 | `String` (ULID) | Unique identifier for the entity.                                                                                                    | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`            | `Boolean`       | If the entity is enabled or not.                                                                                                     | `true`                              |
| `created_date`       | `DateTime`      | Date the entity was created.                                                                                                         | `2024-12-31T19:48:44Z`              |
| `created_by`         | `String`        | Person who created the entity.                                                                                                       | `TamakiMES`                         |
| `modified_date`      | `DateTime`      | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.                         | `2024-12-31T19:48:44Z`              |
| `modified_by`        | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit.                     | `TamakiMES`                         |
| `notes`              | `String`        | Notes about the entity.                                                                                                              | `This entity has these extra notes` |
| `spare1`             | `String`        | The first spare column that can be used for additional context on the entity.                                                        | `some extra context 1`              |
| `spare2`             | `String`        | The second spare column that can be used for additional context on the entity.                                                       | `some extra context 2`              |
| `spare3`             | `String`        | The third spare column that can be used for additional context on the entity.                                                        | `some extra context 3`              |
| `name`               | `String`        | Name of the lot, unique within the context of its parent material.                                                                   | `Batch #1001`                       |
| `material_id`        | `String` (ULID) | References the material associated with this lot. See [materials](../material-model/material).                                       | `01JAP8R5RT-3FPXQABY-7KQZT6VF`      |
| `status`             | `String` (Enum) | Current status of the inventory lot, as defined by the **LotStatus** enum.                                                           | `OPEN`                              |
| `total_quantity`     | `Double`        | Total quantity of material contained in the lot.                                                                                     | `1500.0`                            |
| `expiration_date`    | `DateTime`      | Optional field indicating the expected expiration date of the lot.                                                                   | `2024-12-31T23:59:59Z`              |
| `closed_date`        | `DateTime`      | Optional field indicating the date the lot was closed.                                                                               | `2024-01-15T12:00:00Z`              |
| `unit_of_measure_id` | `String` (ULID) | References the unit of measure for the lot quantity. See [unit_of_measure](../utility-models/unit-of-measure-model/unit-of-measure). | `01JAP8RJBN-4VYZUKE1-LY2QHV8X`      |

## Field Details

### `material_id`

References the `Material` entity associated with this lot, providing context about the material's characteristics and
properties.
See [materials](../material-model/material) for details.

### `status`

Indicates the current state of the lot, using the **LotStatus** enum, with possible values:

- **OPEN**: Lot is in the system but not available for use.
- **AVAILABLE**: Lot is available for use.
- **QA_HOLD**: Lot is put on hold by QA. It is quarantined or under inspection and is not available for use.
- **EXPIRED**: Lot is expired. It is not available for use.
- **SHIPPED**: Lot is shipped to a customer.
- **CLOSED**: Lot has been closed and is no longer active.

### `total_quantity`

Specifies the total quantity of the material that has ever existed for this lot. This value must be zero or greater
and goes up when inventory is added but does not go back down when inventory is removed.

### `expiration_date`

Optional field for the expected expiration date of the material in the lot, primarily used for perishable or
time-sensitive materials.

### `closed_date`

Optional field for the date on which the lot was closed, useful for tracking lifecycle events of the lot.

### `unit_of_measure_id`

References the `UnitOfMeasure` entity associated with the inventory lot, enabling consistent measurement standards.
See [unit_of_measure](../utility-models/unit-of-measure-model/unit-of-measure) for details.
