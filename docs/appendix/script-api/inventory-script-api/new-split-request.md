---
sidebar_position: 15
title: "newSplitRequest"
description: "Creates a new Split Request record to be formatted with attributes."
---

# system.mes.inventory.newSplitRequest

Creates a new Split Request record to be formatted with attributes.

## Syntax
```python
system.mes.inventory.newSplitRequest()
```

## Parameters

| Parameter | Type | Description                               |
|-----------|------|-------------------------------------------|
| None      | -    | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Split Request object. The following is a list of keys and default values:

| Key                              | Default Value    |
|----------------------------------|------------------|
| `type`                           | `SPLIT`          |
| `quantity`                       | `null`           |
| `unitOfMeasureSymbol`            | `null`           |
| `sourceLotId`                    | `null`           |
| `sourceLocationIdOrPath`         | `null`           |
| `destinationLotName`             | `null`           |
| `operationId`                    | `null`           |
| `productionOrderIdOrName`        | `null`           |
| `materialReasonCodeId`           | `null`           |
| `destinationInventoryName`       | `null`           |
| `notes`                          | `null`           |
| `spare1`                         | `null`           |
| `spare2`                         | `null`           |
| `spare3`                         | `null`           |

## Code Examples

```python
# Create a new split request instance with no initial arguments
new_request = system.mes.inventory.newSplitRequest()

# Set basic attributes for the new split request
new_request['sourceLocationIdOrPath'] = 'DairyCo'
new_request['sourceLotId'] = '01JJCQEJYG-E31FHVTF-JB6WEJTC'
new_request['destinationLotName'] = '5db685a7-2096-449a-b96c-effb3739e021'
new_request['quantity'] = 610
# (You can continue setting other properties as needed here)

# Split the request
split_request = system.mes.inventory.split(**new_request)

# Output the JSON representation of the split request
print(split_request)
```