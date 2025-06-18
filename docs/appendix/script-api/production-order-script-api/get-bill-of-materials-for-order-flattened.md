---
sidebar_position: 36
title: "getBillOfMaterialsForOrderFlattened"
description: "Retrieves a flattened representation of all bill of materials records for a production order."
---

# system.mes.productionOrder.getBillOfMaterialsForOrderFlattened

## Description

Retrieves a flattened representation of all [Production Order Bill of Materials](../../data-model/production-order-model/production-order-bill-of-material) records associated with the given production order ID. This method flattens the bill of materials to a single level, no substitutions.

## Syntax

```python
system.mes.productionOrder.getBillOfMaterialsForOrderFlattened(productionOrderId)
```

## Parameters

| Parameter           | Type            | Description                                                                   |
|---------------------|-----------------|-------------------------------------------------------------------------------|
| `productionOrderId` | `String` (ULID) | The ULID of the production order to retrieve the flattened bill of materials. |

## Returns

Returns a list of flattened JSON objects representing the bill of materials associated with the given production order. Each object has the following properties:

| Name                       | Type            | Description                                                                |
|----------------------------|-----------------|----------------------------------------------------------------------------|
| `materialClassId`          | `String` (ULID) | The ULID of the material class associated with the material.               |
| `materialClassName`        | `String`        | The name of the material class associated with the material.               |
| `materialClassDescription` | `String`        | The description of the material class associated with the material.        |
| `materialDescription`      | `String`        | The description of the material that is a component of the produce.        |
| `productName`              | `String`        | The name of the product being produced.                                    |
| `productDescription`       | `String`        | The description of the product being produced.                             |
| `unitOfMeasureSymbol`      | `String`        | The symbol of the unit of measure for this bill of materials.              |
| `productionOrderName`      | `String`        | The name of the production order associated with this bill of materials.   |
| `subs`                     | `List<JSON>`    | List of sub-components related to this bill of materials item.             |
| `productId`                | `String` (ULID) | The ULID for the material to be produced.                          |
| `productionOrderId`        | `String` (ULID) | The ULID for the production order associated with this bill of materials.  |
| `materialName`             | `String`        | The name of the material that is a component of the produce.               |
| `materialId`               | `String` (ULID) | The ULID of the material that is a component of the produce.               |
| `quantityPerProducedUnit`  | `Double`        | The quantity of the material used per unit produced of the product.        |
| `quantityOrder`            | `Double`        | The quantity of the material used per order.                               |
| `unitOfMeasureId`          | `String` (ULID) | The ULID of the unit of measure for this bill of materials.                |
| `unitOfMeasureName`        | `String`        | The name of the unit of measure for this bill of materials.                |
| `position`                 | `Integer`       | The position of this bill of materials for the product.                    |
| `materialGroup`            | `String`        | The material group of the material associated with this bill of materials. |
| `materialType`             | `String`        | The material type of the material associated with this bill of materials.  |
| `id`                       | `String` (ULID) | The ULID of the bill of materials.                                         |
| `notes`                    | `String`        | Notes related to the bill of materials.                                    |
| `enabled`                  | `Boolean`       | Indicates if the bill of materials is active and enabled.                  |
| `spare1`                   | `String`        | Additional field for user-defined context.                                 |
| `spare2`                   | `String`        | Additional field for user-defined context.                                 |
| `spare3`                   | `String`        | Additional field for user-defined context.                                 |

## Code Examples

```python
# Retrieve the flattened bill of materials for a given production order
flattened_bill_of_materials = system.mes.productionOrder.getBillOfMaterialsForOrderFlattened('01JPMTA7K3-E8EHA4MD-7C304P4Z')

# Output the flattened bill of materials
print(flattened_bill_of_materials)
```
