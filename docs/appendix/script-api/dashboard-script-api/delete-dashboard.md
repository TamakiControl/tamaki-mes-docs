---
sidebar_position: 31
title: "deleteDashboard"
description: "Deletes a dashboard by ID."
---

# system.mes.dashboard.deleteDashboard

## Description

Deletes a Dashboard by its ID.

## Syntax

```python
system.mes.dashboard.deleteDashboard(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                        |
|-----------|-----------------|----------|------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the dashboard to delete. |

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
system.mes.dashboard.deleteDashboard('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
```
