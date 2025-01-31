---
sidebar_position: 36
title: "newShipRequest"
description: "Creates a new Ship Request record to be formatted with attributes."
---

# system.mes.inventory.newShipRequest

Creates a new Ship Request record to be formatted with attributes.

## Syntax
```python
system.mes.inventory.newShipRequest()
```

## Parameters

| Parameter | Type | Description                               |
|-----------|------|-------------------------------------------|
| None      | -    | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Ship Request object. The following is a list of keys and default values:

| Key                              | Default Value    |
|----------------------------------|------------------|
| `type`                           | `SHIP`           |
| `quantity`                       | `null`           |
| `unitOfMeasureSymbol`            | `null`           |
| `lotIdOrName`                    | `null`           |
| `materialIdOrPath`               | `null`           |
| `sourceLocationIdOrPath`         | `null`           |
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
# Create a new ship request instance with no initial arguments
new_request = system.mes.inventory.newShipRequest()

# Set basic attributes for the new ship request
new_request['materialIdOrPath'] = 'Bottle/Milk'
new_request['sourceLocationIdOrPath'] = 'DairyCo'
new_request['quantity'] = 610
# (You can continue setting other properties as needed here)

# Ship the request
shipped_request = system.mes.inventory.ship(**new_request)

# Output the JSON representation of the shipped request
print(shipped_request)
```