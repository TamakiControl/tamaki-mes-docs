---
sidebar_position: 25
title: "deleteMaterialWithReferences"
description: "Deletes the material with the given ID or path and any immediate references to this material if possible."
---

# system.mes.material.deleteMaterialWithReferences

## Description

Deletes a [Materials](../../data-model/material-model/material) record by its ID or path.
Also deletes immediate references to this material if possible.

## Syntax

```python
system.mes.material.deleteMaterialWithReferences(idOrPath)
```

## Parameters

| Parameter  | Type     | Description                               |
| ---------- | -------- | ----------------------------------------- |
| `idOrPath` | `String` | The ID or path of the material to delete. |

## Returns

If successful, no response is returned. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.

## Code Examples

```python
# Delete a material by ID or path and all immediate references
system.mes.material.deleteMaterialWithReferences('IRB/5391537510212')
```
