---
sidebar_position: 33
title: "newReceiveRequest"
description: "Creates a new Receive Request record to be formatted with attributes."
---

# system.mes.inventory.newReceiveRequest

Creates a new Receive Request record to be formatted with attributes.

## Syntax
```python
system.mes.inventory.newReceiveRequest()
```

## Parameters

| Parameter | Type | Description                               |
|-----------|------|-------------------------------------------|
| None      | -    | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Receive Request object. The following is a list of keys and default values:

| Key                              | Default Value    |
|----------------------------------|------------------|
| `type`                           | `RECEIVE`        |
| `quantity`                       | `null`           |
| `unitOfMeasureSymbol`            | `null`           |
| `lotIdOrName`                    | `null`           |
| `materialIdOrPath`               | `null`           |
| `destinationLocationIdOrPath`    | `null`           |
| `createIfNotExists`              | `false`          |
| `operationId`                    | `null`           |
| `productionOrderIdOrName`        | `null`           |
| `materialReasonCodeId`           | `null`           |
| `startDate`                      | Current Time     |
| `endDate`                        | `null`           |
| `ongoing`                        | `false`          |
| `inventoryName`                  | `null`           |
| `notes`                          | `null`           |
| `spare1`                         | `null`           |
| `spare2`                         | `null`           |
| `spare3`                         | `null`           |

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