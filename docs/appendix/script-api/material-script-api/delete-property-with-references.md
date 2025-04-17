---
sidebar_position: 36
title: "deletePropertyWithReferences"
description: "Deletes the  property with the given ID and any immediate references to this property if possible."
---

# system.mes.material.deletePropertyWithReferences

## Description

Deletes a [Material Properties](../../data-model/material-model/material-property) record by its ID.
Also deletes immediate references to this property if possible.

## Syntax

```python
system.mes.material.deletePropertyWithReferences(idOrName)
```

## Parameters

| Parameter  | Type     | Description                                        |
| ---------- | -------- | -------------------------------------------------- |
| `idOrName` | `String` | The ID or name of the material property to delete. |

## Returns

If successful, no response is returned. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.

## Code Examples

```python
# Delete a material property by ID and all immediate references
system.mes.material.deletePropertyWithReferences('01JQY39KNJ-E6AH9CCK-WM2XMMRW')
```
