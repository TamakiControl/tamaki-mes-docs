---
sidebar_position: 10
title: "deleteLocation"
description: "Deletes the location with the given id or path."
---

# system.mes.location.deleteLocation

## Description

Deletes a [Locations](../../data-model/location-model/location) record by its id or path.
This cannot delete a location with references to it.

## Syntax
```python
system.mes.location.deleteLocation(idOrPath)
```

## Parameters

| Parameter  | Type     | Description                               |
|------------|----------|-------------------------------------------|
| `idOrPath` | `String` | The ID or path of the location to delete. |

## Returns

If successful, no response is returned. If the location that's being deleted has a reference, 
a JSON object is returned with details about the encountered error.

## Code Examples

```python
# Deletes a location by ID or path
system.mes.location.deleteLocation('DairyCo')
```
