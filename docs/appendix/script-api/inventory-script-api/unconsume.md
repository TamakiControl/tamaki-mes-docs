---
sidebar_position: 7
title: "unconsume"
description: "Unconsumes inventory from the MES based on the provided parameters."
---

# system.mes.inventory.unconsume

Unconsumes inventory from the MES based on the provided parameters.

## Syntax

```python
system.mes.inventory.unconsume(**unconsume_request)
```

## Parameters

| Parameter                     | Type            | Nullable | Description                                                                                                                               |
|-------------------------------|-----------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                        | `String`        | True     | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `quantity`                    | `Double`        | False    | The quantity to unconsume from the location.                                                                                              |
| `unitOfMeasureSymbol`         | `String`        | True     | The symbol of the unit of measure for the quantity.                                                                                       |
| `lotIdOrName`                 | `String`        | True     | The ID or name of the inventory lot that will be unconsuming the given lot.                                                               |
| `materialIdOrPath`            | `String`        | False    | The ID or path of the material being unconsumed.                                                                                          |
| `destinationLocationIdOrPath` | `String`        | False    | The ID or path of the location the unconsumed inventory goes to.                                                                          |
| `sourceLocationIdOrPath`      | `String`        | True     | The ID or path of the location where the inventory is being unconsumed from. TODO                                                         |
| `operationId`                 | `String` (ULID) | True     | The ID of the operation unconsuming this inventory.                                                                                       |
| `inventoryOperationId`        | `String` (ULID) | True     | The ID of the inventory operation related to this unconsume action.                                                                       |
| `productionOrderIdOrName`     | `String`        | True     | The ID or name of the production order associated with the unconsumption.                                                                 |
| `materialReasonCodeId`        | `String` (ULID) | True     | The ID of the material reason code to add additional context.                                                                             |
| `startDate`                   | `Instant`       | False    | The start date and time of the unconsumption. Default value is `Current Instant`.                                                         |
| `endDate`                     | `Instant`       | True     | The end date and time of the unconsumption.                                                                                               |
| `ongoing`                     | `Boolean`       | False    | Indicates whether this request is ongoing. Default value is `false`.                                                                      |
| `inventoryName`               | `String`        | True     | The name of the inventory.                                                                                                                |
| `notes`                       | `String`        | True     | Notes related to the unconsume request.                                                                                                   |
| `spare1`                      | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare2`                      | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare3`                      | `String`        | True     | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON representation of an inventory lot record for an Unconsume Request.

| Name                        | Type            | Description                                                                                          |
|-----------------------------|-----------------|------------------------------------------------------------------------------------------------------|
| `lotRecordType`             | `String`        | The type of change for the record.                                                                   |
| `inventoryLotId`            | `String` (ULID) | The ULID of the primary inventory lot for the inventory lot record.                                  |
| `inventoryLotName`          | `String`        | The name of the primary inventory lot for the inventory lot record.                                  |
| `secondaryInventoryLotId`   | `String` (ULID) | The ULID of the secondary inventory lot for the inventory lot record.                                |
| `secondaryInventoryLotName` | `String`        | The name of the secondary inventory lot for the inventory lot record.                                |
| `operationRecordId`         | `String` (ULID) | The ULID of the operation record for the inventory lot record.                                       |
| `inventoryOperationId`      | `String` (ULID) | The ULID of the inventory operation for the inventory lot record.                                    |
| `inventoryOperationName`    | `String`        | The name of the inventory operation for the inventory lot record.                                    |
| `productionOrderId`         | `String` (ULID) | The ULID of the production order for the inventory lot record.                                       |
| `productionOrderName`       | `String`        | The name of the production order for the inventory lot record.                                       |
| `materialReasonCodeId`      | `String` (ULID) | The ULID of the material reason code for the inventory lot record.                                   |
| `materialReasonCodeName`    | `String`        | The name of the material reason code for the inventory lot record.                                   |
| `sourceLocationId`          | `String` (ULID) | The source location of the inventory or lot being operated.                                          |
| `sourceLocationName`        | `String`        | The name of the source location of the inventory or lot being operated.                              |
| `sourceLocationPath`        | `String`        | The path of the source location of the inventory or lot being operated.                              |
| `destinationLocationId`     | `String` (ULID) | The destination location of the inventory or lot being operated.                                     |
| `destinationLocationName`   | `String`        | The name of the destination location of the inventory or lot being operated.                         |
| `destinationLocationPath`   | `String`        | The path of the destination location of the inventory or lot being operated.                         |
| `lotStatus`                 | `String`        | The status of the inventory lot.                                                                     |
| `quantity`                  | `Double`        | The quantity of units being changed depending on the lotRecordType.                                  |
| `unitOfMeasureId`           | `String`        | The ID of the unit of measure for the quantity.                                                      |
| `unitOfMeasureName`         | `String`        | The name of the unit of measure for the quantity.                                                    |
| `unitOfMeasureSymbol`       | `String`        | The symbol of the unit of measure for the quantity.                                                  |
| `startDate`                 | `Instant`       | The beginning timestamp of the inventory lot change.                                                 |
| `endDate`                   | `Instant`       | The end timestamp of the inventory lot change.                                                       |
| `status`                    | `String`        | The status of the inventory lot record (e.g. Running, Completed, Faulted).                           |
| `duration`                  | `Long`          | The duration in seconds.                                                                             |
| `shiftRecordId`             | `String`        | The shift the inventory lot record occurred in.                                                      |
| `id`                        | `String` (ULID) | The ULID of the inventory lot record (optional, used for updating an existing inventory lot record). |
| `notes`                     | `String`        | Notes related to the inventory lot.                                                                  |
| `enabled`                   | `Boolean`       | Indicates if the inventory lot is active and enabled.                                                |
| `spare1`                    | `String`        | Additional field for user-defined context.                                                           |
| `spare2`                    | `String`        | Additional field for user-defined context.                                                           |
| `spare3`                    | `String`        | Additional field for user-defined context.                                                           |

## Code Examples

```python
# Generate the object structure for a new unconsume request object with no initial arguments
newRequest = system.mes.inventory.newUnconsumeRequest()

# Set basic attributes for the new unconsume request
newRequest['materialIdOrPath'] = 'Bottle/Milk'
newRequest['destinationLocationIdOrPath'] = 'DairyCo'
newRequest['quantity'] = 610
# (You can continue setting other properties as needed here)

# Unconsume the inventory
unconsumptionLotRecord = system.mes.inventory.unconsume(**newRequest)

# Output the JSON representation of the lot record of the unconsumption
print(unconsumptionLotRecord)
```
