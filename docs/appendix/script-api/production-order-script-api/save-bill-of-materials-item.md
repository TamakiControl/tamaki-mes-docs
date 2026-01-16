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
system.mes.productionOrder.saveBillOfMaterialsItem(**billOfMaterialsData)
```

## Parameters

| Parameter                 | Type            | Nullable | Description                                                                                          |
|---------------------------|-----------------|----------|------------------------------------------------------------------------------------------------------|
| `productId`               | `String` (ULID) | False    | The ULID for the material produce to be produced.                                                    |
| `productionOrderId`       | `String` (ULID) | False    | The ULID for the production order associated with this bill of materials.                            |
| `materialName`            | `String`        | True     | The name of the material that is a component of the produce.                                         |
| `materialId`              | `String` (ULID) | False    | The ULID of the material that is a component of the produce.                                         |
| `quantityPerProducedUnit` | `Double`        | False    | The quantity of the material used per unit produced of the product.                                  |
| `quantityOrder`           | `Double`        | False    | The quantity of the material used per order.                                                         |
| `unitOfMeasureId`         | `String` (ULID) | False    | The ULID of the unit of measure for this bill of materials.                                          |
| `unitOfMeasureName`       | `String`        | True     | The name of the unit of measure for this bill of materials.                                          |
| `position`                | `Integer`       | False    | The position of this bill of materials for the product. Default value is `0`                         |
| `materialGroup`           | `String`        | False    | The material group of the material associated with this bill of materials.                           |
| `materialType`            | `String`        | False    | The material type of the material associated with this bill of materials. Default value is `PRODUCT` |
| `id`                      | `String` (ULID) | True     | The ULID of the bill of materials (optional, used for updating an existing bill of materials).       |
| `notes`                   | `String`        | True     | Notes related to the bill of materials.                                                              |
| `enabled`                 | `Boolean`       | True     | Indicates if the bill of materials is active and enabled. Default value is `true`                    |
| `spare1`                  | `String`        | True     | Additional field for user-defined context.                                                           |
| `spare2`                  | `String`        | True     | Additional field for user-defined context.                                                           |
| `spare3`                  | `String`        | True     | Additional field for user-defined context.                                                           |

## Returns

Returns a JSON representation of the saved bill of materials.

## Code Examples

```python
# Generate the object structure for a new bill of materials object, set the initial arguments and save it
newBillOfMaterials = system.mes.productionOrder.newBillOfMaterialsItem()
newBillOfMaterials['quantityOrder'] = 1000.0
newBillOfMaterials['materialGroup'] = 'CAN'
newBillOfMaterials['unitOfMeasureId'] = '01JCH3EPVP-1MNNDJTS-37Z75NGB'
newBillOfMaterials['materialId'] = '01JCH3ENGW-82KJDZDR-JHGYCXQN'
newBillOfMaterials['quantityPerProducedUnit'] = 10.0
savedBillOfMaterials = system.mes.productionOrder.saveBillOfMaterialsItem(**newBillOfMaterials)

# Output the JSON representation of the saved bill of materials
print(savedBillOfMaterials)

# Generate the object structure for another new bill of materials to update the previous bill of materials
billOfMaterialsData = system.mes.productionOrder.newBillOfMaterialsItem()

# Set basic attributes for the updated bill of materials
billOfMaterialsData['id'] = savedBillOfMaterials.id
billOfMaterialsData['quantityOrder'] = 1000.0
billOfMaterialsData['materialGroup'] = 'CAN'
billOfMaterialsData['unitOfMeasureId'] = '01JCH3EPVP-1MNNDJTS-37Z75NGB'
billOfMaterialsData['materialId'] = '01JCH3ENGW-82KJDZDR-JHGYCXQN'
billOfMaterialsData['quantityPerProducedUnit'] = 10.0
billOfMaterialsData['position'] = 1
# (You can continue setting other properties as needed here)

# Save the bill of materials to update it in the system
updatedBillOfMaterials = system.mes.productionOrder.saveBillOfMaterialsItem(**billOfMaterialsData)

# Output the JSON representation of the updated bill of materials
print(updatedBillOfMaterials)
```
