---
sidebar_position: 13
title: "startInventoryOperation"
description: "Starts an inventory operation."
---

# system.mes.inventory.operation.startInventoryOperation

## Description

Starts an [Inventory Operations](../../data-model/inventory-model/inventory-operation) object.

## Syntax

```python
system.mes.inventory.operation.startInventoryOperation(inventoryOperationId, primaryLotIdOrName, secondaryLotIdOrName, materialIdOrPath, inventoryName, startDate)
```

## Parameters

| Parameter              | Type            | Description                                                             |
| ---------------------- | --------------- | ----------------------------------------------------------------------- |
| `inventoryOperationId` | `String` (ULID) | The ID of the inventory operation to start.                             |
| `primaryLotIdOrName`   | `String`        | The ID or name of the primary lot to start.                             |
| `secondaryLotIdOrName` | `String`        | The ID or name of the secondary lot to start.                           |
| `materialIdOrPath`     | `String`        | The ID or path of the material associated with the inventory operation. |
| `inventoryName`        | `String`        | The name of the inventory associated with the inventory operation.      |
| `startDate`            | `Instant`       | The start date of the inventory operation.                              |

## Returns

Returns a JSON object of the inventory lot record for the start of the inventory operation.

## Example Usage

```python
# Start the inventory operation
started_lot_record = system.mes.inventory.operation.startInventoryOperation('01JPAND53P-BZ61RZHZ-V7C6EEHG', '01JPBC4H3V-J4X3FYKS-NRNVEKMM', None, None, None, None)

# Output the inventory lot record of the started inventory operation
print(started_lot_record)
```
