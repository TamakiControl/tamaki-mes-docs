---
sidebar_position: 3
title: "newConsumeRequest"
description: "Generates an empty consume request to provide the structure to save a new record into the database."
---

# system.mes.inventory.newConsumeRequest

Generates an empty Consume Request to provide the structure required by the API to save a new record into the database.
This method must be combined with the [consume](./consume) method in order to persist the record.

## Syntax

```python
system.mes.inventory.newConsumeRequest()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Consume Request object. The following is a list of keys and default values:

| Key                           | Default Value |
|-------------------------------|---------------|
| `type`                        | `CONSUME`     |
| `quantity`                    | `null`        |
| `unitOfMeasureSymbol`         | `null`        |
| `lotIdOrName`                 | `null`        |
| `materialIdOrPath`            | `null`        |
| `sourceLocationIdOrPath`      | `null`        |
| `consumingLotIdOrName`        | `null`        |
| `destinationLocationIdOrPath` | `null`        |
| `createIfNotExists`           | `false`       |
| `operationId`                 | `null`        |
| `inventoryOperationId`        | `null`        |
| `productionOrderIdOrName`     | `null`        |
| `materialReasonCodeId`        | `null`        |
| `startDate`                   | Current Time  |
| `endDate`                     | `null`        |
| `ongoing`                     | `false`       |
| `inventoryName`               | `null`        |
| `notes`                       | `null`        |
| `spare1`                      | `null`        |
| `spare2`                      | `null`        |
| `spare3`                      | `null`        |

## Code Examples

```python
# Generate the object structure for a new consume request object with no initial arguments
new_request = system.mes.inventory.newConsumeRequest()

# Set basic attributes for the new consume request
new_request['materialIdOrPath'] = 'Bottle/Milk'
new_request['sourceLocationIdOrPath'] = 'DairyCo'
new_request['quantity'] = 610
new_request['createIfNotExists'] = True
# (You can continue setting other properties as needed here)

# Consume the request
consumed_request = system.mes.inventory.consume(**new_request)

# Output the JSON representation of the consumed request
print(consumed_request)
```
