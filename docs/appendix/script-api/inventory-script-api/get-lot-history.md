---
sidebar_position: 48
title: "getLotHistory"
description: "Retrieves all material lot records given the material lot and other parameters."
---

# system.mes.inventory.getLotHistory

Retrieves all [Material Lot Records](../../data-model/material-model/material-lot-record) given the material lot and other parameters.

## Syntax
```python
system.mes.inventory.getLotHistory()
```

## Parameters

| Parameter                 | Type            | Description                                                                                                                                  |
|---------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| `lotId`                   | `String` (ULID) | The ID of the lot to retrieve history for.                                                                                                   |
| `lotRecordType`           | `String`        | The type of lot record to retrieve (e.g CONSUME, UNCONSUME, PRODUCE, MOVE, SPLIT, MERGE, SCRAP, RETURN, STATUS_CHANGE, EDIT, RECEIVE, SHIP). |
| `operationId`             | `String` (ULID) | The ID of the operation to filter by.                                                                                                        |
| `productionOrderIdOrName` | `String`        | The ID or name of the production order to filter by.                                                                                         |
| `materialReasonCodeId`    | `String` (ULID) | The ID of the material reason code to filter by.                                                                                             |
| `startDate`               | `Instant`       | The start date of the history. Only records created after this date will be returned.                                                        |
| `endDate`                 | `Instant`       | The end date of the history. Only records created before this date will be returned.                                                         |
| `status`                  | `String`        | The status of the lot record to filter by (e.g IDLE, RUNNING, COMPLETED, FAULTED, CANCELLED, UNKNOWN, PAUSED).                               |

## Returns

Returns a list of JSON objects representing all material lot records for a material lot and other parameters.
Each JSON object has the following properties:

| Name                       | Type            | Description                                                                                                                       |
|----------------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------|
| `lotRecordType`            | `String`        | The type of lot record (e.g CONSUME, UNCONSUME, PRODUCE, MOVE, SPLIT, MERGE, SCRAP, RETURN, STATUS_CHANGE, EDIT, RECEIVE, SHIP).  |
| `materialLotId`            | `String` (ULID) | The ID of the material lot of the inventory.                                                                                      |
| `materialLotName`          | `String`        | The name of the material lot for the inventory.                                                                                   |
| `secondaryMaterialLotId`   | `String` (ULID) | The ID of the secondary material lot for the inventory. Used based on the lot record type.                                        |
| `secondaryMaterialLotName` | `String`        | The name of the secondary material lot for the inventory. Used based on the lot record type.                                      |
| `operationRecordId`        | `String` (ULID) | The ID of the operation record associated with this material lot.                                                                 |
| `productionOrderId`        | `String` (ULID) | The ID of the production order associated with this material lot.                                                                 |
| `materialReasonCodeId`     | `String` (ULID) | The ID of the material reason code associated with this material lot.                                                             |
| `sourceLocationId`         | `String` (ULID) | The ID of the source location. Used based on the lot record type.                                                                 |
| `destinationLocationId`    | `String` (ULID) | The ID of the destination location. Used based on the record type.                                                                |
| `lotStatus`                | `String`        | The status of the material lot for the inventory (e.g OPEN, AVAILABLE, QA_HOLD, EXPIRED, SHIPPED, CLOSED).                        |
| `quantity`                 | `Double`        | The quantity of material that was affected in the material lot record.                                                            |
| `startDate`                | `Instant`       | The start date of the material lot record.                                                                                        |
| `endDate`                  | `Instant`       | The end date of the material lot record.                                                                                          |
| `status`                   | `String`        | The status of the material lot record (e.g RUNNING, COMPLETED).                                                                   |
| `id`                       | `String` (ULID) | The ULID of the material lot record.                                                                                              |
| `notes`                    | `String`        | Notes related to the material lot record.                                                                                         |
| `enabled`                  | `Booelean`      | Indicates if the material lot record is active and enabled.                                                                       |
| `spare1`                   | `String`        | Additional field for user-defined context.                                                                                        |
| `spare2`                   | `String`        | Additional field for user-defined context.                                                                                        |
| `spare3`                   | `String`        | Additional field for user-defined context.                                                                                        |

## Code Examples

```python
# Generate the object structure for a new lot history request object with no initial arguments
new_lot_history_request = system.mes.inventory.newLotHistoryRequest()

# Set basic attributes for the new lot history request
new_lot_history_request['lotId'] = '01JJCPQWYG-T9CW4G6Z-96XBWYQB'
# (You can continue setting other properties as needed here)

# Retrieve the lot history
lot_history = system.mes.inventory.getLotHistory(**new_lot_history_request)

# Output the list of lot history records
print(lot_history)
```