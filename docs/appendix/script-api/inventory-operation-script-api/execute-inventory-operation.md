---
sidebar_position: 12
title: "executeInventoryOperation"
description: "Executes an inventory operation and creates a new inventory lot record without having to start and then stop the operation. If an inventory operation is already started, this will act as a stopInventoryOperation."
---

# system.mes.inventory.operation.executeInventoryOperation

## Description

Executes an [Inventory Operations](../../data-model/inventory-model/inventory-operation) object and creates a new inventory lot record without having to start and then stop the operation.
If [Inventory Operations](../../data-model/inventory-model/inventory-operation) object is already started, this will act as a [stopInventoryOperation](./stop-inventory-operation).

## Syntax

```python
system.mes.inventory.operation.executeInventoryOperation(inventoryOperationId, primaryLotIdOrName, quantity, secondaryLotIdOrName, materialIdOrPath, inventoryName, startDate, endDate)
```

## Parameters

| Parameter              | Type            | Description                                                             |
| ---------------------- | --------------- | ----------------------------------------------------------------------- |
| `inventoryOperationId` | `String` (ULID) | The ID of the inventory operation to start.                             |
| `primaryLotIdOrName`   | `String`        | The ID or name of the primary lot to start.                             |
| `quantity`             | `Double`        | The quantity that the inventory operation processed.                    |
| `secondaryLotIdOrName` | `String`        | The ID or name of the secondary lot to start.                           |
| `materialIdOrPath`     | `String`        | The ID or path of the material associated with the inventory operation. |
| `inventoryName`        | `String`        | The name of the inventory associated with the inventory operation.      |
| `startDate`            | `Instant`       | The start date of the inventory operation.                              |
| `endDate`              | `Instant`       | The end date of the inventory operation.                                |

## Returns

Returns a JSON object of the inventory lot record for the executed inventory operation.

## Example Usage

```python
# Executes the inventory operation
executed_lot_record = system.mes.inventory.operation.startInventoryOperation('01JPAND53P-BZ61RZHZ-V7C6EEHG', '01JPBC4H3V-J4X3FYKS-NRNVEKMM', 100, None, None, None, None, None)

# Output the inventory lot record of the executed inventory operation
print(executed_lot_record)
```
