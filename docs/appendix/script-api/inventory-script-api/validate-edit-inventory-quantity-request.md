---
sidebar_position: 32
title: "validateEditInventoryQuantityRequest"
description: "Validates the specified parameters for an edit inventory quantity request and returns any validation errors."
---

# system.mes.inventory.validateEditInventoryQuantityRequest

Validates the specified parameters for an edit inventory quantity request and returns any validation errors. This only checks if the quantity edit request can be processed based on the attributes given, without actually modifying the inventory quantity. Use this function to verify your parameters before executing the actual edit operation.

## Syntax

```python
system.mes.inventory.validateEditInventoryQuantityRequest(**edit_inventory_quantity_request)
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

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new edit inventory quantity request object with no initial arguments
edit_inventory_quantity_request = system.mes.inventory.newEditInventoryQuantityRequest()

# Set basic attributes for the new edit inventory quantity request
edit_inventory_quantity_request['materialIdOrPath'] = 'Bottle/Milk'
edit_inventory_quantity_request['sourceLocationIdOrPath'] = 'DairyCo'
edit_inventory_quantity_request['newQuantity'] = 610
# (You can continue setting other properties as needed here)

# Validate edit inventory quantity request parameters
validation_errors = system.mes.inventory.validateEditInventoryQuantityRequest(**edit_inventory_quantity_request)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Edit inventory quantity request parameters are valid.')
```
