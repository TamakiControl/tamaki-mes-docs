---
sidebar_position: 43
title: "getPropertiesAndValuesForMaterial"
description: "Retrieves all properties and property values for a specified material."
---

# system.mes.material.getPropertiesAndValuesForMaterial

## Description

Retrieves all [Material Properties](../../data-model/material-model/material-property) and [Material Property Values](../../data-model/material-model/material-property-value)
records by its material ID or path.

## Syntax

```python
system.mes.material.getPropertiesAndValuesForMaterial(idOrPath)
```

## Parameters

| Parameter  | Type     | Description                       |
| ---------- | -------- | --------------------------------- |
| `idOrPath` | `String` | The ULID or path of the material. |

<!-- TODO -->
<!-- ## Returns

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
| `spare3`             | `String`        | Additional field for user-defined context.                                                                         | -->

## Code Examples

```python
# Retrieve all material properties and property values by material ID or path
properties_and_values = system.mes.material.getPropertiesAndValuesForMaterial('IRB/5391537510212')

# Output the material properties and property values
print(properties_and_values)
```
