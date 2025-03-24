---
sidebar_position: 16
title: "updateInventoryOperationStatesFromDatabase"
description: "Updates the current inventory operation state from the database."
---

# system.mes.inventory.operation.updateInventoryOperationStatesFromDatabase

## Description

**No Parameter:** Updates the states of all the [Inventory Operations](../../data-model/inventory-model/inventory-operation) from the database.

**With a Parameter:**  Updates the states of only the specified [Inventory Operations](../../data-model/inventory-model/inventory-operation) from the database given 
the ID of the inventory operations.

## Syntax

```python
system.mes.inventory.operation.updateInventoryOperationStatesFromDatabase()
system.mes.inventory.operation.updateInventoryOperationStatesFromDatabase([inventoryOperationIds])
```

## Parameters

**No Parameter:**

| Parameter | Type | Description                               |
| --------- | ---- | ----------------------------------------- |
| None      | -    | This method does not take any parameters. |

**With a Parameter:**

| Parameter               | Type                  | Description                              |
| ----------------------- | --------------------- | ---------------------------------------- |
| `inventoryOperationIds` | `List<String>` (ULID) | List of IDs of the inventory operations. |

## Returns

If successful, no response is returned.

## Code Examples

```python
# Update the state of the inventory operations from the database
system.mes.inventory.operation.updateInventoryOperationStatesFromDatabase(['01JPAND53P-BZ61RZHZ-V7C6EEHG', '01JPBE5NX5-WZRBXRT7-WRXGEPT5'])
```
