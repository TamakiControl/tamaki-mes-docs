---
sidebar_position: 42
title: "getValueForMaterialAndProperty"
description: "Retrieves a property value for a specified material and property."
---

# system.mes.material.getValueForMaterialAndProperty

## Description

Retrieves a [Material Property Values](../../data-model/material-model/material-property-value) record by its material ID or path and by its property ID or name.


## Permissions

This method requires the `MATERIAL.READ.GET` permission.

## Syntax

```python
system.mes.material.getValueForMaterialAndProperty(materialIdOrPath, propertyIdOrName)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                        |
|--------------------|----------|----------|--------------------------------------------------------------------|
| `materialIdOrPath` | `String` | False    | The ULID or path of the material.                                  |
| `propertyIdOrName` | `String` | False    | The ULID or name of the property for which the value is retrieved. |

## Returns

Returns a JSON representation of the material property value. Returns nothing if no material property value is found.

| Name                 | Type            | Description                                                                                                        |
|----------------------|-----------------|--------------------------------------------------------------------------------------------------------------------|
| `materialId`         | `String` (ULID) | The ULID of the material.                                                                                          |
| `materialPropertyId` | `String` (ULID) | The ULID of the material property.                                                                                 |
| `dataType`           | `String`        | The data type of the property value. Must be the same as the data type of the property.                            |
| `value`              | `Mixed`         | The value assigned to the property value if none is provided. The type is mixed as it depends on what dataType is. |
| `id`                 | `String` (ULID) | The ULID of the material property value.                                                                           |
| `notes`              | `String`        | Notes related to the material property value.                                                                      |
| `enabled`            | `Boolean`       | Indicates if the property value is active and enabled.                                                             |
| `spare1`             | `String`        | Additional field for user-defined context.                                                                         |
| `spare2`             | `String`        | Additional field for user-defined context.                                                                         |
| `spare3`             | `String`        | Additional field for user-defined context.                                                                         |

## Code Examples

```python
# Retrieve a material property value by material ID or path and property ID or name
property_value = system.mes.material.getValueForMaterialAndProperty('IRB/5391537510212', 'Density')

# Output the material property value
print(property_value)
```
