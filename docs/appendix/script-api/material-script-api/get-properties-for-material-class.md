---
sidebar_position: 32
title: "getPropertiesForMaterialClass"
description: "Retrieves all material properties for a material class."
---

# system.mes.material.getProperty

## Description

Retrieves all [Material Properties](../../data-model/material-model/material-property) records for a given material class.

## Syntax

```python
system.mes.material.getPropertiesForMaterialClass(idOrPath)
```

## Parameters

| Parameter  | Type     | Description                                         |
| ---------- | -------- | --------------------------------------------------- |
| `idOrPath` | `String` | The ULID or path of the material class to retrieve. |

## Returns

Returns a list of JSON objects representing all material properties for a given material class.

## Code Examples

```python
# Retrieve all material properties for a given material class
properties = system.mes.material.getPropertiesForMaterialClass('RAW')

# Output the material properties
print(properties)
```
