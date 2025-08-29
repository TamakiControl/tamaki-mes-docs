---
sidebar_position: 23
title: "deleteWidgetParameter"
description: "Deletes a dashboard widget parameter by ID."
---

# system.mes.dashboard.deleteWidgetParameter

## Description

Deletes a Dashboard Widget Parameter by its ID.

## Syntax

```python
system.mes.dashboard.deleteWidgetParameter(parameterId)
```

## Parameters

| Parameter     | Type            | Nullable | Description                               |
|---------------|-----------------|----------|-------------------------------------------|
| `parameterId` | `String` (ULID) | False    | The ID of the widget parameter to delete. |

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
system.mes.dashboard.deleteWidgetParameter('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
```
