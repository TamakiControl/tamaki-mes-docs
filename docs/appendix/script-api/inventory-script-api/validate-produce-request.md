---
sidebar_position: 11
title: "validateProduceRequest"
description: "Validates the specified parameters for a produce request and returns any validation errors."
---

# system.mes.inventory.validateProduceRequest

Validates the specified parameters for a produce request and returns any validation errors. This only checks if the produce request can be processed based on the attributes given, without actually performing the production. Use this function to verify your parameters before executing the actual produce operation.

## Syntax

```python
system.mes.inventory.validateProduceRequest(**produce_request)
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

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new produce request object with no initial arguments
produce_request = system.mes.inventory.newProduceRequest()

# Set basic attributes for the new produce request
produce_request['materialIdOrPath'] = 'Bottle/Milk'
produce_request['destinationLocationIdOrPath'] = 'DairyCo'
produce_request['quantity'] = 610
# (You can continue setting other properties as needed here)

# Validate produce request parameters
validation_errors = system.mes.inventory.validateProduceRequest(**produce_request)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Produce request parameters are valid.')
```
