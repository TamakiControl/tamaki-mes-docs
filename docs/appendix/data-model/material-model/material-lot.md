---
sidebar_position: 3
title: "material_lots"
description: "Documentation for the material_lots table, outlining its columns and structure."
---

# Material Lots

## Overview

The `MaterialLot` entity represents a specific batch or lot of a material. Each lot is associated with a parent
material, has a defined status, and includes details like total quantity, expiration date, and unit of measure. This
entity supports tracking and management of materials in discrete quantities for production, inventory, and compliance.

## Table Structure

The following table outlines the SQL columns for the `material_lots` table, providing a brief description of each, along
with sample data where applicable.

| Column               | Type            | Description                                                                                                                 | Example                        |
|----------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------|--------------------------------|
| `id`                 | `String` (ULID) | Unique identifier for the material lot.                                                                                     | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1` |
| `name`               | `String`        | Name of the lot, unique within the context of its parent material.                                                          | `Batch #1001`                  |
| `material_id`        | `String` (ULID) | References the material associated with this lot. See [materials](material).                                            | `01JAP8R5RT-3FPXQABY-7KQZT6VF` |
| `status`             | `Enum`          | Current status of the lot, such as `OPEN`, `CLOSED`, or `SCRAPPED`.                                                         | `OPEN`                         |
| `totalQuantity`      | `Double`        | Total quantity of material contained in the lot.                                                                            | `1500.0`                       |
| `expirationDate`     | `Instant`       | Optional field indicating the expected expiration date of the lot.                                                          | `2024-12-31T23:59:59Z`         |
| `closedDate`         | `Instant`       | Optional field indicating the date the lot was closed.                                                                      | `2024-01-15T12:00:00Z`         |
| `unit_of_measure_id` | `String` (ULID) | References the unit of measure for the lot quantity. See [unit_of_measure](../utility-models/unit-of-measure-model/unit-of-measure). | `01JAP8RJBN-4VYZUKE1-LY2QHV8X` |

## Field Details

### `material_id`

References the `Material` entity associated with this lot, providing context about the material's characteristics and
properties.
See [materials](material) for details on `Material`.

### `status`

Indicates the current state of the lot, using the **LotStatus** enum, with possible values:

- **OPEN**: Lot is active and can be used.
- **CLOSED**: Lot has been closed and is no longer active.
- **SCRAPPED**: Lot has been scrapped and is not usable.

### `totalQuantity`

Specifies the total quantity of the material present in this lot. This value must be zero or greater.

### `expirationDate`

Optional field for the expected expiration date of the material in the lot, primarily used for perishable or
time-sensitive materials.

### `closedDate`

Optional field for the date on which the lot was closed, useful for tracking lifecycle events of the lot.

### `unit_of_measure_id`

References the `UnitOfMeasure` entity associated with the material lot, enabling consistent measurement standards.
See [unit_of_measure](../utility-models/unit-of-measure-model/unit-of-measure) for details on `UnitOfMeasure`.