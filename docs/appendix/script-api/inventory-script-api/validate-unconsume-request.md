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
