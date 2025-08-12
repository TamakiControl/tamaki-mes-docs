---
sidebar_position: 35
title: "validateReceiveRequest"
description: "Validates the specified parameters for a receive request and returns any validation errors."
---

# system.mes.inventory.validateReceiveRequest

Validates the specified parameters for a receive request and returns any validation errors. This only checks if the receive request can be processed based on the attributes given, without actually performing the inventory receipt. Use this function to verify your parameters before executing the actual receive operation.

## Syntax

```python
system.mes.inventory.validateReceiveRequest(**receive_request)
```

## Parameters

| Parameter                     | Type            | Description                                                                                                                               |
|-------------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                        | `String`        | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `quantity`                    | `Double`        | The quantity to receive from the location.                                                                                                |
| `unitOfMeasureSymbol`         | `String`        | The symbol of the unit of measure for the quantity.                                                                                       |
| `lotIdOrName`                 | `String`        | The ID or name of the inventory lot from which the material is being received.                                                            |
| `materialIdOrPath`            | `String`        | The ID or path of the material being received.                                                                                            |
| `destinationLocationIdOrPath` | `String`        | The ID or path of the location the received inventory goes to.                                                                            |
| `createIfNotExists`           | `Boolean`       | Indicates whether the system should create the lot if it does not exist.                                                                  |
| `operationId`                 | `String` (ULID) | The ID of the operation receiving this inventory.                                                                                         |
| `inventoryOperationId`        | `String` (ULID) | The ID of the inventory operation related to this receive action.                                                                         |
| `productionOrderIdOrName`     | `String`        | The ID or name of the production order associated with the receipt.                                                                       |
| `materialReasonCodeId`        | `String` (ULID) | The ID of the material reason code to add additional context.                                                                             |
| `startDate`                   | `Instant`       | The start date and time of the receipt.                                                                                                   |
| `endDate`                     | `Instant`       | The end date and time of the receipt.                                                                                                     |
| `ongoing`                     | `Boolean`       | Indicates whether this request is ongoing.                                                                                                |
| `inventoryName`               | `String`        | The name of the inventory.                                                                                                                |
| `notes`                       | `String`        | Notes related to the receive request.                                                                                                     |
| `spare1`                      | `String`        | Additional field for user-defined context.                                                                                                |
| `spare2`                      | `String`        | Additional field for user-defined context.                                                                                                |
| `spare3`                      | `String`        | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new receive request object with no initial arguments
receive_request = system.mes.inventory.newReceiveRequest()

# Set basic attributes for the new receive request
receive_request['materialIdOrPath'] = 'Bottle/Milk'
receive_request['destinationLocationIdOrPath'] = 'DairyCo'
receive_request['quantity'] = 610
# (You can continue setting other properties as needed here)

# Validate receive request parameters
validation_errors = system.mes.inventory.validateReceiveRequest(**receive_request)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Receive request parameters are valid.')
```
