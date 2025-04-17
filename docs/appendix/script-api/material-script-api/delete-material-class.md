---
sidebar_position: 11
title: "deleteMaterialClass"
description: "Deletes the material class with the given ID or path."
---

# system.mes.material.deleteMaterialClass

## Description

Deletes a [Material Classes](../../data-model/material-model/material-class) record by its ID or path.
This cannot delete a material class with references to it.

## Syntax

```python
system.mes.material.deleteMaterialClass(idOrPath)
```

## Parameters

| Parameter  | Type     | Description                                     |
| ---------- | -------- | ----------------------------------------------- |
| `idOrPath` | `String` | The ID or path of the material class to delete. |

## Returns

If successful, no response is returned. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.
If the material class that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
| --------- | --------- | ----------------------------------------------------------- |
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete a material class by ID or path
system.mes.material.deleteMaterialClass('RAW')
```
