---
sidebar_position: 40
title: "setInventoryMetadata"
description: "Updates the metadata for a given inventory by its ID. This includes the notes and spare fields."
---

# system.mes.inventory.setInventoryMetadata

## Description

Updates the metadata for a given [Inventories](../../data-model/inventory-model/inventory) record by its ID. 
This includes the notes and spare fields.

## Syntax
```python
system.mes.inventory.setInventoryMetadata(inventoryId, notes, spare1, spare2, spare3, name, productionOrderId)
```

## Parameters

| Parameter           | Type            | Description                                                     |
|---------------------|-----------------|-----------------------------------------------------------------|
| `inventoryId`       | `String` (ULID) | The ID of the inventory to update.                              |
| `notes`             | `String`        | Notes related to the location property value.                   |
| `spare1`            | `String`        | Additional field for user-defined context.                      |
| `spare2`            | `String`        | Additional field for user-defined context.                      |
| `spare3`            | `String`        | Additional field for user-defined context.                      |
| `name`              | `String`        | The name of the inventory.                                      |
| `productionOrderId` | `String` (ULID) | The ID of the production order to associate with the inventory. |

## Returns

Returns a JSON representation of an inventory.

## Code Examples

```python
# Update the inventory metadata by inventory ID
updated_metadata = system.mes.inventory.setInventoryMetadata('DDFBVX9Z-01JDTF12WX-8277CPVM', None, '1732833681021216', None, None, None, None)

# Output the updated inventory
print(updated_metadata)
```