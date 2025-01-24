---
sidebar_position: 16
title: "deleteLocationGroupWithReferences"
description: "Deletes the location group with the given ID and any immediate references to this location group if possible."
---

# system.mes.location.deleteLocationGroupWithReferences

## Description

Deletes a [Location Groups](../../data-model/location-model/location-group) record by its ID.
This deletes any references in [Location-Location Groups](../../data-model/location-model/location-location-group).

## Syntax
```python
system.mes.location.deleteLocationGroupWithReferences(id)
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
system.mes.location.deleteLocationGroupWithReferences('01JJ4N794J-BYCKRFJN-AY2S5D1N')
```