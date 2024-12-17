---
sidebar_position: 5
title: "material_property_values"
description: "Documentation for the material_property_values table, outlining its columns and structure."
---

# Material Property Values

## Overview

The `MaterialPropertyValue` entity stores the actual values of properties for specific material instances. Each property
value is linked to a material and its associated property, allowing customization and specific attributes to be set at
the individual material level.

## Table Structure

The following table outlines the SQL columns for the `material_property_values` table, providing a brief description of
each, along with sample data where applicable.

| Column        | Type            | Description                                                                                               | Example                        |
|---------------|-----------------|-----------------------------------------------------------------------------------------------------------|--------------------------------|
| `id`          | `String` (ULID) | Unique identifier for the material property value.                                                        | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1` |
| `material_id` | `String` (ULID) | References the material to which this property value belongs. See [materials](material).              | `01JAP8R5RT-3FPXQABY-7KQZT6VF` |
| `property_id` | `String` (ULID) | References the property being applied to the material. See [material_properties](material-property). | `01JAP8RJBN-4VYZUKE1-LY2QHV8X` |
| `value`       | `Mixed`         | The actual value assigned to the property for this material instance, such as a string or number.         | `7.85`                         |

## Field Details

### `material_id`

References the `Material` entity that this property value is associated with, allowing specific attributes to be
assigned to individual materials.
See [materials](material) for details on `Material`.

### `property_id`

References the `MaterialProperty` entity defining the property being set, enabling customization and unique attributes
for materials.
See [material_properties](material-property) for details on `MaterialProperty`.

### `value`

Stores the actual value of the property for this material instance. The data type varies depending on the property’s
specification, allowing for flexibility in defining material attributes.