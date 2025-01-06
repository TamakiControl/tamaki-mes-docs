---
sidebar_position: 3
title: "unit_of_measure_conversions"
description: "Documentation for the unit_of_measure_conversions table, outlining its columns and structure."
---

# Unit Of Measure Conversions

## Overview

The `UnitOfMeasureConversions` entity represents a conversion table between different units of measure. The conversion between 
units of measure is by a conversion factor, typically by a multiplicative factor.

## Table Structure

The following table outlines the SQL columns for the `unit_of_measure_conversions` table, providing a brief description of each,
along with sample data where applicable.

| Column                      | Type            | Description                                                                                                                                               | Example                              |
|-----------------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|
| `id`                        | `String` (ULID) | Unique identifier for the entity.                                                                                                                         | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`       |
| `enabled`                   | `Boolean`       | If the entity is enabled or not.                                                                                                                          | `true`                               |
| `created_date`              | `DateTime`      | Date the entity was created.                                                                                                                              | `2024-12-31T19:48:44Z`               |
| `created_by`                | `String`        | Person who created the entity.                                                                                                                            | `TamakiMES`                          |
| `modified_date`             | `DateTime`      | Date the entity was created.                                                                                                                              | `2024-12-31T19:48:44Z`               |
| `modified_by`               | `String`        | Last person to modify the entity.                                                                                                                         | `TamakiMES`                          |
| `notes`                     | `Blob`          | Notes about the entity.                                                                                                                                   | `This entity has these extra notes`  |
| `spare1`                    | `String`        | The first spare column that can be used for additional context on the entity.                                                                             | `some extra context 1`               |
| `spare2`                    | `String`        | The second spare column that can be used for additional context on the entity.                                                                            | `some extra context 2`               |
| `spare3`                    | `String`        | The third spare column that can be used for additional context on the entity.                                                                             | `some extra context 3`               |
| `conversion_factor`         | `Double`        | The numerical factor to convert between two units of measure                                                                                              | `0.001`                              |
| `material_id`               | `String` (ULID) | References the material to which this property value belongs. See [materials](../../material-model/material).                                             | `01JAP8R5RT-3FPXQABY-7KQZT6VF`       |
| `from_unit_of_measure_id`   | `String` (ULID) | References the unit of measure that the value is being converted from. See [unit_of_measure](../../utility-models/unit-of-measure-model/unit-of-measure). | `01JAP8RJBN-3FPXQABY-7KQZT6VF`       |
| `to_unit_of_measure_id`     | `String` (ULID) | References the unit of measure that the value is being converted to. See [unit_of_measure](../../utility-models/unit-of-measure-model/unit-of-measure).   | `01JAP8RJBN-4VYZUKE1-LY2QHV8X`       |

## Field Details

### `conversion_factor`

The `conversion_factor` field defines the numerical value used to convert between two units of measure. It ensures accurate and 
consistent transformations across processes involving different measurement units.

### `material_id`

References the `Material` entity that this property value is associated with, allowing specific attributes to be
assigned to individual materials.
See [materials](../../material-model/material) for details.

### `to_unit_of_measure_id`, `from_unit_of_measure_id`

References the `UnitOfMeasure` entity that the value is being converted to and from, facilitating the conversion between the two `UnitOfMeasure` entities.
See [unit_of_measure](../../utility-models/unit-of-measure-model/unit-of-measure) for details.