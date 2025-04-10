---
sidebar_position: 48
title: "deletePropertyValueFor"
description: "Deletes a specified material property value with the given material path and property name."
---

# system.mes.material.deletePropertyValueFor

## Description

Deletes a [Material Property Values](../../data-model/material-model/material-property-value) record given the material path and property name.
This cannot delete a material property value with references to it.

## Syntax

```python
system.mes.material.deletePropertyValueFor(materialPath, propertyName)
```

## Parameters

| Parameter      | Type     | Description               |
| -------------- | -------- | ------------------------- |
| `materialPath` | `String` | The path of the material. |
| `propertyName` | `String` | The name of the property. |

## Returns

If successful, no response is returned. If unsuccessful, an InUseException, IllegalArgumentException or ConstraintViolationException is thrown.
If the property value that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
| --------- | --------- | ----------------------------------------------------------- |
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete a material property value by the material path and property name
system.mes.material.deletePropertyValueFor('IRB/5391537510212', 'Density')
```
