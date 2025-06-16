---
sidebar_position: 33
title: "saveBillOfMaterialsItem"
description: "Creates or updates a bill of materials with specified parameters."
---

# system.mes.productionOrder.saveBillOfMaterialsItem

## Description

Creates or updates a [Production Order Bill of Materials](../../data-model/production-order-model/production-order-bill-of-material) record in the system based on the provided parameters.

## Syntax

```python
system.mes.productionOrder.saveBillOfMaterialsItem(**bill_of_materials_data)
```

## Parameters

| Parameter                 | Type            | Description                                                                                    |
| ------------------------- | --------------- | ---------------------------------------------------------------------------------------------- |
| `productId`               | `String` (ULID) | The ULID for the material produce to be produced.                                              |
| `productionOrderId`       | `String` (ULID) | The ULID for the production order associated with this bill of materials.                      |
| `materialName`            | `String`        | The name of the material that is a component of the produce.                                   |
| `materialId`              | `String` (ULID) | The ULID of the material that is a component of the produce.                                   |
| `quantityPerProducedUnit` | `Double`        | The quantity of the material used per unit produced of the product.                            |
| `quantityOrder`           | `Double`        | The quantity of the material used per order.                                                   |
| `unitOfMeasureId`         | `String` (ULID) | The ULID of the unit of measure for this bill of materials.                                    |
| `unitOfMeasureName`       | `String`        | The name of the unit of measure for this bill of materials.                                    |
| `position`                | `Integer`       | The position of this bill of materials for the product.                                        |
| `materialGroup`           | `String`        | The material group of the material associated with this bill of materials.                     |
| `materialType`            | `String`        | The material type of the material associated with this bill of materials.                      |
| `id`                      | `String` (ULID) | The ULID of the bill of materials (optional, used for updating an existing bill of materials). |
| `notes`                   | `String`        | Notes related to the bill of materials.                                                        |
| `enabled`                 | `Boolean`       | Indicates if the bill of materials is active and enabled.                                      |
| `spare1`                  | `String`        | Additional field for user-defined context.                                                     |
| `spare2`                  | `String`        | Additional field for user-defined context.                                                     |
| `spare3`                  | `String`        | Additional field for user-defined context.                                                     |

## Returns

Returns a JSON representation of the saved bill of materials.

## Code Examples

```python
# Generate the object structure for a new bill of materials object, set the initial arguments and save it
new_bill_of_materials = system.mes.productionOrder.newBillOfMaterialsItem()
new_bill_of_materials['quantityOrder'] = 1000.0
new_bill_of_materials['materialGroup'] = 'CAN'
new_bill_of_materials['unitOfMeasureId'] = '01JCH3EPVP-1MNNDJTS-37Z75NGB'
new_bill_of_materials['materialId'] = '01JCH3ENGW-82KJDZDR-JHGYCXQN'
new_bill_of_materials['quantityPerProducedUnit'] = 10.0
saved_bill_of_materials = system.mes.productionOrder.saveBillOfMaterialsItem(**new_bill_of_materials)

# Output the JSON representation of the saved bill of materials
print(saved_bill_of_materials)

# Generate the object structure for another new bill of materials to update the previous bill of materials
bill_of_materials_data = system.mes.productionOrder.newBillOfMaterialsItem()

# Set basic attributes for the updated bill of materials
bill_of_materials_data['id'] = saved_bill_of_materials.id
bill_of_materials_data['quantityOrder'] = 1000.0
bill_of_materials_data['materialGroup'] = 'CAN'
bill_of_materials_data['unitOfMeasureId'] = '01JCH3EPVP-1MNNDJTS-37Z75NGB'
bill_of_materials_data['materialId'] = '01JCH3ENGW-82KJDZDR-JHGYCXQN'
bill_of_materials_data['quantityPerProducedUnit'] = 10.0
bill_of_materials_data['position'] = 1
# (You can continue setting other properties as needed here)

# Save the bill of materials to update it in the system
updated_bill_of_materials = system.mes.productionOrder.saveBillOfMaterialsItem(**bill_of_materials_data)

# Output the JSON representation of the updated bill of materials
print(updated_bill_of_materials)
```
