---
sidebar_position: 12
title: "newMoveRequest"
description: "Creates a new Move Request record to be formatted with attributes."
---

# system.mes.inventory.newMoveRequest

Creates a new Move Request record to be formatted with attributes.

## Syntax
```python
system.mes.inventory.newMoveRequest()
```

## Parameters

| Parameter | Type | Description                               |
|-----------|------|-------------------------------------------|
| None      | -    | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Move Request object. The following is a list of keys and default values:

| Key                              | Default Value    |
|----------------------------------|------------------|
| `type`                           | `MOVE`           |
| `quantity`                       | `null`           |
| `unitOfMeasureSymbol`            | `null`           |
| `lotIdOrName`                    | `null`           |
| `materialIdOrPath`               | `null`           |
| `sourceLocationIdOrPath`         | `null`           |
| `destinationLocationIdOrPath`    | `null`           |
| `operationId`                    | `null`           |
| `productionOrderIdOrName`        | `null`           |
| `materialReasonCodeId`           | `null`           |
| `startDate`                      | Current Time     |
| `endDate`                        | `null`           |
| `ongoing`                        | `false`          |
| `destinationInventoryName`       | `null`           |
| `notes`                          | `null`           |
| `spare1`                         | `null`           |
| `spare2`                         | `null`           |
| `spare3`                         | `null`           |

## Code Examples

```python
# Create a new move request instance with no initial arguments
new_request = system.mes.inventory.newMoveRequest()

# Set basic attributes for the new move request
new_request['materialIdOrPath'] = 'Bottle/Milk'
new_request['sourceLocationIdOrPath'] = 'DairyFarm'
new_request['destinationLocationIdOrPath'] = 'DairyCo'
new_request['quantity'] = 610
# (You can continue setting other properties as needed here)

# Move the request
moved_request = system.mes.inventory.move(**new_request)

# Output the JSON representation of the moved request
print(moved_request)
```