---
sidebar_position: 7
title: "getAllInventoryOperations"
description: "Retrieves all inventory operations in the system."
---

# system.mes.inventory.operation.getAllInventoryOperations

## Description

Retrieves all [Inventory Operations](../../data-model/inventory-model/inventory-operation) records configured in the system. This function provides a complete list of all inventory operations regardless of their status or configuration.

## Syntax

```python
system.mes.inventory.operation.getAllInventoryOperations()
```

## Parameters

This function does not take any parameters.

## Returns

Returns a list of JSON representations of inventory operation objects. Each object contains the complete configuration details of an inventory operation in the system.

## Example Usage

```python
# Retrieve all inventory operations
all_inventory_operations = system.mes.inventory.operation.getAllInventoryOperations()

# Print the number of inventory operations
print(f"Number of inventory operations: {len(all_inventory_operations)}")

# Iterate through each inventory operation and print basic information
for operation in all_inventory_operations:
    print(f"ID: {operation['id']}, Name: {operation['name']}, Type: {operation['operationType']}")
```
