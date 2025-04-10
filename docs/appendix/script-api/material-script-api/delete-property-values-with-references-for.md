---
sidebar_position: 53
title: "deletePropertyValuesWithReferencesFor"
description: "Deletes all material property values with the given material path and property names and any immediate references to any property value if possible."
---

# system.mes.material.deletePropertyValuesWithReferencesFor

## Description

Deletes all [Material Property Values](../../data-model/material-model/material-property-value) records given the material path and property names.
Also deletes immediate references to any material property value if possible.

## Syntax

```python
system.mes.material.deletePropertyValuesWithReferencesFor(materialPath, propertyNames)
```

## Parameters

| Parameter       | Type           | Description                  |
| --------------- | -------------- | ---------------------------- |
| `materialPath`  | `String`       | The path of the material.    |
| `propertyNames` | `List<String>` | The names of the properties. |

## Returns

If successful, no response is returned. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.

## Code Examples

```python
# Delete all material property values by the material path and property names
system.mes.material.deletePropertyValuesWithReferencesFor('IRB/5391537510212', ['Density', 'Melting Point'])
```
