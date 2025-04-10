---
sidebar_position: 24
title: "deleteMaterial"
description: "Deletes the material with the given ID or path."
---

# system.mes.material.deleteMaterial

## Description

Deletes a [Materials](../../data-model/material-model/material) record by its ID or path.
This cannot delete a material with references to it.

## Syntax

```python
system.mes.material.deleteMaterial(idOrPath)
```

## Parameters

| Parameter  | Type     | Description                               |
| ---------- | -------- | ----------------------------------------- |
| `idOrPath` | `String` | The ID or path of the material to delete. |

## Returns

If successful, no response is returned. If unsuccessful, an InUseException, IllegalArgumentException or ConstraintViolationException is thrown.
If the material that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
| --------- | --------- | ----------------------------------------------------------- |
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete a material by ID or path
system.mes.material.deleteMaterial('IRB/5391537510212')
```
