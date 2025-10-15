---
sidebar_position: 52
title: "deletePropertyValuesFor"
description: "Deletes all specified material property values with the given material path and property names."
---

# system.mes.material.deletePropertyValuesFor

## Description

Deletes all [Material Property Values](../../data-model/material-model/material-property-value) records given the material path and property names.
This cannot delete any material property value with references to it.


## Permissions

This method requires the `MATERIAL.WRITE.DELETE` permission.

## Syntax

```python
system.mes.material.deletePropertyValuesFor(materialPath, propertyNames)
```

## Parameters

| Parameter       | Type           | Nullable | Description                  |
|-----------------|----------------|----------|------------------------------|
| `materialPath`  | `String`       | False    | The path of the material.    |
| `propertyNames` | `List<String>` | False    | The names of the properties. |

## Returns

If successful, an ApiResponse Object is returned with the success bool set True. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.
If the property value that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
|-----------|-----------|-------------------------------------------------------------|
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete all material property values by the material path and property names
system.mes.material.deletePropertyValuesFor('IRB/5391537510212', ['Density', 'Melting Point'])
```
