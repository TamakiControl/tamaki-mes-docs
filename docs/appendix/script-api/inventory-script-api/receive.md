---
sidebar_position: 34
title: "receive"
description: "Receives inventory from the MES based on the provided parameters."
---

# system.mes.inventory.receive

Receives inventory from the MES based on the provided parameters.

## Syntax
```python
system.mes.inventory.receive(**receive_request)
```

## Parameters

| Parameter                       | Type            | Description                                                                   |
|---------------------------------|-----------------|-------------------------------------------------------------------------------|
| `type`                          | `String`        | The type of request used for inventory request deserialization.               |
| `quantity`                      | `Double`        | The quantity to receive from the location.                                    |
| `unitOfMeasureSymbol`           | `String`        | The symbol of the unit of measure for the quantity.                           |
| `lotIdOrName`                   | `String`        | The ID or name of the material lot from which the material is being received. |
| `materialIdOrPath`              | `String`        | The ID or path of the material being received.                                |
| `destinationLocationIdOrPath`   | `String`        | The ID or path of the location the received inventory goes to.                |
| `createIfNotExists`             | `Boolean`       | Indicates whether the system should create the lot if it does not exist.      |
| `operationId`                   | `String` (ULID) | The ID of the operation receiving this inventory.                             |
| `productionOrderIdOrName`       | `String`        | The ID or name of the production order associated with the receipt.           |
| `materialReasonCodeId`          | `String` (ULID) | The ID of the material reason code to add additional context.                 |
| `startDate`                     | `Instant`       | The start date and time of the receipt.                                       |
| `endDate`                       | `Instant`       | The end date and time of the receipt.                                         |
| `ongoing`                       | `Boolean`       | Indicates whether this request is ongoing.                                    |
| `inventoryName`                 | `String`        | The name of the inventory.                                                    |
| `notes`                         | `String`        | Notes related to the receive request.                                         |
| `spare1`                        | `String`        | Additional field for user-defined context.                                    |
| `spare2`                        | `String`        | Additional field for user-defined context.                                    |
| `spare3`                        | `String`        | Additional field for user-defined context.                                    |

## Returns

Returns a JSON representation of a material lot record for a Receive Request.

## Code Examples

```python
# Create a new receive request instance with no initial arguments
new_request = system.mes.inventory.newReceiveRequest()

# Set basic attributes for the new receive request
new_request['materialIdOrPath'] = 'Bottle/Milk'
new_request['destinationLocationIdOrPath'] = 'DairyCo'
new_request['quantity'] = 610
new_request['createIfNotExists'] = True
# (You can continue setting other properties as needed here)

# Receive the request
received_request = system.mes.inventory.receive(**new_request)

# Output the JSON representation of the received request
print(received_request)
```