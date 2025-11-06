---
sidebar_position: 30
title: "newEditInventoryQuantityRequest"
description: "Generates an empty edit inventory quantity request to provide the structure to save a new record into the database."
---

# system.mes.inventory.newEditInventoryQuantityRequest

Generates an empty Edit Inventory Quantity Request to provide the structure required by the API to save a new record into the database.
This method must be combined with the [editInventoryQuantity](./edit-inventory-quantity) method in order to persist the record.

## Syntax

```python
system.mes.inventory.newEditInventoryQuantityRequest()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Edit Inventory Quantity Request object. The following is a list of keys and default values:

| Key                      | Default Value |
|--------------------------|---------------|
| `type`                   | `EDIT`        |
| `newQuantity`            | `null`        |
| `unitOfMeasureSymbol`    | `null`        |
| `lotIdOrName`            | `null`        |
| `materialIdOrPath`       | `null`        |
| `sourceLocationIdOrPath` | `null`        |
| `operationId`            | `null`        |
| `inventoryOperationId`   | `null`        |
| `notes`                  | `null`        |
| `spare1`                 | `null`        |
| `spare2`                 | `null`        |
| `spare3`                 | `null`        |

## Code Examples

```python
# Generate the object structure for a new edit inventory quantity request object with no initial arguments
newRequest = system.mes.inventory.newEditInventoryQuantityRequest()

# Set basic attributes for the new edit inventory quantity request
newRequest['materialIdOrPath'] = 'Bottle/Milk'
newRequest['sourceLocationIdOrPath'] = 'DairyCo'
newRequest['newQuantity'] = 610
# (You can continue setting other properties as needed here)

# Edit the quantity of the inventory
editedInventoryQuantityRequest = system.mes.inventory.editInventoryQuantity(**newRequest)

# Output the JSON representation of the edit inventory quantity request
print(editedInventoryQuantityRequest)
```
