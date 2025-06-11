---
sidebar_position: 35
title: "deleteProperty"
description: "Deletes a specified material property by its ID."
---

# system.mes.material.deleteProperty

## Description

Deletes a [Material Properties](../../data-model/material-model/material-property) record by its ID.
This cannot delete a material property with references to it.

## Syntax

```python
system.mes.material.deleteProperty(idOrName)
```

## Parameters

| Parameter | Type            | Description                                |
| --------- | --------------- | ------------------------------------------ |
| `id`      | `String` (ULID) | The ID of the material property to delete. |

## Returns

If successful, an ApiResponse Object is returned with the success bool set True. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.
If the property that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
| --------- | --------- | ----------------------------------------------------------- |
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete a material property by ID
system.mes.material.deleteProperty('01JQY39KNJ-E6AH9CCK-WM2XMMRW')
```
