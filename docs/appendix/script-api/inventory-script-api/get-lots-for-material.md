---
sidebar_position: 53
title: "getLotsForMaterial"
description: "Retrieves all inventory lots for a specified material using its ID or path."
---

# system.mes.inventory.getLotsForMaterial

## Description

Retrieves a list of all [Inventory Lots](../../data-model/inventory-model/inventory-lot) records in the system for a specified material using its ID or path.

## Syntax

```python
system.mes.inventory.getLotsForMaterial(materialIdOrPath)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                         |
|--------------------|----------|----------|---------------------------------------------------------------------|
| `materialIdOrPath` | `String` | False    | The ID or path of the material associated with the inventory's lot. |

## Returns

Returns a list of JSON objects representing all inventory lots for a specified material.

## Code Examples

```python
# Retrieve inventory lots for a material
lotsForMaterial = system.mes.inventory.getLotsForMaterial('Bottle/Milk')

# Output the inventory lots
print(lotsForMaterial)
```
