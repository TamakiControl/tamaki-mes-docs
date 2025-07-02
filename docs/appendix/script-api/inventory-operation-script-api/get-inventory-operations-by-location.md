---
sidebar_position: 5
title: "getInventoryOperationsByLocation"
description: "Retrieves all inventory operations at a given location."
---

# system.mes.inventory.operation.getInventoryOperationsByLocation

## Description

Retrieves all the [Inventory Operations](../../data-model/inventory-model/inventory-operation) records at a given location.

## Syntax

```python
system.mes.inventory.operation.getInventoryOperationsByLocation(locationIdOrPath)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                             |
|--------------------|----------|----------|-------------------------------------------------------------------------|
| `locationIdOrPath` | `String` | False    | The ID or path of the location associated with the inventory operation. |

## Returns

Returns a list of JSON objects representing all inventory operations at the given location.

## Example Usage

```python
# Retrieve all inventory operations at a given location
all_inventory_operations = system.mes.inventory.operation.getInventoryOperationsByLocation('DairyCo')

# Output the list of inventory operations
print(all_inventory_operations)
```
