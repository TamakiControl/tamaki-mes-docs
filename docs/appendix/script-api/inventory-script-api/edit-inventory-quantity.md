---
sidebar_position: 31
title: "editInventoryQuantity"
description: "Edit inventory quantity from the MES based on the provided parameters."
---

# system.mes.inventory.editInventoryQuantity

Edit inventory quantity from the MES based on the provided parameters.

## Syntax

```python
system.mes.inventory.editInventoryQuantity(**edit_inventory_quantity_request)
```

## Parameters

| Parameter                | Type            | Description                                                                                                                               |
| ------------------------ | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                   | `String`        | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `newQuantity`            | `Double`        | The new quantity to be assigned to the inventory.                                                                                         |
| `unitOfMeasureSymbol`    | `String`        | The symbol of the unit of measure for the quantity.                                                                                       |
| `lotIdOrName`            | `String`        | The ID or name of the inventory lot whose quantity is being edited.                                                                       |
| `materialIdOrPath`       | `String`        | The ID or path of the material whose quantity is being edited.                                                                            |
| `sourceLocationIdOrPath` | `String`        | The ID or path of the location from the inventory quantity is being edited.                                                               |
| `operationId`            | `String` (ULID) | The ID of the operation editing the quantity of this inventory.                                                                           |
| `notes`                  | `String`        | Notes related to the edit inventory quantity request.                                                                                     |
| `spare1`                 | `String`        | Additional field for user-defined context.                                                                                                |
| `spare2`                 | `String`        | Additional field for user-defined context.                                                                                                |
| `spare3`                 | `String`        | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON representation of an inventory lot record for an Edit Inventory Quantity Request.

## Code Examples

```python
# Generate the object structure for a new edit inventory quantity request object with no initial arguments
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
