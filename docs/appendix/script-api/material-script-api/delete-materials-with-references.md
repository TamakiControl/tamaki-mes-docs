---
sidebar_position: 27
title: "deleteMaterialsWithReferences"
description: "Deletes all materials with the given IDs or paths and any immediate references to the materials if possible."
---

# system.mes.material.deleteMaterialsWithReferences

## Description

Deletes all [Materials](../../data-model/material-model/material) records by the given IDs or paths.
Also deletes immediate references to the materials if possible.

## Syntax

```python
system.mes.material.deleteMaterialsWithReferences(idsOrPaths)
```

## Parameters

| Parameter    | Type           | Description                                      |
| ------------ | -------------- | ------------------------------------------------ |
| `idsOrPaths` | `List<String>` | List of IDs or paths of the materials to delete. |

## Returns

If successful, no response is returned. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.

## Code Examples

```python
# Delete all materials by the given IDs or paths and all immediate references
system.mes.material.deleteMaterialsWithReferences(['IRB/5391537510212', 'RAW/FLAV/050005 575T'])
```
