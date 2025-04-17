---
sidebar_position: 14
title: "deleteMaterialClassesWithReferences"
description: "Deletes all material classes with the given IDs or paths and any immediate references to the material classes if possible."
---

# system.mes.material.deleteMaterialClassesWithReferences

## Description

Deletes all [Material Classes](../../data-model/material-model/material-class) records by the given IDs or paths.
Also deletes immediate references to the material classes if possible.

## Syntax

```python
system.mes.material.deleteMaterialClassesWithReferences(idsOrPaths)
```

## Parameters

| Parameter    | Type           | Description                                             |
| ------------ | -------------- | ------------------------------------------------------- |
| `idsOrPaths` | `List<String>` | List of IDs or paths of the material classes to delete. |

## Returns

If successful, no response is returned. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.

## Code Examples

```python
# Delete all material classes by the given IDs or paths and all immediate references
system.mes.material.deleteMaterialClassesWithReferences(['RAW', 'IRB'])
```
