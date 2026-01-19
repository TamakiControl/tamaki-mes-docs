---
sidebar_position: 6
title: "getInventoryOperation"
description: "Retrieves an inventory operation by its ID."
---

# system.mes.inventory.operation.getInventoryOperation

## Description

Retrieves an [Inventory Operations](../../data-model/inventory-operation-model/inventory-operation) object by its ID. This function allows you to get the complete details of a specific inventory operation configured in the system.

## Syntax

```python
system.mes.inventory.operation.getInventoryOperation(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                                       |
|-----------|-----------------|----------|---------------------------------------------------|
| `id`      | `String` (ULID) | False    | The unique identifier of the inventory operation. |

## Returns

Returns a JSON object representing the inventory operation. Returns null if no inventory operation is found with the specified ID.

## Example Usage

```python
# Retrieve an inventory operation by its ID
inventoryOperation = system.mes.inventory.operation.getInventoryOperation("01JPAND53P-BZ61RZHZ-V7C6EEHG")

# Print the inventory operation details
if inventoryOperation:
    print("Inventory Operation Name:", inventoryOperation["name"])
    print("Inventory Operation Type:", inventoryOperation["operationType"])
    print("Source Location:", inventoryOperation["sourceLocationPath"])
else:
    print("Inventory operation not found")
```
