---
sidebar_position: 8
title: "deleteParameterType"
description: "Deletes a dashboard widget parameter type by ID."
---

# system.mes.dashboard.deleteParameterType

## Description

Deletes a Dashboard Widget Parameter Type by its ID.


## Permissions

This method requires the `DASHBOARD.WRITE.DELETE` permission.

## Syntax

```python
system.mes.dashboard.deleteParameterType(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                             |
|-----------|-----------------|----------|-----------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the parameter type to delete. |

## Returns

If successful, an ApiResponse Object is returned with the success bool set True. If unsuccessful, an exception may be
thrown.

| Name      | Type      | Description                                                 |
|-----------|-----------|-------------------------------------------------------------|
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
system.mes.dashboard.deleteParameterType('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
```
