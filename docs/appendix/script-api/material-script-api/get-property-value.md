---
sidebar_position: 40
title: "getPropertyValue"
description: "Retrieves a property value given its ID."
---

# system.mes.material.getPropertyValue

## Description

Retrieves a [Material Property Values](../../data-model/material-model/material-property-value) record given its ID.

## Syntax

```python
system.mes.material.getPropertyValue(id)
```

## Parameters

| Parameter | Type            | Description                              |
| --------- | --------------- | ---------------------------------------- |
| `id`      | `String` (ULID) | The ULID of the material property value. |

## Returns

Returns a JSON representation of the material property value. Returns nothing if no material property value is found.

| Name                 | Type            | Description                                                                                                        |
| -------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------ |
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
# Retrieve a material property value by its ID
property_value = system.mes.material.getPropertyValueFor('01JRDP4APW-5D56ZQ8C-8949XKYT')

# Output the material property value
print(property_value)
```
