---
sidebar_position: 30
title: "newEditInventoryQuantityRequest"
description: "Creates a new Edit Inventory Quantity Request record to be formatted with attributes."
---

# system.mes.inventory.newEditInventoryQuantityRequest

Creates a new Edit Inventory Quantity Request record to be formatted with attributes.

## Syntax
```python
system.mes.inventory.newEditInventoryQuantityRequest()
```

## Parameters

| Parameter | Type | Description                               |
|-----------|------|-------------------------------------------|
| None      | -    | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Edit Inventory Quantity Request object. The following is a list of keys and default values:

| Key                              | Default Value    |
|----------------------------------|------------------|
| `type`                           | `EDIT`           |
| `newQuantity`                    | `null`           |
| `unitOfMeasureSymbol`            | `null`           |
| `lotIdOrName`                    | `null`           |
| `materialIdOrPath`               | `null`           |
| `sourceLocationIdOrPath`         | `null`           |
| `operationId`                    | `null`           |
| `notes`                          | `null`           |
| `spare1`                         | `null`           |
| `spare2`                         | `null`           |
| `spare3`                         | `null`           |

## Code Examples

```python
# Create a new edit inventory quantity request instance with no initial arguments
new_request = system.mes.inventory.newEditInventoryQuantityRequest()

# Set basic attributes for the new edit inventory quantity request
new_request['materialIdOrPath'] = 'Bottle/Milk'
new_request['sourceLocationIdOrPath'] = 'DairyCo'
new_request['newQuantity'] = 610
# (You can continue setting other properties as needed here)

# Edit the quantity of the inventory
edited_inventory_quantity_request = system.mes.inventory.editInventoryQuantity(**new_request)

# Output the JSON representation of the edit inventory quantity request
print(edited_inventory_quantity_request)
```