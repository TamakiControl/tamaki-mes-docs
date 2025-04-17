---
sidebar_position: 12
title: "deleteMaterialClassWithReferences"
description: "Deletes the material class with the given ID or path and any immediate references to this material class if possible."
---

# system.mes.material.deleteMaterialClassWithReferences

## Description

Deletes a [Material Classes](../../data-model/material-model/material-class) record by its ID or path.
Also deletes immediate references to this material class if possible.

## Syntax

```python
system.mes.material.deleteMaterialClassWithReferences(idOrPath)
```

## Parameters

| Parameter  | Type     | Description                                     |
| ---------- | -------- | ----------------------------------------------- |
| `idOrPath` | `String` | The ID or path of the material class to delete. |

## Returns

If successful, no response is returned. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.

## Code Examples

```python
# Delete a material class by ID or path and all immediate references
system.mes.material.deleteMaterialClassWithReferences('RAW')
```
