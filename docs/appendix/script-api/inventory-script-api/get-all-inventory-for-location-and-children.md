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

| Parameter          | Type     | Description                                                   |
| ------------------ | -------- | ------------------------------------------------------------- |
| `locationIdOrPath` | `String` | The ID or path of the location associated with the inventory. |

## Returns

Returns a list of JSON objects representing all inventories at the given location and its children.

## Example Usage

```python
# Retrieve all inventories at a given location and its children
all_inventories = system.mes.inventory.getAllInventoryForLocationAndChildren('DairyCo')

# Output the list of inventories
print(all_inventories)
```
