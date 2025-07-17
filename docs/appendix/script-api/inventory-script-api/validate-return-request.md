---
sidebar_position: 26
title: "validateReturnRequest"
description: "Validates the specified parameters for a return request and returns any validation errors."
---

# system.mes.inventory.validateReturnRequest

Validates the specified parameters for a return request and returns any validation errors. This only checks if the return request can be processed based on the attributes given, without actually performing the inventory return. Use this function to verify your parameters before executing the actual return operation.

## Syntax

```python
system.mes.inventory.validateReturnRequest(**return_request)
```

## Parameters

| Parameter                 | Type            | Description                                                                                                                               |
| ------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                    | `String`        | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `quantity`                | `Double`        | The quantity to return from the location.                                                                                                 |
| `unitOfMeasureSymbol`     | `String`        | The symbol of the unit of measure for the quantity.                                                                                       |
| `lotIdOrName`             | `String`        | The ID or name of the inventory lot being returned.                                                                                       |
| `materialIdOrPath`        | `String`        | The ID or path of the material being returned.                                                                                            |
| `sourceLocationIdOrPath`  | `String`        | The ID or path of the location from which inventory will be returned.                                                                     |
| `operationId`             | `String` (ULID) | The ID of the operation returning this inventory.                                                                                         |
| `inventoryOperationId`    | `String` (ULID) | The ID of the inventory operation related to this return action.                                                                          |
| `productionOrderIdOrName` | `String`        | The ID or name of the production order associated with the return.                                                                        |
| `materialReasonCodeId`    | `String` (ULID) | The ID of the material reason code to add additional context.                                                                             |
| `startDate`               | `Instant`       | The start date and time of the return.                                                                                                    |
| `endDate`                 | `Instant`       | The end date and time of the return.                                                                                                      |
| `ongoing`                 | `Boolean`       | Indicates whether this request is ongoing.                                                                                                |
| `inventoryName`           | `String`        | The name of the inventory the returned inventory goes to.                                                                                 |
| `notes`                   | `String`        | Notes related to the return request.                                                                                                      |
| `spare1`                  | `String`        | Additional field for user-defined context.                                                                                                |
| `spare2`                  | `String`        | Additional field for user-defined context.                                                                                                |
| `spare3`                  | `String`        | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new return request object with no initial arguments
return_request = system.mes.inventory.newReturnRequest()

# Set basic attributes for the new return request
return_request['materialIdOrPath'] = 'Bottle/Milk'
return_request['sourceLocationIdOrPath'] = 'DairyCo'
return_request['quantity'] = 610
# (You can continue setting other properties as needed here)

# Validate return request parameters
validation_errors = system.mes.inventory.validateReturnRequest(**return_request)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Return request parameters are valid.')
```
