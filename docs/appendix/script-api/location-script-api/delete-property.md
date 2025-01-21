---
sidebar_position: 21
title: "deleteProperty"
description: "Deletes a specified location property by its id or name."
---

# system.mes.location.deleteProperty

## Description

Deletes a [Location Properties](../../data-model/location-model/location-property) by its id or name.
This cannot delete a location with references to it.

## Syntax
```python
system.mes.location.deleteProperty(idOrName)
```

## Parameters

| Parameter  | Type     | Description                                        |
|------------|----------|----------------------------------------------------|
| `idOrName` | `String` | The ID or name of the location property to delete. |

## Returns

If successful, no response is returned. If the property that's being deleted has a reference, 
a JSON object is returned with details about the encountered error.

## Code Examples

```python
# Delete a location property by ID or path
system.mes.location.deleteProperty('Temperature')
```