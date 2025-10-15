---
sidebar_position: 6
title: "getInventoryOperation"
description: "Retrieves an inventory operation by its ID."
---

# system.mes.inventory.operation.getInventoryOperation

## Description

Retrieves an [Inventory Operations](../../data-model/inventory-model/inventory-operation) object by its ID. This function allows you to get the complete details of a specific inventory operation configured in the system.


## Permissions

This method requires the `INVENTORY_OPERATION.READ.GET` permission.

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
inventory_operation = system.mes.inventory.operation.getInventoryOperation("01JPAND53P-BZ61RZHZ-V7C6EEHG")

# Print the inventory operation details
if inventory_operation:
    print("Inventory Operation Name:", inventory_operation["name"])
    print("Inventory Operation Type:", inventory_operation["operationType"])
    print("Source Location:", inventory_operation["sourceLocationPath"])
else:
    print("Inventory operation not found")
```
