---
sidebar_position: 21
title: "newScrapRequest"
description: "Creates a new Scrap Request record to be formatted with attributes."
---

# system.mes.inventory.newScrapRequest

Creates a new Scrap Request record to be formatted with attributes.

## Syntax
```python
system.mes.inventory.newScrapRequest()
```

## Parameters

| Parameter | Type | Description                               |
|-----------|------|-------------------------------------------|
| None      | -    | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Scrap Request object. The following is a list of keys and default values:

| Key                              | Default Value    |
|----------------------------------|------------------|
| `type`                           | `SCRAP`          |
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
# Create a new scrap request instance with no initial arguments
new_request = system.mes.inventory.newScrapRequest()

# Set basic attributes for the new scrap request
new_request['materialIdOrPath'] = 'Bottle/Milk'
new_request['sourceLocationIdOrPath'] = 'DairyCo'
new_request['quantity'] = 610
# (You can continue setting other properties as needed here)

# Scrap the request
scrapped_request = system.mes.inventory.scrap(**new_request)

# Output the JSON representation of the scrapped request
print(scrapped_request)
```