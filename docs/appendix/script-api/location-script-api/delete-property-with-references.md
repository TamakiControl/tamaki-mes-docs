---
sidebar_position: 22
title: "deletePropertyWithReferences"
description: "Deletes the location property with the given id or path and any immediate references to this property if possible."
---

# system.mes.location.deletePropertyWithReferences

## Description

Deletes a [Location Properties](../../data-model/location-model/location-property) by its id or name. 
Also deletes immediate references to this property if possible.

## Syntax
```python
system.mes.location.deletePropertyWithReferences(idOrName)
```

## Parameters

| Parameter  | Type     | Description                               |
|------------|----------|-------------------------------------------|
| `idOrName` | `String` | The ID or name of the location to delete. |

## Returns

If successful, no response is returned.

## Code Examples

```python
# Delete a location property by ID or path and all immediate references
system.mes.location.deletePropertyWithReferences('Cows')
```
