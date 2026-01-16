---
sidebar_position: 23
title: "scrapAll"
description: "Scraps all inventory of a specific material at a location from the MES based on the provided parameters."
---

# system.mes.inventory.scrapAll

Scraps all inventory of a specific material at a location from the MES based on the provided parameters. If no material is specified, it will scrap all inventory at the location.

## Syntax

```python
system.mes.inventory.scrapAll(**scrapAllRequest)
```

## Parameters

| Parameter                     | Type            | Nullable | Description                                                                                                           |
|-------------------------------|-----------------|----------|-----------------------------------------------------------------------------------------------------------------------|
| `type`                        | `String`        | True     | The type of request defined by the LotRecordType Enum. It is internally set to SCRAP and must not be modified.        |
| `locationIdOrPath`            | `String`        | False    | The ID or path of the location to scrap inventory at. Required.                                                       |
| `materialIdOrPath`            | `String`        | True     | The ID or path of the material to scrap. Optional - if omitted, all materials at the location will be scrapped.       |
| `destinationLotIdOrName`      | `String`        | True     | The id or name of the lot being scrapped into.                                                                        |
| `destinationMaterialIdOrPath` | `String`        | True     | The id or path of the material for the destination lot.                                                               |
| `destinationLocationIdOrPath` | `String`        | True     | The ID or path of the location that the inventory will be scrapped into.                                              |
| `operationId`                 | `String` (ULID) | True     | The ID of the operation scrapping this inventory.                                                                     |
| `inventoryOperationId`        | `String` (ULID) | True     | The ID of the inventory operation related to this scrap action.                                                       |
| `productionOrderIdOrName`     | `String`        | True     | The ID or name of the production order associated with the scrap.                                                     |
| `materialReasonCodeId`        | `String` (ULID) | True     | The ID of the material reason code to add additional context.                                                         |
| `startDate`                   | `Instant`       | False    | The start date and time of the scrap. Default value is `Current Instant`.                                             |
| `endDate`                     | `Instant`       | True     | The end date and time of the scrap.                                                                                   |
| `notes`                       | `String`        | True     | Notes related to the scrap all request.                                                                               |
| `spare1`                      | `String`        | True     | Additional field for user-defined context.                                                                            |
| `spare2`                      | `String`        | True     | Additional field for user-defined context.                                                                            |
| `spare3`                      | `String`        | True     | Additional field for user-defined context.                                                                            |

## Returns

Returns a list of JSON representation of each inventory lot records created for this scrap all action.

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
# Generate the object structure for a new scrap all request
newRequest = system.mes.inventory.newScrapAllRequest()

# Set basic attributes for the new scrap all request
newRequest['materialIdOrPath'] = 'Bottle/Milk'
newRequest['sourceLocationIdOrPath'] = 'DairyCo'

# Scrap all inventory at the specified location that matches the material (if specified)
scrapAllLotRecord = system.mes.inventory.scrapAll(**newRequest)

# Output the JSON representation of the scrap all lot record
print(scrapAllLotRecord)
```
