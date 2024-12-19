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

| Column                | Type            | Description                                                                                             | Example                        |
|-----------------------|-----------------|---------------------------------------------------------------------------------------------------------|--------------------------------|
| `id`                  | `String` (ULID) | Unique identifier for the inventory record.                                                             | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1` |
| `storage_location_id` | `String` (ULID) | References the location where the inventory is stored. See [locations](../location-model/location). | `01JAP8R5RT-3FPXQABY-7KQZT6VF` |
| `material_lot_id`     | `String` (ULID) | References the material lot stored in this location. See [material_lots](material-lot).             | `01JAP8RJBN-4VYZUKE1-LY2QHV8X` |
| `quantity`            | `Double`        | Current quantity of material in this inventory record.                                                  | `250.0`                        |

## Field Details

### `storage_location_id`

References the `Location` entity where this inventory is stored, allowing precise tracking of material storage within
the facility.
See [locations](../location-model/location) for details on `Location`.

### `material_lot_id`

Links to the specific `MaterialLot` associated with this inventory record, enabling tracking of unique lots within each
storage location.
See [material_lots](material-lot) for details on `MaterialLot`.

### `quantity`

Represents the current quantity of material in this specific inventory record. This field allows for accurate management
of material stock levels and tracking across multiple locations.