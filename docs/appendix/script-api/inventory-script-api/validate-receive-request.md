---
sidebar_position: 35
title: "validateReceiveRequest"
description: "Validates the specified parameters for a receive request and returns any validation errors."
---

# system.mes.inventory.validateReceiveRequest

Validates the specified parameters for a receive request and returns any validation errors. This only checks if the receive request can be processed based on the attributes given, without actually performing the inventory receipt. Use this function to verify your parameters before executing the actual receive operation.

## Syntax

```python
system.mes.inventory.validateReceiveRequest(**receiveRequest)
```

## Parameters

| Parameter                     | Type            | Nullable | Description                                                                                                                               |
|-------------------------------|-----------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                        | `String`        | True     | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `quantity`                    | `Double`        | False    | The quantity to receive from the location.                                                                                                |
| `unitOfMeasureSymbol`         | `String`        | True     | The symbol of the unit of measure for the quantity.                                                                                       |
| `lotIdOrName`                 | `String`        | True     | The ID or name of the inventory lot from which the material is being received.                                                            |
| `materialIdOrPath`            | `String`        | False    | The ID or path of the material being received.                                                                                            |
| `destinationLocationIdOrPath` | `String`        | False    | The ID or path of the location the received inventory goes to.                                                                            |
| `createIfNotExists`           | `Boolean`       | False    | Indicates whether the system should create the lot if it does not exist. Default value is `false`.                                        |
| `operationId`                 | `String` (ULID) | True     | The ID of the operation receiving this inventory.                                                                                         |
| `inventoryOperationId`        | `String` (ULID) | True     | The ID of the inventory operation related to this receive action.                                                                         |
| `productionOrderIdOrName`     | `String`        | True     | The ID or name of the production order associated with the receipt.                                                                       |
| `materialReasonCodeId`        | `String` (ULID) | True     | The ID of the material reason code to add additional context.                                                                             |
| `startDate`                   | `Instant`       | False    | The start date and time of the receipt. Default value is `Current Instant`.                                                               |
| `endDate`                     | `Instant`       | True     | The end date and time of the receipt.                                                                                                     |
| `ongoing`                     | `Boolean`       | False    | Indicates whether this request is ongoing. Default value is `false`.                                                                      |
| `inventoryName`               | `String`        | True     | The name of the inventory.                                                                                                                |
| `notes`                       | `String`        | True     | Notes related to the receive request.                                                                                                     |
| `spare1`                      | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare2`                      | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare3`                      | `String`        | True     | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new receive request object with no initial arguments
receiveRequest = system.mes.inventory.newReceiveRequest()

# Set basic attributes for the new receive request
receiveRequest['materialIdOrPath'] = 'Bottle/Milk'
receiveRequest['destinationLocationIdOrPath'] = 'DairyCo'
receiveRequest['quantity'] = 610
# (You can continue setting other properties as needed here)

# Validate receive request parameters
validationErrors = system.mes.inventory.validateReceiveRequest(**receiveRequest)

if len(validationErrors) > 0:
    print('Validation errors found:', validationErrors)
else:
    print('Receive request parameters are valid.')
```
