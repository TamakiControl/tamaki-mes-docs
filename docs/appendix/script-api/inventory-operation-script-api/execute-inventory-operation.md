---
sidebar_position: 12
title: "executeInventoryOperation"
description: "Executes an inventory operation and creates (and completes) an inventory lot record. If already started, acts as stopInventoryOperation." 
---

# system.mes.inventory.operation.executeInventoryOperation

## Description

Executes an [Inventory Operation](../../data-model/inventory-operation-model/inventory-operation) and creates a new inventory lot record without having to start and then stop the operation.
If the [Inventory Operation](../../data-model/inventory-operation-model/inventory-operation) is already started, this will act as a [stopInventoryOperation](./stop-inventory-operation) call.


## Permissions

This method requires the `INVENTORY_OPERATION.EXECUTE` permission.

## Syntax

```python
system.mes.inventory.operation.executeInventoryOperation(inventoryOperationId, primaryLotIdOrName, quantity, secondaryLotIdOrName, materialIdOrPath, inventoryName, startDateMillis, endDateMillis)
```

## Parameters

| Parameter              | Type            | Nullable | Description                                                             |
|------------------------|-----------------|----------|-------------------------------------------------------------------------|
| `inventoryOperationId` | `String` (ULID) | False    | The ID of the inventory operation to execute.                           |
| `primaryLotIdOrName`   | `String`        | False    | The ID or name of the primary lot.                                      |
| `quantity`             | `Double`        | False    | The quantity the inventory operation will process.                      |
| `secondaryLotIdOrName` | `String`        | True     | The ID or name of the secondary lot, if required.                       |
| `materialIdOrPath`     | `String`        | True     | The ID or path of the material associated with the inventory operation. |
| `inventoryName`        | `String`        | True     | The name of the inventory associated with the inventory operation.      |
| `startDateMillis`      | `Long`          | True     | The start timestamp (ms since epoch) for the lot record.                |
| `endDateMillis`        | `Long`          | True     | The end timestamp (ms since epoch) for the lot record.                  |

## Returns

Returns a JSON object of the inventory lot record for the executed inventory operation.

## Example Usage

```python
# Execute a full inventory operation in a single call
executed_lot_record = system.mes.inventory.operation.executeInventoryOperation(
    '01JPAND53P-BZ61RZHZ-V7C6EEHG',  # inventoryOperationId
    '01JPBC4H3V-J4X3FYKS-NRNVEKMM',  # primaryLotIdOrName
    100.0,                           # quantity
    None,                            # secondaryLotIdOrName
    None,                            # materialIdOrPath
    None,                            # inventoryName
    None,                            # startDateMillis
    None                             # endDateMillis
)

print(executed_lot_record)
```
