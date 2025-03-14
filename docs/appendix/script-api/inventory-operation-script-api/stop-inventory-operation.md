---
sidebar_position: 14
title: "stopInventoryOperation"
description: "Stop an inventory operation."
---

# system.mes.inventory.operation.stopInventoryOperation

## Description

Stops an [Inventory Operations](../../data-model/inventory-model/inventory-operation) object.

## Syntax

```python
system.mes.inventory.operation.stopInventoryOperation(inventoryOperationId, quantity, inventoryName, endDate)
```

## Parameters

| Parameter            | Type            | Description                                                        |
| -------------------- | --------------- | ------------------------------------------------------------------ |
| inventoryOperationId | `String` (ULID) | The ID of the inventory operation to end.                          |
| quantity             | `Double`        | The quantity that the inventory operation processed.               |
| inventoryName        | `String`        | The name of the inventory associated with the inventory operation. |
| endDate              | `Instant`       | The end date of the inventory operation.                           |

## Returns

Returns a JSON object of the inventory lot record for the end of the inventory operation.

## Example Usage

```python
# Stop the inventory operation
stopped_lot_record = system.mes.inventory.operation.stopInventoryOperation('01JPAND53P-BZ61RZHZ-V7C6EEHG', 100, None, None)

# Output the inventory lot record of the stopped inventory operation
print(stopped_lot_record)
```
