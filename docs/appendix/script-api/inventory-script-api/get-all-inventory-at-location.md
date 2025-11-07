---
sidebar_position: 45
title: "getAllInventoryAtLocation"
description: "Retrieves all inventories at a given location."
---

# system.mes.inventory.getAllInventoryAtLocation

## Description

Retrieves all the [Inventories](../../data-model/inventory-model/inventory) records at a given location.

## Syntax

```python
system.mes.inventory.getAllInventoryAtLocation(locationIdOrPath)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                   |
|--------------------|----------|----------|---------------------------------------------------------------|
| `locationIdOrPath` | `String` | False    | The ID or path of the location associated with the inventory. |

## Returns

Returns a list of JSON objects representing all inventories at the given location.

## Example Usage

```python
# Retrieve all inventories at a given location
all_inventories = system.mes.inventory.getAllInventoryAtLocation('DairyCo')

# Output the list of inventories
print(all_inventories)
```
