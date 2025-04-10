---
sidebar_position: 5
title: "doesMaterialClassExist"
description: "Checks if a material class with the given ID or path exists."
---

# system.mes.material.doesMaterialClassExist

Checks if a [Material Classes](../../data-model/material-model/material-class) object with the given ID or path exists.

## Syntax

```python
system.mes.material.doesMaterialClassExist(idOrPath)
```

## Parameters

| Parameter  | Type     | Description                                      |
| ---------- | -------- | ------------------------------------------------ |
| `idOrPath` | `String` | The ULID or path of the material class to check. |

## Returns

Returns a boolean indicating whether the material class exists.

## Code Examples

```python
# Check whether the material class exists
material_class_exists = system.mes.material.doesMaterialClassExist('RAW/FLAV')

# Output the boolean result
print(material_class_exists)
```
