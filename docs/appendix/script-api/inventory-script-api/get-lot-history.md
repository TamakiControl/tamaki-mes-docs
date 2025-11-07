---
sidebar_position: 63
title: "getLotHistory"
description: "Retrieves all inventory lot records given the inventory lot and other parameters."
---

# system.mes.inventory.getLotHistory

Retrieves all [Inventory Lot Records](../../data-model/inventory-operation-model/inventory-lot-record) given the inventory lot and other parameters.

## Syntax

```python
system.mes.inventory.getLotHistory()
```

## Parameters

| Parameter                 | Type            | Nullable | Description                                                                                                                                  |
|---------------------------|-----------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| `lotId`                   | `String` (ULID) | False    | The ID of the lot to retrieve history for.                                                                                                   |
| `lotRecordType`           | `String`        | True     | The type of lot record to retrieve (e.g CONSUME, UNCONSUME, PRODUCE, MOVE, SPLIT, MERGE, SCRAP, RETURN, STATUS_CHANGE, EDIT, RECEIVE, SHIP). |
| `operationId`             | `String` (ULID) | True     | The ID of the operation to filter by.                                                                                                        |
| `inventoryOperationId`    | `String` (ULID) | True     | The ID of the inventory operation to filter by.                                                                                              |
| `productionOrderIdOrName` | `String`        | True     | The ID or name of the production order to filter by.                                                                                         |
| `materialReasonCodeId`    | `String` (ULID) | True     | The ID of the material reason code to filter by.                                                                                             |
| `startDate`               | `Instant`       | True     | The start date of the history. Only records created after this date will be returned.                                                        |
| `endDate`                 | `Instant`       | True     | The end date of the history. Only records created before this date will be returned.                                                         |
| `status`                  | `String`        | True     | The status of the lot record to filter by (e.g IDLE, RUNNING, COMPLETED, FAULTED, CANCELLED, UNKNOWN, PAUSED).                               |

## Returns

Returns a list of JSON objects representing all inventory lot records for an inventory lot and other parameters.
Each JSON object has the following properties:

| Name                        | Type            | Description                                                                                                                      |
|-----------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------|
| `lotRecordType`             | `String`        | The type of lot record (e.g CONSUME, UNCONSUME, PRODUCE, MOVE, SPLIT, MERGE, SCRAP, RETURN, STATUS_CHANGE, EDIT, RECEIVE, SHIP). |
| `inventoryLotId`            | `String` (ULID) | The ID of the inventory lot.                                                                                                     |
| `inventoryLotName`          | `String`        | The name of the inventory lot.                                                                                                   |
| `secondaryInventoryLotId`   | `String` (ULID) | The ID of the secondary inventory lot. Used based on the lot record type.                                                        |
| `secondaryInventoryLotName` | `String`        | The name of the secondary inventory lot. Used based on the lot record type.                                                      |
| `operationRecordId`         | `String` (ULID) | The ID of the operation record associated with this inventory lot.                                                               |
| `inventoryOperationId`      | `String` (ULID) | The ID of the inventory operation associated with the inventory lot.                                                             |
| `productionOrderId`         | `String` (ULID) | The ID of the production order associated with this inventory lot.                                                               |
| `materialReasonCodeId`      | `String` (ULID) | The ID of the material reason code associated with this inventory lot.                                                           |
| `sourceLocationId`          | `String` (ULID) | The ID of the source location. Used based on the lot record type.                                                                |
| `destinationLocationId`     | `String` (ULID) | The ID of the destination location. Used based on the record type.                                                               |
| `lotStatus`                 | `String`        | The status of the inventory lot (e.g OPEN, AVAILABLE, QA_HOLD, EXPIRED, SHIPPED, CLOSED).                                        |
| `quantity`                  | `Double`        | The quantity of material that was affected in the inventory lot record.                                                          |
| `startDate`                 | `Instant`       | The start date of the inventory lot record.                                                                                      |
| `endDate`                   | `Instant`       | The end date of the inventory lot record.                                                                                        |
| `status`                    | `String`        | The status of the inventory lot record (e.g RUNNING, COMPLETED).                                                                 |
| `id`                        | `String` (ULID) | The ULID of the inventory lot record.                                                                                            |
| `notes`                     | `String`        | Notes related to the inventory lot record.                                                                                       |
| `enabled`                   | `Boolean`       | Indicates if the inventory lot record is active and enabled.                                                                     |
| `spare1`                    | `String`        | Additional field for user-defined context.                                                                                       |
| `spare2`                    | `String`        | Additional field for user-defined context.                                                                                       |
| `spare3`                    | `String`        | Additional field for user-defined context.                                                                                       |

## Code Examples

```python
# Generate the object structure for a new lot history request object with no initial arguments
new_lot_history_request = system.mes.inventory.newLotHistoryRequest()

# Set basic attributes for the new lot history request
new_lot_history_request['lotId'] = '01JE6F0CE9-T94PZD8R-TH9J01TJ'
# (You can continue setting other properties as needed here)

# Retrieve the lot history
lot_history = system.mes.inventory.getLotHistory(**new_lot_history_request)

# Output the list of lot history records
print(lot_history)
```
