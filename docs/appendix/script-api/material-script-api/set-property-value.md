---
sidebar_position: 39
title: "setPropertyValue"
description: "Updates the value of a material property value given a material object and a property object."
---

# system.mes.material.setPropertyValue

## Description

Updates the value of a [Material Property Values](../../data-model/material-model/material-property-value) record given
a material ID or path and a property ID or name.

## Syntax

```python
system.mes.material.setPropertyValue(materialIdOrPath, propertyIdOrName, value)
```

## Parameters

| Parameter          | Type     | Description                                                                                                                          |
| ------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `materialIdOrPath` | `String` | The ULID or path of the material.                                                                                                    |
| `propertyIdOrName` | `String` | The ULID or name of the property for which the value is retrieved.                                                                   |
| `value`            | `Mixed`  | The value assigned to the property value if none is provided. The type is mixed as it depends on what the data type of the property. |

## Returns

Returns a JSON representation of the updated material property value.

## Code Examples

```python
# Update the value of a material property value
updated_property_value = system.mes.material.setPropertyValue('IRB/5391537510212', 'Density', 200)

# Output the JSON representation of the updated material property value
print(updated_property_value)
```
