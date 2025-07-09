---
sidebar_position: 38
title: "validateShipRequest"
description: "Validates the specified parameters for a ship request and returns any validation errors."
---

# system.mes.inventory.validateShipRequest

Validates the specified parameters for a ship request and returns any validation errors. This only checks if the ship request can be processed based on the attributes given, without actually performing the inventory shipping. Use this function to verify your parameters before executing the actual ship operation.

## Syntax

```python
system.mes.inventory.validateShipRequest(**ship_request)
```

## Parameters

| Parameter                 | Type            | Description                                                                                                                               |
| ------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                    | `String`        | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `quantity`                | `Double`        | The quantity to ship from the location.                                                                                                   |
| `unitOfMeasureSymbol`     | `String`        | The symbol of the unit of measure for the quantity.                                                                                       |
| `lotIdOrName`             | `String`        | The ID or name of the inventory lot that will be shipped.                                                                                 |
| `materialIdOrPath`        | `String`        | The ID or path of the material being shipped.                                                                                             |
| `sourceLocationIdOrPath`  | `String`        | The ID or path of the location from which inventory will be shipped.                                                                      |
| `operationId`             | `String` (ULID) | The ID of the operation shipping this inventory.                                                                                          |
| `inventoryOperationId`    | `String` (ULID) | The ID of the inventory operation related to this ship action.                                                                            |
| `productionOrderIdOrName` | `String`        | The ID or name of the production order associated with the ship.                                                                          |
| `materialReasonCodeId`    | `String` (ULID) | The ID of the material reason code to add additional context.                                                                             |
| `startDate`               | `Instant`       | The start date and time of the ship.                                                                                                      |
| `endDate`                 | `Instant`       | The end date and time of the ship.                                                                                                        |
| `ongoing`                 | `Boolean`       | Indicates whether this request is ongoing.                                                                                                |
| `inventoryName`           | `String`        | The name of the inventory the shipped inventory goes to.                                                                                  |
| `notes`                   | `String`        | Notes related to the ship request.                                                                                                        |
| `spare1`                  | `String`        | Additional field for user-defined context.                                                                                                |
| `spare2`                  | `String`        | Additional field for user-defined context.                                                                                                |
| `spare3`                  | `String`        | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new ship request object with no initial arguments
ship_request = system.mes.inventory.newShipRequest()

# Set basic attributes for the new ship request
ship_request['materialIdOrPath'] = 'Bottle/Milk'
ship_request['sourceLocationIdOrPath'] = 'DairyCo'
ship_request['quantity'] = 610
# (You can continue setting other properties as needed here)

# Validate ship request parameters
validation_errors = system.mes.inventory.validateShipRequest(**ship_request)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Ship request parameters are valid.')
```
