---
sidebar_position: 4
title: "getInventoryOperationsByOperation"
description: "Retrieves all inventory operations for a given operation."
---

# system.mes.inventory.operation.getInventoryOperationsByOperation

## Description

Retrieves all the [Inventory Operations](../../data-model/inventory-operation-model/inventory-operation) records for a given operation.

## Syntax

```python
system.mes.inventory.operation.getInventoryOperationsByOperation(operationId)
```

## Parameters

| Parameter     | Type            | Nullable | Description                                                      |
|---------------|-----------------|----------|------------------------------------------------------------------|
| `operationId` | `String` (ULID) | False    | The ID of the operation associated with the inventory operation. |

## Returns

Returns a list of JSON objects representing all inventory operations for a given operation.

## Example Usage

```python
# Retrieve all inventory operation for a given operation
all_inventories = system.mes.inventory.operation.getInventoryOperationsByOperation('01JC190XYX-VWVX79GS-M8Q730T5')

# Output the list of inventory operation
print(all_inventories)
```
