---
sidebar_position: 4
title: "createMaterialClassesForPath"
description: "Creates material classes for each name in the specified path if they do not already exist, setting their respective parents."
---

# system.mes.material.createMaterialClassesForPath

Creates [Material Classes](../../data-model/material-model/material-class) objects for each name in the specified path if they do not already exist, setting their respective parents.

## Syntax

```python
system.mes.material.createMaterialClassesForPath(path)
```

## Parameters

| Parameter | Type     | Description                                                        |
| --------- | -------- | ------------------------------------------------------------------ |
| `path`    | `String` | The path where each material class name is the parent of the next. |

## Returns

No response is returned.

## Code Examples

```python
# Create material classes in the specified path if they do not already exist
system.mes.material.createMaterialClassesForPath('RAW')
```
