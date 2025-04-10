---
sidebar_position: 21
title: "getAllMaterials"
description: "Retrieves all materials."
---

# system.mes.material.getAllMaterials

## Description

Retrieves a list of all [Materials](../../data-model/material-model/material) records in the system.

## Syntax

```python
system.mes.material.getAllMaterials()
```

## Parameters

| Parameter | Type | Description                               |
| --------- | ---- | ----------------------------------------- |
| None      | -    | This method does not take any parameters. |

## Returns

Returns a list of JSON objects representing all materials.

## Code Examples

```python
# Retrieve all materials
all_materials = system.mes.material.getAllMaterials()

# Output the list of materials
print(all_materials)
```
