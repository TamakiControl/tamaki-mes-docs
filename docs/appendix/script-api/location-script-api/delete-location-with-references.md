---
sidebar_position: 11
title: "deleteLocationWithReferences"
description: "Deletes the location with the given id or path and any immediate references to this location if possible."
---

# system.mes.location.deleteLocationWithReferences

## Description

Deletes a [Locations](../../data-model/location-model/location) record by its id or path. 
Also deletes immediate references to this location if possible.

## Syntax
```python
system.mes.location.deleteLocationWithReferences(idOrPath)
```

## Parameters

| Parameter  | Type     | Description                               |
|------------|----------|-------------------------------------------|
| `idOrPath` | `String` | The ID or path of the location to delete. |

## Returns

If successful, no response is returned.

## Code Examples

```python
# Deletes a location by ID or path and all immediate references
system.mes.location.deleteLocationWithReferences('DairyCo')
```
