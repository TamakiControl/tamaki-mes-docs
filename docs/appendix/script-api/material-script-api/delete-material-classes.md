---
sidebar_position: 13
title: "deleteMaterialClasses"
description: "Deletes all material classes with the given IDs or paths."
---

# system.mes.material.deleteMaterialClasses

## Description

Deletes all [Material Classes](../../data-model/material-model/material-class) records by the given IDs or paths.
This cannot delete any material classes with references to it.


## Permissions

This method requires the `MATERIAL.WRITE.DELETE` permission.

## Syntax

```python
system.mes.material.deleteMaterialClasses(idsOrPaths)
```

## Parameters

| Parameter    | Type           | Nullable | Description                                             |
|--------------|----------------|----------|---------------------------------------------------------|
| `idsOrPaths` | `List<String>` | False    | List of IDs or paths of the material classes to delete. |

## Returns

If successful, an ApiResponse Object is returned with the success bool set True. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.
If the material class that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
|-----------|-----------|-------------------------------------------------------------|
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete all material classes by the given IDs or paths
system.mes.material.deleteMaterialClasses(['RAW', 'IRB'])
```
