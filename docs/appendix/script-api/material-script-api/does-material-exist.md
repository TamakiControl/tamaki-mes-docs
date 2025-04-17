---
sidebar_position: 17
title: "doesMaterialExist"
description: "Checks if a material with the given ID or path exists."
---

# system.mes.material.doesMaterialExist

Checks if a [Materials](../../data-model/material-model/material) object with the given ID or path exists.

## Syntax

```python
system.mes.material.doesMaterialExist(idOrPath)
```

## Parameters

| Parameter  | Type     | Description                                |
| ---------- | -------- | ------------------------------------------ |
| `idOrPath` | `String` | The ULID or path of the material to check. |

## Returns

Returns a boolean indicating whether the material exists.

## Code Examples

```python
# Check whether the material exists
material_exists = system.mes.material.doesMaterialExist('5391537510212')

# Output the boolean result
print(material_exists)
```
