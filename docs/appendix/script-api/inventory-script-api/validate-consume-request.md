---
sidebar_position: 5
title: "validateConsumeRequest"
description: "Validates a consume request based on the provided parameters."
---

# system.mes.inventory.validateConsumeRequest

Validates a consume request based on the provided parameters.

## Syntax
```python
system.mes.inventory.validateConsumeRequest(**consume_request)
```

## Parameters

| Parameter                      | Type            | Description                                                                   |
|--------------------------------|-----------------|-------------------------------------------------------------------------------|
| `type`                         | `String`        | The type of request used for inventory request deserialization.               |
| `quantity`                     | `Double`        | The quantity to consume from the location.                                    |
| `unitOfMeasureSymbol`          | `String`        | The symbol of the unit of measure for the quantity.                           |
| `lotIdOrName`                  | `String`        | The ID or name of material lot that will be consuming the given lot.          |
| `materialIdOrPath`             | `String`        | The ID or path of the material being consumed.                                |
| `sourceLocationIdOrPath`       | `String`        | The ID or path of the location from which inventory will be consumed.         |
| `consumingLotIdOrName`         | `String`        | The ID or name of the material lot from which the material is being consumed. |
| `destinationLocationIdOrPath`  | `String`        | The ID or path of the location the consumed inventory goes to.                |
| `createIfNotExists`            | `Boolean`       | Indicates whether the system should create the lot if it does not exist.      |
| `operationId`                  | `String` (ULID) | The ID of the operation consuming this inventory.                             |
| `productionOrderIdOrName`      | `String`        | The ID or name of the production order associated with the consumption.       |
| `materialReasonCodeId`         | `String` (ULID) | The ID of the material reason code to add additional context.                 |
| `startDate`                    | `Instant`       | The start date and time of the consumption.                                   |
| `endDate`                      | `Instant`       | The end date and time of the consumption.                                     |
| `ongoing`                      | `Boolean`       | Indicates whether this request is ongoing.                                    |
| `inventoryName`                | `String`        | The name of the inventory.                                                    |
| `notes`                        | `String`        | Notes related to the consume request.                                         |
| `spare1`                       | `String`        | Additional field for user-defined context.                                    |
| `spare2`                       | `String`        | Additional field for user-defined context.                                    |
| `spare3`                       | `String`        | Additional field for user-defined context.                                    |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Create a new consume request instance with no initial arguments
consume_request = system.mes.inventory.newConsumeRequest()

# Set basic attributes for the new consume request
consume_request['materialIdOrPath'] = 'Bottle/Milk'
consume_request['sourceLocationIdOrPath'] = 'DairyCo'
consume_request['quantity'] = 610
consume_request['createIfNotExists'] = True
# (You can continue setting other properties as needed here)

# Validate consume request parameters
validation_errors = system.mes.inventory.validateConsumeRequest(**consume_request)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Consume request parameters are valid.')
```