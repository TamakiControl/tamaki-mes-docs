---
sidebar_position: 14
title: "stopInventoryOperation"
description: "Stops an inventory operation and records its end state."
---

# system.mes.inventory.operation.stopInventoryOperation

## Description

Stops the [Inventory Operation](../../data-model/inventory-model/inventory-operation) with the provided id. This action finds the currently running inventory lot record, records the specified quantity and end state into it, sets its end time to the specified date (or current time if not specified), and updates its status to completed. This effectively concludes the active operation and finalizes the lot record.


## Permissions

This method requires the `INVENTORY_OPERATION.EXECUTE` permission.

## Syntax

```python
system.mes.inventory.operation.stopInventoryOperation(inventoryOperationId, quantity, inventoryName, endDate)
```

## Parameters

| Parameter              | Type            | Nullable | Description                                                        |
|------------------------|-----------------|----------|--------------------------------------------------------------------|
| `inventoryOperationId` | `String` (ULID) | False    | The ID of the inventory operation to end.                          |
| `quantity`             | `Double`        | False    | The quantity that the inventory operation processed.               |
| `inventoryName`        | `String`        | True     | The name of the inventory associated with the inventory operation. |
| `endDateMillis`        | `Long`          | True     | The end date of the inventory operation.                           |

## Returns

Returns a JSON object of the updated inventory lot record with the completed operation details, including the end time and final quantity.

## Example Usage

```python
# Stop the inventory operation
stopped_lot_record = system.mes.inventory.operation.stopInventoryOperation('01JPAND53P-BZ61RZHZ-V7C6EEHG', 100, None, None)

# Output the inventory lot record of the stopped inventory operation
print(stopped_lot_record)
```
