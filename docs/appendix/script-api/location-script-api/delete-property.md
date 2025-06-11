---
sidebar_position: 22
title: "deleteProperty"
description: "Deletes a specified location property by its ID or name."
---

# system.mes.location.deleteProperty

## Description

Deletes a [Location Properties](../../data-model/location-model/location-property) record by its ID or name.
This cannot delete a location property with references to it.

## Syntax

```python
system.mes.location.deleteProperty(idOrName)
```

## Parameters

| Parameter  | Type     | Description                                        |
| ---------- | -------- | -------------------------------------------------- |
| `idOrName` | `String` | The ID or name of the location property to delete. |

## Returns

If successful, an ApiResponse Object is returned with the success bool set True. If unsuccessful, an InUseException, IllegalArgumentException or ConstraintViolationException is thrown.
If the property that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
| --------- | --------- | ----------------------------------------------------------- |
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete a location property by ID or name
system.mes.location.deleteProperty('Temperature')
```
