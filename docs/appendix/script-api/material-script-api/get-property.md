---
sidebar_position: 31
title: "getProperty"
description: "Retrieves a material property by its ID."
---

# system.mes.material.getProperty

## Description

Retrieves a [Material Properties](../../data-model/material-model/material-property) record by its specified ID.

## Syntax

```python
system.mes.material.getProperty(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                                    |
|-----------|-----------------|----------|------------------------------------------------|
| `id`      | `String` (ULID) | False    | The ULID of the material property to retrieve. |

## Returns

Returns a JSON representation of the material property. Returns nothing if no material property is found.

| Name                  | Type            | Description                                                                                                          |
|-----------------------|-----------------|----------------------------------------------------------------------------------------------------------------------|
| `materialClassId`     | `String` (ULID) | The ULID of the material class associated with this material property.                                               |
| `name`                | `String`        | The name of the material property.                                                                                   |
| `description`         | `String`        | A description of the material property.                                                                              |
| `dataType`            | `String`        | The data type of the property (e.g., Integer, String, Float).                                                        |
| `lowLimit`            | `Double`        | The minimum value allowed for a numerical property.                                                                  |
| `highLimit`           | `Double`        | The maximum value allowed for a numerical property.                                                                  |
| `format`              | `String`        | The format of the property, if applicable.                                                                           |
| `unitOfMeasureId`     | `String` (ULID) | The ULID of the unit of measure for this property.                                                                   |
| `unitOfMeasureName`   | `String`        | The name of the unit of measure for the property. For display purposes only.                                         |
| `unitOfMeasureSymbol` | `String`        | The symbol of the unit of measure for the property. For display purposes only.                                       |
| `options`             | `String`        | List of possible values for the property (e.g., `"[option1, option2]"`).                                             |
| `nullable`            | `Boolean`       | Defines if the property can accept null values.                                                                      |
| `defaultValue`        | `Mixed`         | The default value assigned to the property if none is provided. The type is mixed as it depends on what dataType is. |
| `id`                  | `String` (ULID) | The ULID of the material property (optional, for updating an existing property).                                     |
| `notes`               | `String`        | Notes related to the material property.                                                                              |
| `enabled`             | `Boolean`       | Indicates if the property is active and enabled.                                                                     |
| `spare1`              | `String`        | Additional field for user-defined context.                                                                           |
| `spare2`              | `String`        | Additional field for user-defined context.                                                                           |
| `spare3`              | `String`        | Additional field for user-defined context.                                                                           |

## Code Examples

```python
# Retrieve a material property by ID
property = system.mes.material.getProperty('01JQY39KNJ-E6AH9CCK-WM2XMMRW')

# Output the material property
print(property)
```
