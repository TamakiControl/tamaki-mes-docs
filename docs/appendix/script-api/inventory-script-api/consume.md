---
sidebar_position: 4
title: "consume"
description: "Consumes inventory from the MES based on the provided parameters."
---

# system.mes.inventory.consume

Consumes inventory from the MES based on the provided parameters.

## Syntax

```python
system.mes.inventory.consume(**consume_request)
```

## Parameters

| Parameter                     | Type            | Description                                                                                                                               |
| ----------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                        | `String`        | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `quantity`                    | `Double`        | The quantity to consume from the location.                                                                                                |
| `unitOfMeasureSymbol`         | `String`        | The symbol of the unit of measure for the quantity.                                                                                       |
| `lotIdOrName`                 | `String`        | The ID or name of the inventory lot that will be consuming the given lot.                                                                 |
| `materialIdOrPath`            | `String`        | The ID or path of the material being consumed.                                                                                            |
| `sourceLocationIdOrPath`      | `String`        | The ID or path of the location from which inventory will be consumed.                                                                     |
| `consumingLotIdOrName`        | `String`        | The ID or name of the inventory lot from which the material is being consumed.                                                            |
| `destinationLocationIdOrPath` | `String`        | The ID or path of the location the consumed inventory goes to.                                                                            |
| `createIfNotExists`           | `Boolean`       | Indicates whether the system should create the lot if it does not exist.                                                                  |
| `operationId`                 | `String` (ULID) | The ID of the operation consuming this inventory.                                                                                         |
| `inventoryOperationId`        | `String` (ULID) | The ID of the inventory operation related to this consume action.                                                                         |
| `productionOrderIdOrName`     | `String`        | The ID or name of the production order associated with the consumption.                                                                   |
| `materialReasonCodeId`        | `String` (ULID) | The ID of the material reason code to add additional context.                                                                             |
| `startDate`                   | `Instant`       | The start date and time of the consumption.                                                                                               |
| `endDate`                     | `Instant`       | The end date and time of the consumption.                                                                                                 |
| `ongoing`                     | `Boolean`       | Indicates whether this request is ongoing.                                                                                                |
| `inventoryName`               | `String`        | The name of the inventory.                                                                                                                |
| `notes`                       | `String`        | Notes related to the consume request.                                                                                                     |
| `spare1`                      | `String`        | Additional field for user-defined context.                                                                                                |
| `spare2`                      | `String`        | Additional field for user-defined context.                                                                                                |
| `spare3`                      | `String`        | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON representation of an inventory lot record for a Consume Request with the following key properties:

| Name                        | Type            | Description                                                                                          |
|-----------------------------| --------------- | ---------------------------------------------------------------------------------------------------- |
| `lotRecordType`             | `String`        | The type of change for the record.                                                                   |
| `inventoryLotId`            | `String` (ULID) | The ULID of the primary inventory lot for the inventory lot record.                                  |
| `inventoryLotName`          | `String`        | The name of the primary inventory lot for the inventory lot record.                                  |
| `secondaryInventoryLotId`   | `String` (ULID) | The ULID of the secondary inventory lot for the inventory lot record.                                |
| `secondaryInventoryLotName` | `String`        | The name of the secondary inventory lot for the inventory lot record.                                |
| `operationRecordId`         | `String` (ULID) | The ULID of the operation record for the inventory lot record.                                       |
| `inventoryOperationId`      | `String` (ULID) | The ULID of the inventory operation for the inventory lot record.                                    |
| `productionOrderId`         | `String` (ULID) | The ULID of the production order for the inventory lot record.                                       |
| `materialReasonCodeId`      | `String` (ULID) | The ULID of the material reason code for the inventory lot record.                                   |
| `sourceLocationId`          | `String` (ULID) | The source location of the inventory or lot being operated.                                          |
| `destinationLocationId`     | `String` (ULID) | The destination location of the inventory or lot being operated.                                     |
| `lotStatus`                 | `String`        | The status of the inventory lot.                                                                     |
| `quantity`                  | `Double`        | The quantity of units being changed depending on the lotRecordType.                                  |
| `startDate`                 | `Instant`       | The beginning timestamp of the inventory lot change.                                                 |
| `endDate`                   | `Instant`       | The end timestamp of the inventory lot change.                                                       |
| `status`                    | `String`        | The status of the inventory lot record (e.g. Running, Completed, Faulted).                           |
| `id`                        | `String` (ULID) | The ULID of the inventory lot record (optional, used for updating an existing inventory lot record). |
| `notes`                     | `String`        | Notes related to the inventory lot.                                                                  |
| `enabled`                   | `Boolean`       | Indicates if the inventory lot is active and enabled.                                                |
| `spare1`                    | `String`        | Additional field for user-defined context.                                                           |
| `spare2`                    | `String`        | Additional field for user-defined context.                                                           |
| `spare3`                    | `String`        | Additional field for user-defined context.                                                           |

## Code Examples

```python
# Generate the object structure for a new consume request object with no initial arguments
new_request = system.mes.inventory.newConsumeRequest()

# Set basic attributes for the new consume request
new_request['materialIdOrPath'] = 'Bottle/Milk'
new_request['sourceLocationIdOrPath'] = 'DairyCo'
new_request['quantity'] = 610
new_request['createIfNotExists'] = True
# (You can continue setting other properties as needed here)

# Consume the request
consumed_request = system.mes.inventory.consume(**new_request)

# Output the JSON representation of the consumed request
print(str(consumed_request))
```
