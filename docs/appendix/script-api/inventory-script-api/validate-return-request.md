---
sidebar_position: 26
title: "validateReturnRequest"
description: "Validates the specified parameters for a return request and returns any validation errors."
---

# system.mes.inventory.validateReturnRequest

Validates the specified parameters for a return request and returns any validation errors. This only checks if the return request can be processed based on the attributes given, without actually performing the inventory return. Use this function to verify your parameters before executing the actual return operation.

## Syntax

```python
system.mes.inventory.validateReturnRequest(**returnRequest)
```

## Parameters

| Parameter                 | Type            | Nullable | Description                                                                                                                               |
|---------------------------|-----------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                    | `String`        | True     | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `quantity`                | `Double`        | False    | The quantity to return from the location.                                                                                                 |
| `unitOfMeasureSymbol`     | `String`        | True     | The symbol of the unit of measure for the quantity.                                                                                       |
| `lotIdOrName`             | `String`        | True     | The ID or name of the inventory lot being returned.                                                                                       |
| `materialIdOrPath`        | `String`        | False    | The ID or path of the material being returned.                                                                                            |
| `sourceLocationIdOrPath`  | `String`        | False    | The ID or path of the location from which inventory will be returned.                                                                     |
| `operationId`             | `String` (ULID) | True     | The ID of the operation returning this inventory.                                                                                         |
| `inventoryOperationId`    | `String` (ULID) | True     | The ID of the inventory operation related to this return action.                                                                          |
| `productionOrderIdOrName` | `String`        | True     | The ID or name of the production order associated with the return.                                                                        |
| `materialReasonCodeId`    | `String` (ULID) | True     | The ID of the material reason code to add additional context.                                                                             |
| `startDate`               | `Instant`       | False    | The start date and time of the return. Default value is `Current Instant`.                                                                |
| `endDate`                 | `Instant`       | True     | The end date and time of the return.                                                                                                      |
| `ongoing`                 | `Boolean`       | False    | Indicates whether this request is ongoing. Default value is `false`.                                                                      |
| `inventoryName`           | `String`        | True     | The name of the inventory the returned inventory goes to.                                                                                 |
| `notes`                   | `String`        | True     | Notes related to the return request.                                                                                                      |
| `spare1`                  | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare2`                  | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare3`                  | `String`        | True     | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new return request object with no initial arguments
returnRequest = system.mes.inventory.newReturnRequest()

# Set basic attributes for the new return request
returnRequest['materialIdOrPath'] = 'Bottle/Milk'
returnRequest['sourceLocationIdOrPath'] = 'DairyCo'
returnRequest['quantity'] = 610
# (You can continue setting other properties as needed here)

# Validate return request parameters
validationErrors = system.mes.inventory.validateReturnRequest(**returnRequest)

if len(validationErrors) > 0:
    print('Validation errors found:', validationErrors)
else:
    print('Return request parameters are valid.')
```
