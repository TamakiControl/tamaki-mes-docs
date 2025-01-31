---
sidebar_position: 24
title: "newReturnRequest"
description: "Creates a new Return Request record to be formatted with attributes."
---

# system.mes.inventory.newReturnRequest

Creates a new Return Request record to be formatted with attributes.

## Syntax
```python
system.mes.inventory.newReturnRequest()
```

## Parameters

| Parameter | Type | Description                               |
|-----------|------|-------------------------------------------|
| None      | -    | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Return Request object. The following is a list of keys and default values:

| Key                            | Default Value    |
|--------------------------------|------------------|
| `type`                         | `RETURN`         |
| `quantity`                     | `null`           |
| `unitOfMeasureSymbol`          | `null`           |
| `lotIdOrName`                  | `null`           |
| `materialIdOrPath`             | `null`           |
| `sourceLocationIdOrPath`       | `null`           |
| `operationId`                  | `null`           |
| `productionOrderIdOrName`      | `null`           |
| `materialReasonCodeId`         | `null`           |
| `startDate`                    | Current Time     |
| `endDate`                      | `null`           |
| `ongoing`                      | `false`          |
| `inventoryName`                | `null`           |
| `notes`                        | `null`           |
| `spare1`                       | `null`           |
| `spare2`                       | `null`           |
| `spare3`                       | `null`           |

## Code Examples

```python
# Create a new return request instance with no initial arguments
new_request = system.mes.inventory.newReturnRequest()

# Set basic attributes for the new return request
new_request['materialIdOrPath'] = 'Bottle/Milk'
new_request['sourceLocationIdOrPath'] = 'DairyCo'
new_request['quantity'] = 610
# (You can continue setting other properties as needed here)

# Return the request
returned_request = system.mes.inventory.returnInventory(**new_request)

# Output the JSON representation of the returned request
print(returned_request)
```