---
sidebar_position: 33
title: "newReceiveRequest"
description: "Generates an empty non-persisted receive request to provide the structure to save a new record into the database."
---

# system.mes.inventory.newReceiveRequest

Generates an empty non-persisted Receive Request to provide the structure required by the API to save a new record into the database. 
This method must be combined with the [receive](./receive) method in order to persist the record.

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
# Generate the object structure for a new receive request object with no initial arguments
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