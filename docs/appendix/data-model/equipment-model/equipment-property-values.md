---
sidebar_position: 4
title: "equipment_property_values"
description: "Documentation for the equipment_property_values table, outlining its columns and structure."
---

# Equipment Property Value

## Overview

The `EquipmentPropertyValue` entity represents the value of a property for a specific instance of `Equipment`. While
`EquipmentProperty` defines attributes at the class level, `EquipmentPropertyValue` provides the actual values for each
property on individual equipment items. For example, if "Horsepower" is a property of the "Motor" equipment class, then
`EquipmentPropertyValue` stores the specific horsepower of each motor.

## Table Structure

The following table outlines the SQL columns for the `equipment_property_values` table, providing a brief description of
each, along with sample data where applicable.

| Column         | Type            | Description                                                                | Example                        |
|----------------|-----------------|----------------------------------------------------------------------------|--------------------------------|
| `id`           | `String` (ULID) | Unique identifier for the equipment property value.                        | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1` |
| `equipment_id` | `String` (ULID) | References the specific equipment to which this property value applies.    | `01JAP8R5RT-3FPXQABY-7KQZT6VF` |
| `property_id`  | `String` (ULID) | References the `EquipmentProperty` that defines the property being valued. | `01JAP8R5RT-9WTGQRQW-Y3XCRTXF` |
| `value`        | `Object`        | The actual value of the property for this equipment instance.              | `150`                          |
| `data_type`    | `Enum`          | Specifies the data type for the property value (e.g., Integer, String).    | `INTEGER`                      |

## Field Details

### `equipment_id`

References the specific `Equipment` item this property value is associated with, allowing each piece of equipment to
have unique property values based on its actual configuration.

### `property_id`

Links to the `EquipmentProperty` that defines the attribute being valued (e.g., "Horsepower"). This association allows
`EquipmentPropertyValue` to inherit metadata, such as limits or units, from the property definition.

### `value`

Holds the actual value of the property for this equipment instance. This field allows each equipment item to have
distinct values for the same property (e.g., different horsepower for each motor).

### `data_type`

Specifies the data type of the property value, ensuring consistency in how the value is interpreted. This can include
types like Integer, String, etc.