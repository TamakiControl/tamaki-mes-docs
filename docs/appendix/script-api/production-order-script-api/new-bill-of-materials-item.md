---
sidebar_position: 32
title: 'newBillOfMaterialsItem'
description: 'Generates an empty non-persisted bill of materials object to provide the structure to retrieve records from the database.'
---

# system.mes.productionOrder.newBillOfMaterialsItem

Generates an empty non-persisted [Production Order Bill of Materials](../../data-model/production-order-model/production-order-bill-of-material) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveBillOfMaterials](./save-bill-of-materials-item) method in order to persist the record.

## Permissions

This method does not require any permissions.

## Syntax

```python
system.mes.productionOrder.newBillOfMaterialsItem()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created bill of materials object. The following is a list of keys and default values:

| Key                       | Default Value |
| ------------------------- | ------------- |
| `productId`               | `null`        |
| `productionOrderId`       | `null`        |
| `materialName`            | `null`        |
| `materialId`              | `null`        |
| `quantityPerProducedUnit` | `null`        |
| `quantityOrder`           | `null`        |
| `unitOfMeasureId`         | `null`        |
| `unitOfMeasureName`       | `null`        |
| `position`                | `0`           |
| `materialGroup`           | `null`        |
| `materialType`            | `PRODUCT`     |
| `id`                      | `null`        |
| `notes`                   | `null`        |
| `enabled`                 | `true`        |
| `spare1`                  | `null`        |
| `spare2`                  | `null`        |
| `spare3`                  | `null`        |

## Code Examples

```python
# Generate the object structure for a new bill of materials object with no initial arguments
new_bill_of_materials = system.mes.productionOrder.newBillOfMaterialsItem()

# Set basic attributes for the new bill of materials
new_bill_of_materials['quantityOrder'] = 1000.0
new_bill_of_materials['materialGroup'] = 'CAN'
new_bill_of_materials['unitOfMeasureId'] = '01JCH3EPVP-1MNNDJTS-37Z75NGB'
new_bill_of_materials['materialId'] = '01JCH3ENGW-82KJDZDR-JHGYCXQN'
new_bill_of_materials['quantityPerProducedUnit'] = 10.0
# (You can continue setting other properties as needed here)

# Save the new bill of materials to the system
saved_bill_of_materials = system.mes.productionOrder.saveBillOfMaterialsItem(**new_bill_of_materials)

# Output the JSON representation of the saved bill of materials
print(saved_bill_of_materials)
```
