---
sidebar_position: 38
title: "validateBillOfMaterials"
description: "Validates the specified parameters for a bill of materials."
---

# system.mes.productionOrder.validateBillOfMaterials

## Description

Validates the specified parameters for a [Production Order Bill of Materials](../../data-model/production-order-model/production-order-bill-of-material) record and returns any validation errors.
This only checks if the bill of materials object can be saved based on the attributes given.

## Syntax

```python
system.mes.productionOrder.validateBillOfMaterials(**bill_of_materials_data)
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

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new bill of materials object
bill_of_materials_data = system.mes.productionOrder.newBillOfMaterials()

# Set basic attributes for the new bill of materials
bill_of_materials_data['quantityOrder'] = 1000.0
bill_of_materials_data['materialGroup'] = 'CAN'
bill_of_materials_data['unitOfMeasureId'] = '01JCH3EPVP-1MNNDJTS-37Z75NGB'
bill_of_materials_data['materialId'] = '01JCH3ENGW-82KJDZDR-JHGYCXQN'
bill_of_materials_data['quantityPerProducedUnit'] = 10.0
# (You can continue setting other properties as needed here)

# Validate bill of materials parameters
validation_errors = system.mes.productionOrder.validateBillOfMaterials(**bill_of_materials_data)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Bill of materials parameters are valid.')
```
