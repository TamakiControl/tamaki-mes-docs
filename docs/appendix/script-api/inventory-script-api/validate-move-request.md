---
sidebar_position: 14
title: "validateMoveRequest"
description: "Validates the specified parameters for a move request and returns any validation errors."
---

# system.mes.inventory.validateMoveRequest

Validates the specified parameters for a move request and returns any validation errors. This only checks if the move request can be processed based on the attributes given, without actually performing the inventory move. Use this function to verify your parameters before executing the actual move operation.

## Syntax

```python
system.mes.inventory.validateMoveRequest(**moveRequest)
```

## Parameters

| Parameter                     | Type            | Nullable | Description                                                                                                                               |
|-------------------------------|-----------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                        | `String`        | True     | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `quantity`                    | `Double`        | False    | The quantity to move from the location.                                                                                                   |
| `unitOfMeasureSymbol`         | `String`        | True     | The symbol of the unit of measure for the quantity.                                                                                       |
| `lotIdOrName`                 | `String`        | True     | The ID or name of the inventory lot to move.                                                                                              |
| `materialIdOrPath`            | `String`        | False    | The ID or path of the material being moved.                                                                                               |
| `sourceLocationIdOrPath`      | `String`        | False    | The ID or path of the location from which inventory will be moved.                                                                        |
| `destinationLocationIdOrPath` | `String`        | False    | The ID or path of the location the moved inventory goes to.                                                                               |
| `operationId`                 | `String` (ULID) | True     | The ID of the operation moving this inventory.                                                                                            |
| `inventoryOperationId`        | `String` (ULID) | True     | The ID of the inventory operation related to this move action.                                                                            |
| `productionOrderIdOrName`     | `String`        | True     | The ID or name of the production order associated with the move.                                                                          |
| `materialReasonCodeId`        | `String` (ULID) | True     | The ID of the material reason code to add additional context.                                                                             |
| `startDate`                   | `Instant`       | False    | The start date and time of the move. Default value is `Current Instant`.                                                                  |
| `endDate`                     | `Instant`       | True     | The end date and time of the move.                                                                                                        |
| `ongoing`                     | `Boolean`       | False    | Indicates whether this request is ongoing. Default value is `false`.                                                                      |
| `destinationInventoryName`    | `String`        | True     | The name of the inventory the moved inventory goes to.                                                                                    |
| `notes`                       | `String`        | True     | Notes related to the move request.                                                                                                        |
| `spare1`                      | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare2`                      | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare3`                      | `String`        | True     | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new move request object with no initial arguments
moveRequest = system.mes.inventory.newMoveRequest()

# Set basic attributes for the new move request
moveRequest['materialIdOrPath'] = 'Bottle/Milk'
moveRequest['sourceLocationIdOrPath'] = 'DairyFarm'
moveRequest['destinationLocationIdOrPath'] = 'DairyCo'
moveRequest['quantity'] = 610
# (You can continue setting other properties as needed here)

# Validate move request parameters
validationErrors = system.mes.inventory.validateMoveRequest(**moveRequest)

if len(validationErrors) > 0:
    print('Validation errors found:', validationErrors)
else:
    print('Move request parameters are valid.')
```
