---
sidebar_position: 38
title: "validateShipRequest"
description: "Validates the specified parameters for a ship request and returns any validation errors."
---

# system.mes.inventory.validateShipRequest

Validates the specified parameters for a ship request and returns any validation errors. This only checks if the ship request can be processed based on the attributes given, without actually performing the inventory shipping. Use this function to verify your parameters before executing the actual ship operation.


## Permissions

This method requires the `INVENTORY.READ.VALIDATE` permission.

## Syntax

```python
system.mes.inventory.validateShipRequest(**ship_request)
```

## Parameters

| Parameter                 | Type            | Nullable | Description                                                                                                                               |
|---------------------------|-----------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                    | `String`        | True     | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `quantity`                | `Double`        | False    | The quantity to ship from the location.                                                                                                   |
| `unitOfMeasureSymbol`     | `String`        | True     | The symbol of the unit of measure for the quantity.                                                                                       |
| `lotIdOrName`             | `String`        | True     | The ID or name of the inventory lot that will be shipped.                                                                                 |
| `materialIdOrPath`        | `String`        | False    | The ID or path of the material being shipped.                                                                                             |
| `sourceLocationIdOrPath`  | `String`        | False    | The ID or path of the location from which inventory will be shipped.                                                                      |
| `operationId`             | `String` (ULID) | True     | The ID of the operation shipping this inventory.                                                                                          |
| `inventoryOperationId`    | `String` (ULID) | True     | The ID of the inventory operation related to this ship action.                                                                            |
| `productionOrderIdOrName` | `String`        | True     | The ID or name of the production order associated with the ship.                                                                          |
| `materialReasonCodeId`    | `String` (ULID) | True     | The ID of the material reason code to add additional context.                                                                             |
| `startDate`               | `Instant`       | False    | The start date and time of the ship. Default value is `Current Instant`.                                                                  |
| `endDate`                 | `Instant`       | True     | The end date and time of the ship.                                                                                                        |
| `ongoing`                 | `Boolean`       | False    | Indicates whether this request is ongoing. Default value is `false`.                                                                      |
| `inventoryName`           | `String`        | True     | The name of the inventory the shipped inventory goes to.                                                                                  |
| `notes`                   | `String`        | True     | Notes related to the ship request.                                                                                                        |
| `spare1`                  | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare2`                  | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare3`                  | `String`        | True     | Additional field for user-defined context.                                                                                                |

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
