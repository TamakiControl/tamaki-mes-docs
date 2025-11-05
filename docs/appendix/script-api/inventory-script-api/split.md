---
sidebar_position: 16
title: "split"
description: "Splits inventory from the MES based on the provided parameters."
---

# system.mes.inventory.split

Splits inventory from the MES based on the provided parameters.

## Syntax

```python
system.mes.inventory.split(**split_request)
```

## Parameters

| Parameter                  | Type            | Nullable | Description                                                                                                                               |
|----------------------------|-----------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                     | `String`        | True     | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `quantity`                 | `Double`        | False    | The quantity to split from the location.                                                                                                  |
| `unitOfMeasureSymbol`      | `String`        | True     | The symbol of the unit of measure for the quantity.                                                                                       |
| `sourceLotId`              | `String` (ULID) | False    | The ID of the inventory lot being split.                                                                                                  |
| `sourceLocationIdOrPath`   | `String`        | False    | The ID or path of the location from which inventory will be split.                                                                        |
| `destinationLotName`       | `String`        | False    | The name of the inventory lot the split inventory goes to.                                                                                |
| `operationId`              | `String` (ULID) | True     | The ID of the operation splitting this inventory.                                                                                         |
| `inventoryOperationId`     | `String` (ULID) | True     | The ID of the inventory operation related to this split action.                                                                           |
| `productionOrderIdOrName`  | `String`        | True     | The ID or name of the production order associated with the split.                                                                         |
| `materialReasonCodeId`     | `String` (ULID) | True     | The ID of the material reason code to add additional context.                                                                             |
| `destinationInventoryName` | `String`        | True     | The name of the inventory the split inventory goes to.                                                                                    |
| `notes`                    | `String`        | True     | Notes related to the split request.                                                                                                       |
| `spare1`                   | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare2`                   | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare3`                   | `String`        | True     | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON representation of an inventory lot record for a Split Request.

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
# Generate the object structure for a new split request object with no initial arguments
newRequest = system.mes.inventory.newSplitRequest()

# Set basic attributes for the new split request
newRequest['sourceLocationIdOrPath'] = 'DairyCo'
newRequest['sourceLotId'] = '01JJCQEJYG-E31FHVTF-JB6WEJTC'
newRequest['destinationLotName'] = '5db685a7-2096-449a-b96c-effb3739e021'
newRequest['quantity'] = 610
# (You can continue setting other properties as needed here)

# Split the inventory
splitLotRecord = system.mes.inventory.split(**newRequest)

# Output the JSON representation of the lot record of the split
print(splitLotRecord)
```
