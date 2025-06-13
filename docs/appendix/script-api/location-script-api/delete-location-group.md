---
sidebar_position: 15
title: "deleteLocationGroup"
description: "Deletes the location group with the given ID and any immediate references to this location group if possible."
---

# system.mes.location.deleteLocationGroup

## Description

Deletes a [Location Groups](../../data-model/location-model/location-group) record by its ID.
This deletes any references in [Location-Location Groups](../../data-model/location-model/location-location-group).

## Syntax

```python
system.mes.location.deleteLocationGroup(id)
```

## Parameters

| Parameter | Type            | Description                             |
| --------- | --------------- | --------------------------------------- |
| `id`      | `String` (ULID) | The ID of the location group to delete. |

## Returns

If successful, an ApiResponse Object is returned with the success bool set True. If unsuccessful, an InUseException, IllegalArgumentException or ConstraintViolationException is thrown.
If the location group that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
| --------- | --------- | ----------------------------------------------------------- |
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete a location by ID or path
system.mes.location.deleteLocationGroup('01JJ4N794J-BYCKRFJN-AY2S5D1N')
```
