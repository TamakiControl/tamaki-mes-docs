---
sidebar_position: 24
title: "newReturnRequest"
description: "Generates an empty return request to provide the structure to save a new record into the database."
---

# system.mes.inventory.newReturnRequest

Generates an empty Return Request to provide the structure required by the API to save a new record into the database.
This method must be combined with the [returnInventory](./return-inventory) method in order to persist the record.

## Syntax

```python
system.mes.inventory.newReturnRequest()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Return Request object. The following is a list of keys and default values:

| Key                       | Default Value |
|---------------------------|---------------|
| `type`                    | `RETURN`      |
| `quantity`                | `null`        |
| `unitOfMeasureSymbol`     | `null`        |
| `lotIdOrName`             | `null`        |
| `materialIdOrPath`        | `null`        |
| `sourceLocationIdOrPath`  | `null`        |
| `operationId`             | `null`        |
| `inventoryOperationId`    | `null`        |
| `productionOrderIdOrName` | `null`        |
| `materialReasonCodeId`    | `null`        |
| `startDate`               | Current Time  |
| `endDate`                 | `null`        |
| `ongoing`                 | `false`       |
| `inventoryName`           | `null`        |
| `notes`                   | `null`        |
| `spare1`                  | `null`        |
| `spare2`                  | `null`        |
| `spare3`                  | `null`        |

## Code Examples

```python
# Generate the object structure for a new return request object with no initial arguments
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
