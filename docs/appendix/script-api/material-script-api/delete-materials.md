---
sidebar_position: 26
title: "deleteMaterials"
description: "Deletes all materials with the given IDs or paths."
---

# system.mes.material.deleteMaterials

## Description

Deletes all [Materials](../../data-model/material-model/material) records by the given IDs or paths.
This cannot delete any materials with references to it.

## Syntax

```python
system.mes.material.deleteMaterials(idsOrPaths)
```

## Parameters

| Parameter    | Type           | Description                                      |
| ------------ | -------------- | ------------------------------------------------ |
| `idsOrPaths` | `List<String>` | List of IDs or paths of the materials to delete. |

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
# Delete all materials by the given IDs or paths
system.mes.material.deleteMaterials(['IRB/5391537510212', 'RAW/FLAV/050005 575T'])
```
