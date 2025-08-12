---
sidebar_position: 14
title: "validateMoveRequest"
description: "Validates the specified parameters for a move request and returns any validation errors."
---

# system.mes.inventory.validateMoveRequest

Validates the specified parameters for a move request and returns any validation errors. This only checks if the move request can be processed based on the attributes given, without actually performing the inventory move. Use this function to verify your parameters before executing the actual move operation.

## Syntax

```python
system.mes.inventory.validateMoveRequest(**move_request)
```

## Parameters

| Parameter                     | Type            | Description                                                                                                                               |
|-------------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                        | `String`        | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `quantity`                    | `Double`        | The quantity to move from the location.                                                                                                   |
| `unitOfMeasureSymbol`         | `String`        | The symbol of the unit of measure for the quantity.                                                                                       |
| `lotIdOrName`                 | `String`        | The ID or name of the inventory lot to move.                                                                                              |
| `materialIdOrPath`            | `String`        | The ID or path of the material being moved.                                                                                               |
| `sourceLocationIdOrPath`      | `String`        | The ID or path of the location from which inventory will be moved.                                                                        |
| `destinationLocationIdOrPath` | `String`        | The ID or path of the location the moved inventory goes to.                                                                               |
| `operationId`                 | `String` (ULID) | The ID of the operation moving this inventory.                                                                                            |
| `inventoryOperationId`        | `String` (ULID) | The ID of the inventory operation related to this move action.                                                                            |
| `productionOrderIdOrName`     | `String`        | The ID or name of the production order associated with the move.                                                                          |
| `materialReasonCodeId`        | `String` (ULID) | The ID of the material reason code to add additional context.                                                                             |
| `startDate`                   | `Instant`       | The start date and time of the move.                                                                                                      |
| `endDate`                     | `Instant`       | The end date and time of the move.                                                                                                        |
| `ongoing`                     | `Boolean`       | Indicates whether this request is ongoing.                                                                                                |
| `destinationInventoryName`    | `String`        | The name of the inventory the moved inventory goes to.                                                                                    |
| `notes`                       | `String`        | Notes related to the move request.                                                                                                        |
| `spare1`                      | `String`        | Additional field for user-defined context.                                                                                                |
| `spare2`                      | `String`        | Additional field for user-defined context.                                                                                                |
| `spare3`                      | `String`        | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new move request object with no initial arguments
move_request = system.mes.inventory.newMoveRequest()

# Set basic attributes for the new move request
move_request['materialIdOrPath'] = 'Bottle/Milk'
move_request['sourceLocationIdOrPath'] = 'DairyFarm'
move_request['destinationLocationIdOrPath'] = 'DairyCo'
move_request['quantity'] = 610
# (You can continue setting other properties as needed here)

# Validate move request parameters
validation_errors = system.mes.inventory.validateMoveRequest(**move_request)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Move request parameters are valid.')
```
