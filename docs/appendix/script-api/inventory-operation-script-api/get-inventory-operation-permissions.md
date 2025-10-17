---
sidebar_position: 21
title: "getInventoryOperationPermissions"
description: "Retrieves a list of all inventory operation permissions."

---

# system.mes.inventory.operation.getInventoryOperationPermissions

## Description

Retrieves all the [Inventory Operations](../../data-model/inventory-operation-model/inventory-operation) permissions.

## Permissions

This method does not require any permissions.

## Syntax

```python
system.mes.inventory.operation.getInventoryOperationPermissions()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a list of strings for each of the inventory operation permissions.

## Example Usage

```python
# Retrieve all inventory operation permissions
inventory_operation_permissions = system.mes.inventory.operation.getInventoryOperationPermissions()

# Output the list of inventory operation permissions
print(inventory_operation_permissions)
```
