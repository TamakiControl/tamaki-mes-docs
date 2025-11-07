---
sidebar_position: 31
title: "editInventoryQuantity"
description: "Edit inventory quantity from the MES based on the provided parameters."
---

# system.mes.inventory.editInventoryQuantity

Edit inventory quantity from the MES based on the provided parameters.

## Syntax

```python
system.mes.inventory.editInventoryQuantity(**editInventoryQuantityRequest)
```

## Parameters

| Parameter                | Type            | Nullable | Description                                                                                                                               |
|--------------------------|-----------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                   | `String`        | True     | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `newQuantity`            | `Double`        | False    | The new quantity to be assigned to the inventory.                                                                                         |
| `unitOfMeasureSymbol`    | `String`        | True     | The symbol of the unit of measure for the quantity.                                                                                       |
| `lotIdOrName`            | `String`        | True     | The ID or name of the inventory lot whose quantity is being edited.                                                                       |
| `materialIdOrPath`       | `String`        | False    | The ID or path of the material whose quantity is being edited.                                                                            |
| `sourceLocationIdOrPath` | `String`        | False    | The ID or path of the location from the inventory quantity is being edited.                                                               |
| `operationId`            | `String` (ULID) | True     | The ID of the operation editing the quantity of this inventory.                                                                           |
| `inventoryOperationId`   | `String` (ULID) | True     | The ID of the inventory operation related to this edit inventory quantity action.                                                         |
| `notes`                  | `String`        | True     | Notes related to the edit inventory quantity request.                                                                                     |
| `spare1`                 | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare2`                 | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare3`                 | `String`        | True     | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON representation of an inventory lot record for an Edit Inventory Quantity Request.

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
