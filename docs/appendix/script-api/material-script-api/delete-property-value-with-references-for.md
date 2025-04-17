---
sidebar_position: 49
title: "deletePropertyValueWithReferencesFor"
description: "Deletes the material property value with the given material path and property name and any immediate references to this property value if possible."
---

# system.mes.material.deletePropertyValueWithReferencesFor

## Description

Deletes a [Material Property Values](../../data-model/material-model/material-property-value) record given the material path and property name.
Also deletes immediate references to this material property value if possible.

## Syntax

```python
system.mes.material.deletePropertyValueWithReferencesFor(materialPath, propertyName)
```

## Parameters

| Parameter      | Type     | Description               |
| -------------- | -------- | ------------------------- |
| `materialPath` | `String` | The path of the material. |
| `propertyName` | `String` | The name of the property. |

## Returns

If successful, no response is returned. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.

## Code Examples

```python
# Delete a material property value by the material path and property name
system.mes.material.deletePropertyValueWithReferencesFor('IRB/5391537510212', 'Density')
```
