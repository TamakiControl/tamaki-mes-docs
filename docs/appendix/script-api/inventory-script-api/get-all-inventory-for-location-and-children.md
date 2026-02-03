---
sidebar_position: 46
title: "getAllInventoryForLocationAndChildren"
description: "Retrieves all inventories at a given location and its children."
---

# system.mes.inventory.getAllInventoryForLocationAndChildren

## Description

Retrieves all the [Inventories](../../data-model/inventory-model/inventory) records at a given location and its children.

## Syntax

```python
system.mes.inventory.getAllInventoryForLocationAndChildren(locationIdOrPath)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                   |
|--------------------|----------|----------|---------------------------------------------------------------|
| `locationIdOrPath` | `String` | True     | The ID or path of the location associated with the inventory. |

## Returns

Returns a list of JSON objects representing all inventories at the given location and its children. if locationIdOrPath is null, it will return all inventories in the system.

## Example Usage

```python
# Retrieve all inventories at a given location and its children
allInventories = system.mes.inventory.getAllInventoryForLocationAndChildren('DairyCo')

# Output the list of inventories
print(allInventories)
```
