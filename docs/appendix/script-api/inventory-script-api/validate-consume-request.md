---
sidebar_position: 5
title: "validateConsumeRequest"
description: "Validates the specified parameters for a consume request and returns any validation errors."
---

# system.mes.inventory.validateConsumeRequest

Validates the specified parameters for a consume request and returns any validation errors. This only checks if the consume request can be processed based on the attributes given, without actually performing the consumption. Use this function to verify your parameters before executing the actual consume operation.

## Syntax

```python
system.mes.inventory.validateConsumeRequest(**consumeRequest)
```

## Parameters

| Parameter                     | Type            | Nullable | Description                                                                                                                               |
|-------------------------------|-----------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                        | `String`        | True     | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `quantity`                    | `Double`        | False    | The quantity to consume from the location.                                                                                                |
| `unitOfMeasureSymbol`         | `String`        | True     | The symbol of the unit of measure for the quantity.                                                                                       |
| `lotIdOrName`                 | `String`        | True     | The ID or name of the inventory lot that will be consuming the given lot.                                                                 |
| `materialIdOrPath`            | `String`        | False    | The ID or path of the material being consumed.                                                                                            |
| `sourceLocationIdOrPath`      | `String`        | False    | The ID or path of the location from which inventory will be consumed.                                                                     |
| `consumingLotIdOrName`        | `String`        | True     | The ID or name of the inventory lot from which the material is being consumed.                                                            |
| `destinationLocationIdOrPath` | `String`        | True     | The ID or path of the location the consumed inventory goes to.                                                                            |
| `createIfNotExists`           | `Boolean`       | False    | Indicates whether the system should create the lot if it does not exist. Default value is `false`.                                        |
| `operationId`                 | `String` (ULID) | True     | The ID of the operation consuming this inventory.                                                                                         |
| `inventoryOperationId`        | `String` (ULID) | True     | The ID of the inventory operation related to this consume action.                                                                         |
| `productionOrderIdOrName`     | `String`        | True     | The ID or name of the production order associated with the consumption.                                                                   |
| `materialReasonCodeId`        | `String` (ULID) | True     | The ID of the material reason code to add additional context.                                                                             |
| `startDate`                   | `Instant`       | False    | The start date and time of the consumption. Default value is `Current Instant`.                                                           |
| `endDate`                     | `Instant`       | True     | The end date and time of the consumption.                                                                                                 |
| `ongoing`                     | `Boolean`       | False    | Indicates whether this request is ongoing. Default value is `false`.                                                                      |
| `inventoryName`               | `String`        | True     | The name of the inventory.                                                                                                                |
| `notes`                       | `String`        | True     | Notes related to the consume request.                                                                                                     |
| `spare1`                      | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare2`                      | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare3`                      | `String`        | True     | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new consume request object with no initial arguments
consumeRequest = system.mes.inventory.newConsumeRequest()

# Set basic attributes for the new consume request
consumeRequest['materialIdOrPath'] = 'Bottle/Milk'
consumeRequest['sourceLocationIdOrPath'] = 'DairyCo'
consumeRequest['quantity'] = 610
consumeRequest['createIfNotExists'] = True
# (You can continue setting other properties as needed here)

# Validate consume request parameters
validationErrors = system.mes.inventory.validateConsumeRequest(**consumeRequest)

if len(validationErrors) > 0:
    print('Validation errors found:', validationErrors)
else:
    print('Consume request parameters are valid.')
```
