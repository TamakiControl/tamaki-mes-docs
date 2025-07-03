---
sidebar_position: 10
title: "produce"
description: "Produces inventory from the MES based on the provided parameters."
---

# system.mes.inventory.produce

Produces inventory from the MES based on the provided parameters.

## Syntax

```python
system.mes.inventory.produce(**produce_request)
```

## Parameters

| Parameter                       | Type            | Description                                                                                                                               |
| ------------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                          | `String`        | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `quantity`                      | `Double`        | The quantity to produce from the location.                                                                                                |
| `unitOfMeasureSymbol`           | `String`        | The symbol of the unit of measure for the quantity.                                                                                       |
| `lotIdOrName`                   | `String`        | The ID or name of the inventory lot from which the material is being produced.                                                            |
| `materialIdOrPath`              | `String`        | The ID or path of the material being produced.                                                                                            |
| `destinationLocationIdOrPath`   | `String`        | The ID or path of the location the produced inventory goes to.                                                                            |
| `producingLotIdOrName`          | `String`        | The ID or name of the inventory lot that will be producing the given lot.                                                                 |
| `sourceLocationIdOrPath`        | `String`        | The ID or path of the location from which inventory will be produced.                                                                     |
| `createIfNotExists`             | `Boolean`       | Indicates whether the system should create the lot if it does not exist.                                                                  |
| `operationId`                   | `String` (ULID) | The ID of the operation producing this inventory.                                                                                         |
| `inventoryOperationId`          | `String` (ULID) | The ID of the inventory operation related to this produce action.                                                                         |
| `productionOrderIdOrName`       | `String`        | The ID or name of the production order associated with the production.                                                                    |
| `incrementProductionOrderCount` | `Boolean`       | Indicates whether to increment the production order count.                                                                                |
| `materialReasonCodeId`          | `String` (ULID) | The ID of the material reason code to add additional context.                                                                             |
| `startDate`                     | `Instant`       | The start date and time of the production.                                                                                                |
| `endDate`                       | `Instant`       | The end date and time of the production.                                                                                                  |
| `ongoing`                       | `Boolean`       | Indicates whether this request is ongoing.                                                                                                |
| `inventoryName`                 | `String`        | The name of the inventory.                                                                                                                |
| `notes`                         | `String`        | Notes related to the produce request.                                                                                                     |
| `spare1`                        | `String`        | Additional field for user-defined context.                                                                                                |
| `spare2`                        | `String`        | Additional field for user-defined context.                                                                                                |
| `spare3`                        | `String`        | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON representation of an inventory lot record for a Produce Request.

## Code Examples

```python
# Generate the object structure for a new produce request object with no initial arguments
new_request = system.mes.inventory.newProduceRequest()

# Set basic attributes for the new produce request
new_request['materialIdOrPath'] = 'Bottle/Milk'
new_request['destinationLocationIdOrPath'] = 'DairyCo'
new_request['quantity'] = 610
# (You can continue setting other properties as needed here)

# Produce the request
produced_request = system.mes.inventory.produce(**new_request)

# Output the JSON representation of the produced request
print(produced_request)
```
