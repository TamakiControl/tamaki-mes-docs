---
sidebar_position: 6
title: "newUnconsumeRequest"
description: "Generates an empty non-persisted unconsume request to provide the structure to save a new record into the database."
---

# system.mes.inventory.newConsumeRequest

Generates an empty non-persisted Unconsume Request to provide the structure required by the API to save a new record into the database.
This method must be combined with the [unconsume](./unconsume) method in order to persist the record.

## Syntax

```python
system.mes.inventory.newUnconsumeRequest()
```

## Parameters

| Parameter | Type | Description                               |
| --------- | ---- | ----------------------------------------- |
| None      | -    | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Unconsume Request object. The following is a list of keys and default values:

| Key                           | Default Value |
| ----------------------------- | ------------- |
| `type`                        | `UNCONSUME`   |
| `quantity`                    | `null`        |
| `unitOfMeasureSymbol`         | `null`        |
| `lotIdOrName`                 | `null`        |
| `materialIdOrPath`            | `null`        |
| `destinationLocationIdOrPath` | `null`        |
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
# Generate the object structure for a new unconsume request object with no initial arguments
new_request = system.mes.inventory.newUnconsumeRequest()

# Set basic attributes for the new unconsume request
new_request['materialIdOrPath'] = 'Bottle/Milk'
new_request['destinationLocationIdOrPath'] = 'DairyCo'
new_request['quantity'] = 610
# (You can continue setting other properties as needed here)

# Unconsume the request
unconsumed_request = system.mes.inventory.unconsume(**new_request)

# Output the JSON representation of the unconsumed request
print(unconsumed_request)
```
