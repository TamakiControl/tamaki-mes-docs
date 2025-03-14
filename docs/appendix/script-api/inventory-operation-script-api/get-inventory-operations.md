---
sidebar_position: 6
title: "getInventoryOperations"
description: "Retrieves all inventory operations."
---

# system.mes.inventory.operation.getInventoryOperations

## Description

Retrieves all the [Inventory Operations](../../data-model/inventory-model/inventory-operation) records.

## Syntax

```python
system.mes.inventory.operation.getInventoryOperations()
```

## Parameters

| Parameter | Type | Description                               |
| --------- | ---- | ----------------------------------------- |
| None      | -    | This method does not take any parameters. |

## Returns

Returns a list of JSON objects representing all inventory operations.

## Example Usage

```python
# Retrieve all inventory operations
all_inventory_operations = system.mes.inventory.operation.getInventoryOperations()

# Output the list of inventory operations
print(all_inventory_operations)
```
