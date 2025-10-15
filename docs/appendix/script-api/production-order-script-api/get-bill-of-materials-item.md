---
sidebar_position: 34
title: "getBillOfMaterialsItem"
description: "Retrieves the bill of materials with the given ID."
---

# system.mes.productionOrder.getBillOfMaterialsItem

## Description

Retrieves a [Production Order Bill of Materials](../../data-model/production-order-model/production-order-bill-of-material) record by its ID.


## Permissions

This method requires the `PRODUCTION_ORDER.READ.GET` permission.

## Syntax

```python
system.mes.productionOrder.getBillOfMaterialsItem(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                                  |
|-----------|-----------------|----------|----------------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the bill of materials to retrieve. |

## Returns

Returns a JSON representation of the bill of materials. Returns nothing if no bill of materials is found.

| Name                      | Type            | Description                                                                |
|---------------------------|-----------------|----------------------------------------------------------------------------|
| `productId`               | `String` (ULID) | The ULID for the material produce to be produced.                          |
| `productionOrderId`       | `String` (ULID) | The ULID for the production order associated with this bill of materials.  |
| `materialName`            | `String`        | The name of the material that is a component of the produce.               |
| `materialId`              | `String` (ULID) | The ULID of the material that is a component of the produce.               |
| `quantityPerProducedUnit` | `Double`        | The quantity of the material used per unit produced of the product.        |
| `quantityOrder`           | `Double`        | The quantity of the material used per order.                               |
| `unitOfMeasureId`         | `String` (ULID) | The ULID of the unit of measure for this bill of materials.                |
| `unitOfMeasureName`       | `String`        | The name of the unit of measure for this bill of materials.                |
| `position`                | `Integer`       | The position of this bill of materials for the product.                    |
| `materialGroup`           | `String`        | The material group of the material associated with this bill of materials. |
| `materialType`            | `String`        | The material type of the material associated with this bill of materials.  |
| `id`                      | `String` (ULID) | The ULID of the bill of materials.                                         |
| `notes`                   | `String`        | Notes related to the bill of materials.                                    |
| `enabled`                 | `Boolean`       | Indicates if the bill of materials is active and enabled.                  |
| `spare1`                  | `String`        | Additional field for user-defined context.                                 |
| `spare2`                  | `String`        | Additional field for user-defined context.                                 |
| `spare3`                  | `String`        | Additional field for user-defined context.                                 |

## Code Examples

```python
# Retrieve a bill of materials by ID
bill_of_materials = system.mes.productionOrder.getBillOfMaterialsItem('01JQ31CZMB-E7QA782B-5B521H4M')

# Output the bill of materials
print(bill_of_materials)
```
