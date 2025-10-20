---
sidebar_position: 40
title: "setInventoryMetadata"
description: "Updates the metadata for a given inventory by its ID. This includes the notes and spare fields."
---

# system.mes.inventory.setInventoryMetadata

## Description

Updates the metadata for a given [Inventories](../../data-model/inventory-model/inventory) record by its ID.
This includes the notes and spare fields.


## Permissions

This method requires the `INVENTORY.WRITE.SAVE` permission.

## Syntax

```python
system.mes.inventory.setInventoryMetadata(inventoryId, notes, spare1, spare2, spare3, name, productionOrderIdOrName)
```

## Parameters

| Parameter                 | Type            | Nullable | Description                                                             |
|---------------------------|-----------------|----------|-------------------------------------------------------------------------|
| `inventoryId`             | `String` (ULID) | False    | The ID of the inventory to update.                                      |
| `notes`                   | `String`        | True     | Notes related to the location property value.                           |
| `spare1`                  | `String`        | True     | Additional field for user-defined context.                              |
| `spare2`                  | `String`        | True     | Additional field for user-defined context.                              |
| `spare3`                  | `String`        | True     | Additional field for user-defined context.                              |
| `name`                    | `String`        | True     | The name of the inventory.                                              |
| `productionOrderIdOrName` | `String`        | True     | The ID or Name of the production order to associate with the inventory. |

## Returns

Returns a JSON representation of an inventory.

## Code Examples

```python
# Update the inventory metadata by inventory ID
updated_metadata = system.mes.inventory.setInventoryMetadata('DDFBVX9Z-01JDTF12WX-8277CPVM', None, '1732833681021216', None, None, None, None)

# Output the updated inventory
print(updated_metadata)
```
