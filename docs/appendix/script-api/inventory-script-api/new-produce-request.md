---
sidebar_position: 9
title: "newProduceRequest"
description: "Generates an empty non-persisted consume request to provide the structure to save a new record into the database."
---

# system.mes.inventory.newProduceRequest

Generates an empty non-persisted Produce Request to provide the structure required by the API to save a new record into the database.
This method must be combined with the [produce](./produce) method in order to persist the record.

## Syntax

```python
system.mes.inventory.newProduceRequest()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Produce Request object. The following is a list of keys and default values:

| Key                             | Default Value |
|---------------------------------|---------------|
| `type`                          | `PRODUCE`     |
| `quantity`                      | `null`        |
| `unitOfMeasureSymbol`           | `null`        |
| `lotIdOrName`                   | `null`        |
| `materialIdOrPath`              | `null`        |
| `destinationLocationIdOrPath`   | `null`        |
| `producingLotIdOrName`          | `null`        |
| `sourceLocationIdOrPath`        | `null`        |
| `createIfNotExists`             | `false`       |
| `operationId`                   | `null`        |
| `inventoryOperationId`          | `null`        |
| `productionOrderIdOrName`       | `null`        |
| `incrementProductionOrderCount` | `false`       |
| `materialReasonCodeId`          | `null`        |
| `startDate`                     | Current Time  |
| `endDate`                       | `null`        |
| `ongoing`                       | `false`       |
| `inventoryName`                 | `null`        |
| `notes`                         | `null`        |
| `spare1`                        | `null`        |
| `spare2`                        | `null`        |
| `spare3`                        | `null`        |

## Code Examples

```python
# Generate the object structure for a new produce request object with no initial arguments
new_request = system.mes.inventory.newProduceRequest()

# Set basic attributes for the new produce request
new_request['materialIdOrPath'] = 'Bottle/Milk'
new_request['destinationLocationIdOrPath'] = 'DairyCo'
new_request['quantity'] = 610
# (You can continue setting other properties as needed here)

# Produce the request
produced_request = system.mes.inventory.produce(**new_request)

# Output the JSON representation of the produced request
print(produced_request)
```
