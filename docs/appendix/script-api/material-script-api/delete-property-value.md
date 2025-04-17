---
sidebar_position: 46
title: "deletePropertyValue"
description: "Deletes a specified material property value with the given ID."
---

# system.mes.material.deletePropertyValue

## Description

Deletes a [Material Property Values](../../data-model/material-model/material-property-value) record by its ID.
This cannot delete a material property value with references to it.

## Syntax

```python
system.mes.material.deletePropertyValue(id)
```

## Parameters

| Parameter | Type            | Description                                      |
| --------- | --------------- | ------------------------------------------------ |
| `id`      | `String` (ULID) | The ID of the material property value to delete. |

## Returns

If successful, no response is returned. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.
If the property value that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
| --------- | --------- | ----------------------------------------------------------- |
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete a material property value by ID
system.mes.material.deletePropertyValue('01JRDP4APW-5D56ZQ8C-8949XKYT')
```
