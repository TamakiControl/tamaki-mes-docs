---
sidebar_position: 4
title: "material_inventory"
description: "Documentation for the material_inventory table, outlining its columns and structure."
---

# Material Inventory

## Overview

The `MaterialInventory` entity represents the storage of specific material lots at various locations. Each inventory
record links a material lot to a storage location, allowing for tracking of material quantities across different
locations in the facility. This structure enables effective inventory management by specifying where and how much of
each material lot is stored.

## Table Structure

The following table outlines the SQL columns for the `material_inventory` table, providing a brief description of each,
along with sample data where applicable.

| Column                | Type            | Description                                                                                                         | Example                        |
|-----------------------|-----------------|---------------------------------------------------------------------------------------------------------------------|--------------------------------|
| `id`                  | `String` (ULID) | Unique identifier for the entity.                                                                                   | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1` |
| `enabled`             | `Boolean`       | If the entity is enabled or not.                                                                                    | `true`                         |
| `created_date`        | `DateTime`      | Date the entity was created.                                                                                        | `2024-12-31T19:48:44Z`         |
| `created_by`          | `String`        | Person who created the entity.                                                                                      | `TamakiMES`                    |
| `modified_date`       | `DateTime`      | Date the entity was created.                                                                                        | `2024-12-31T19:48:44Z`         |
| `modified_by`         | `String`        | Last person to modify the entity.                                                                                   | `TamakiMES`                    |
| `notes`               | `Blob`          | Notes about the entity.                                                                                             | `This entity has these extra notes`  |
| `spare1`              | `String`        | The first spare column that can be used for additional context on the entity.                                       | `some extra context 1`         |
| `spare2`              | `String`        | The second spare column that can be used for additional context on the entity.                                      | `some extra context 2`         |
| `spare3`              | `String`        | The third spare column that can be used for additional context on the entity.                                       | `some extra context 3`         |
| `name`                | `String`        | Name of the inventory at that location at that time.                                                                | `165456432135659`              |
| `quantity`            | `Double`        | Current quantity of material in this inventory record.                                                              | `250.0`                        |
| `storage_location_id` | `String` (ULID) | References the location where the inventory is stored. See [locations](../location-model/location).                 | `01JAP8R5RT-3FPXQABY-7KQZT6VF` |
| `material_lot_id`     | `String` (ULID) | References the material lot stored in this location. See [material_lots](material-lot).                             | `01JAP8RJBN-4VYZUKE1-LY2QHV8X` |
| `production_order_id` | `String` (ULID) | References the associated production order. See [production_orders](../production-order-model/production-order).    | `01JAP8RJBN-7KQZT6VF-Q5VUZYPW` |

## Field Details

### `name`

The `name` field provides a descriptive identifier of the inventory at that location at that time, such as a License Plate Number for a pallet.

### `quantity`

Represents the current quantity of material in this specific inventory record. This field allows for accurate management
of material stock levels and tracking across multiple locations.

### `storage_location_id`

References the `Location` entity where this inventory is stored, allowing precise tracking of material storage within
the facility.
See [locations](../location-model/location) for details on `Location`.

### `material_lot_id`

Links to the specific `MaterialLot` associated with this inventory record, enabling tracking of unique lots within each
storage location.
See [material_lots](material-lot) for details on `MaterialLot`.

### `production_order_id`

Indicates the associated `ProductionOrder`, linking the record to a specific production order. This provides
traceability for production-related material activities.
See [production_orders](../production-order-model/production-order) for details.