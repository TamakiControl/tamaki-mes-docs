---
sidebar_position: 8
title: "validateUnconsumeRequest"
description: "Validates the specified parameters for an unconsume request and returns any validation errors."
---

# system.mes.inventory.validateUnconsumeRequest

Validates the specified parameters for an unconsume request and returns any validation errors. This only checks if the unconsume request can be processed based on the attributes given, without actually performing the unconsumption. Use this function to verify your parameters before executing the actual unconsume operation.

## Syntax

```python
system.mes.inventory.validateUnconsumeRequest(**unconsume_request)
```

## Parameters

| Parameter                     | Type            | Description                                                                                                                               |
| ----------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                        | `String`        | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `quantity`                    | `Double`        | The quantity to unconsume from the location.                                                                                              |
| `unitOfMeasureSymbol`         | `String`        | The symbol of the unit of measure for the quantity.                                                                                       |
| `lotIdOrName`                 | `String`        | The ID or name of the inventory lot that will be unconsuming the given lot.                                                               |
| `materialIdOrPath`            | `String`        | The ID or path of the material being unconsumed.                                                                                          |
| `sourceLocationIdOrPath`      | `String`        | The ID or path of the location from which inventory will be unconsumed.                                                                   |
| `consumingLotIdOrName`        | `String`        | The ID or name of the inventory lot from which the material is being unconsumed.                                                          |
| `destinationLocationIdOrPath` | `String`        | The ID or path of the location the unconsumed inventory goes to.                                                                          |
| `createIfNotExists`           | `Boolean`       | Indicates whether the system should create the lot if it does not exist.                                                                  |
| `operationId`                 | `String` (ULID) | The ID of the operation unconsuming this inventory.                                                                                       |
| `inventoryOperationId`        | `String` (ULID) | The ID of the inventory operation related to this unconsume action.                                                                       |
| `productionOrderIdOrName`     | `String`        | The ID or name of the production order associated with the unconsumption.                                                                 |
| `materialReasonCodeId`        | `String` (ULID) | The ID of the material reason code to add additional context.                                                                             |
| `startDate`                   | `Instant`       | The start date and time of the unconsumption.                                                                                             |
| `endDate`                     | `Instant`       | The end date and time of the unconsumption.                                                                                               |
| `ongoing`                     | `Boolean`       | Indicates whether this request is ongoing.                                                                                                |
| `inventoryName`               | `String`        | The name of the inventory.                                                                                                                |
| `notes`                       | `String`        | Notes related to the unconsume request.                                                                                                   |
| `spare1`                      | `String`        | Additional field for user-defined context.                                                                                                |
| `spare2`                      | `String`        | Additional field for user-defined context.                                                                                                |
| `spare3`                      | `String`        | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new unconsume request object with no initial arguments
unconsume_request = system.mes.inventory.newUnconsumeRequest()

# Set basic attributes for the new unconsume request
unconsume_request['materialIdOrPath'] = 'Bottle/Milk'
unconsume_request['destinationLocationIdOrPath'] = 'DairyCo'
unconsume_request['quantity'] = 610
# (You can continue setting other properties as needed here)

# Validate unconsume request parameters
validation_errors = system.mes.inventory.validateUnconsumeRequest(**unconsume_request)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Unconsume request parameters are valid.')
```
