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

| Parameter                       | Type            | Nullable | Description                                                                                                                               |
|---------------------------------|-----------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                          | `String`        | True     | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `quantity`                      | `Double`        | False    | The quantity to produce from the location.                                                                                                |
| `unitOfMeasureSymbol`           | `String`        | True     | The symbol of the unit of measure for the quantity.                                                                                       |
| `lotIdOrName`                   | `String`        | True     | The ID or name of the inventory lot from which the material is being produced.                                                            |
| `materialIdOrPath`              | `String`        | False    | The ID or path of the material being produced.                                                                                            |
| `destinationLocationIdOrPath`   | `String`        | False    | The ID or path of the location the produced inventory goes to.                                                                            |
| `producingLotIdOrName`          | `String`        | True     | The ID or name of the inventory lot that will be producing the given lot.                                                                 |
| `sourceLocationIdOrPath`        | `String`        | True     | The ID or path of the location from which inventory will be produced.                                                                     |
| `createIfNotExists`             | `Boolean`       | False    | Indicates whether the system should create the lot if it does not exist. Default value is `false`.                                        |
| `operationId`                   | `String` (ULID) | True     | The ID of the operation producing this inventory.                                                                                         |
| `inventoryOperationId`          | `String` (ULID) | TBD      | The ID of the inventory operation related to this produce action.                                                                         |
| `productionOrderIdOrName`       | `String`        | True     | The ID or name of the production order associated with the production.                                                                    |
| `incrementProductionOrderCount` | `Boolean`       | False    | Indicates whether to increment the production order count. Default value is `false`.                                                      |
| `materialReasonCodeId`          | `String` (ULID) | True     | The ID of the material reason code to add additional context.                                                                             |
| `startDate`                     | `Instant`       | False    | The start date and time of the production. Default value is `Current Instant`.                                                            |
| `endDate`                       | `Instant`       | True     | The end date and time of the production.                                                                                                  |
| `ongoing`                       | `Boolean`       | False    | Indicates whether this request is ongoing. Default value is `false`.                                                                      |
| `inventoryName`                 | `String`        | True     | The name of the inventory.                                                                                                                |
| `notes`                         | `String`        | True     | Notes related to the produce request.                                                                                                     |
| `spare1`                        | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare2`                        | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare3`                        | `String`        | True     | Additional field for user-defined context.                                                                                                |

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
