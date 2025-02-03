---
sidebar_position: 12
title: "deleteLocation"
description: "Deletes the location with the given ID or path."
---

# system.mes.location.deleteLocation

## Description

Deletes a [Locations](../../data-model/location-model/location) record by its ID or path.
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

If successful, no response is returned. If unsuccessful, an InUseException, IllegalArgumentException or ConstraintViolationException is thrown.
If the location that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
|-----------|---------- |-------------------------------------------------------------|
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete a location by ID or path
system.mes.location.deleteLocation('DairyCo')
```