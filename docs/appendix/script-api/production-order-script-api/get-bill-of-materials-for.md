---
sidebar_position: 36
title: "getBillOfMaterialsFor"
description: "Retrieves the bill of materials given a production order object and a material object."
---

# system.mes.productionOrder.getBillOfMaterialsFor

## Description

Retrieves the [Production Order Bill of Materials](../../data-model/production-order-model/production-order-bill-of-material) record associated with a production order ID or name and a material ID or path.

## Syntax

```python
system.mes.productionOrder.getBillOfMaterialsFor(productionOrderIdOrName, materialIdOrPath)
```

## Parameters

| Parameter                 | Type      | Nullable | Description                                                                     |
|---------------------------|-----------|----------|---------------------------------------------------------------------------------|
| `productionOrderIdOrName` | `String`  | False    | The ULID or name of the production order associated with the bill of materials. |
| `materialIdOrPath`        | `String`  | False    | The ULID or path of the material associated with the bill of materials.         |

## Returns

Returns a JSON representation of the bill of materials associated with the given production order and material.

## Code Examples

```python
# Retrieves the bill of materials for a given production order ID or name and material ID or path
billOfMaterials = system.mes.productionOrder.getBillOfMaterialsFor('01JPMTA7K3-E8EHA4MD-7C304P4Z', '01JCH3ENGW-82KJDZDR-JHGYCXQN')

# Output the bill of materials
print(billOfMaterials)
```
