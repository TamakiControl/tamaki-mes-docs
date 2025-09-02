---
sidebar_position: 13
title: "startInventoryOperation"
description: "Starts an inventory operation."
---

# system.mes.inventory.operation.startInventoryOperation

## Description

Starts an [Inventory Operation](../../data-model/inventory-model/inventory-operation). This function initiates the inventory operation and creates an inventory lot record with a specified start time but a null end time, indicating that the operation is currently in progress. The operation remains active until explicitly ended.

## Syntax

```python
system.mes.inventory.operation.startInventoryOperation(inventoryOperationId, primaryLotIdOrName, secondaryLotIdOrName, materialIdOrPath, inventoryName, startDate)
```

## Parameters

| Parameter              | Type            | Nullable | Description                                                             |
|------------------------|-----------------|----------|-------------------------------------------------------------------------|
| `inventoryOperationId` | `String` (ULID) | False    | The ID of the inventory operation to start.                             |
| `primaryLotIdOrName`   | `String`        | False    | The ID or name of the primary lot to start.                             |
| `secondaryLotIdOrName` | `String`        | True     | The ID or name of the secondary lot to start.                           |
| `materialIdOrPath`     | `String`        | True     | The ID or path of the material associated with the inventory operation. |
| `inventoryName`        | `String`        | True     | The name of the inventory associated with the inventory operation.      |
| `startDateMillis`      | `Long`          | True     | The start date of the inventory operation.                              |

## Returns

Returns a JSON object of the inventory lot record of the inventory operation. The record will have a defined start time but a null end time, indicating the operation is currently active.

## Example Usage

```python
# Start the inventory operation
started_lot_record = system.mes.inventory.operation.startInventoryOperation('01JPAND53P-BZ61RZHZ-V7C6EEHG', '01JPBC4H3V-J4X3FYKS-NRNVEKMM', None, None, None, None)

# Output the inventory lot record of the started inventory operation
print(started_lot_record)
```
