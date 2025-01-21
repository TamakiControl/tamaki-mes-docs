---
sidebar_position: 13
title: "deleteLocationGroup"
description: "Deletes the location group with the given id and any immediate references to this location group if possible."
---

# system.mes.location.deleteLocationGroup

## Description

Deletes a [Location Groups](../../data-model/location-model/location) by its id.
This deletes any references in [Location-Location Groups](../../data-model/location-model/location-location-group).

## Syntax
```python
system.mes.location.deleteLocationGroup(id)
```

## Parameters

| Parameter  | Type            | Description                             |
|------------|-----------------|-----------------------------------------|
| `id`       | `String` (ULID) | The ID of the location group to delete. |

## Returns

If successful, no response is returned.

## Code Examples

```python
# Delete a location by ID or path
system.mes.location.deleteLocationGroup('01JJ4N794J-BYCKRFJN-AY2S5D1N')
```
