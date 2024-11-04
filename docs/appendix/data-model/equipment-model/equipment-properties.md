---
sidebar_position: 3
title: "equipment_properties"
description: "Documentation for the equipment_properties table, outlining its columns and structure."
---

# Equipment Property

## Overview

The `EquipmentProperty` entity defines attributes that are shared across all instances of an `EquipmentClass`. For
example, an `EquipmentClass` of "Motor" might have a property such as "Horsepower" that applies to all motors, though
the actual values may vary for each individual motor. This structure allows standardized properties for each category of
equipment.

## Table Structure

The following table outlines the SQL columns for the `equipment_properties` table, providing a brief description of
each, along with sample data where applicable.

| Column               | Type                | Description                                                                | Example                                 |
|----------------------|---------------------|----------------------------------------------------------------------------|-----------------------------------------|
| `id`                 | `String` (ULID)     | Unique identifier for the equipment property.                              | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`          |
| `equipment_class_id` | `String` (ULID)     | References the equipment class to which this property belongs.             | `01JAP8R5RT-3FPXQABY-7KQZT6VF`          |
| `name`               | `String`            | Name of the property (e.g., "Horsepower").                                 | `Horsepower`                            |
| `description`        | `String` (max 2048) | Detailed description of the property.                                      | `Defines the power output of the motor` |
| `data_type`          | `Enum`              | Data type of the property, specifying the format of the property's values. | `INTEGER`                               |
| `default_value`      | `Object`            | Default value for the property, used if no specific value is provided.     | `100`                                   |
| `hi_limit`           | `Double`            | Optional upper limit for the property value, if applicable.                | `150.0`                                 |
| `lo_limit`           | `Double`            | Optional lower limit for the property value, if applicable.                | `50.0`                                  |
| `units`              | `String`            | Units associated with the property value (e.g., "kW" for power).           | `kW`                                    |

## Field Details

### `equipment_class_id`

References the `EquipmentClass` that this property applies to. This relationship allows the property to be defined at
the class level and inherited by all instances within the class.

### `name`

The name of the property, which provides a clear identifier (e.g., "Horsepower") for the characteristic it represents.

### `description`

An optional field for a more detailed description of the property, with a character limit of 2048. This field can
provide additional context about the purpose or specifications of the property.

### `data_type`

Defines the data type of the property, specifying how the property's values should be interpreted (e.g., as an integer,
string, etc.). This helps ensure consistent value formats across instances of the property.

### `default_value`

An optional default value for the property, which will be applied if no specific value is set for an instance of the
equipment.

### `hi_limit` and `lo_limit`

Optional fields that set upper and lower bounds for the property value, if applicable. These limits help enforce
acceptable ranges for properties with measurable constraints.

### `units`

Specifies the units of measurement for the property (e.g., "kW" for power). This field helps in standardizing the
interpretation of values.