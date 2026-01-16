---
sidebar_position: 53
title: "getLotsForMaterial"
description: "Retrieves all inventory lots for a specified material using its ID or path."
---

# system.mes.inventory.getLotsForMaterial

## Description

Retrieves a list of all [Inventory Lots](../../data-model/inventory-model/inventory-lot) records in the system for a specified material using its ID or path.

## Syntax

```python
system.mes.inventory.getLotsForMaterial(materialIdOrPath)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                         |
|--------------------|----------|----------|---------------------------------------------------------------------|
| `materialIdOrPath` | `String` | False    | The ID or path of the material associated with the inventory's lot. |

## Returns

Returns a list of JSON objects representing all inventory lots for a specified material.

| Name                    | Type            | Description                                                                                   |
|-------------------------|-----------------|-----------------------------------------------------------------------------------------------|
| `id`                    | String (ULID)   | Unique identifier for the inventory lot.                                                      |
| `notes`                 | String          | Notes associated with the inventory lot.                                                      |
| `enabled`               | Boolean         | Indicates whether the inventory lot is enabled (default: true).                               |
| `spare1`                | String          | Extra field 1 for additional context.                                                         |
| `spare2`                | String          | Extra field 2 for additional context.                                                         |
| `spare3`                | String          | Extra field 3 for additional context.                                                         |
| `name`                  | String          | The name of the inventory lot.                                                                |
| `materialId`            | String (ULID)   | The id of the material in the inventory lot.                                                  |
| `materialPath`          | String          | The path of the material in the inventory lot.                                                |
| `materialName`          | String          | The name of the material in the inventory lot.                                                |
| `materialQuantityFormat`| String          | The quantity format of the material in the inventory lot.                                     |
| `status`                | LotStatus       | The status of the inventory lot (default: OPEN).                                              |
| `totalQuantity`         | Double          | The total quantity of material added to the inventory lot (default: 0.0).                     |
| `unitOfMeasureId`       | String (ULID)   | The id of the unit of measure of the material in the inventory lot.                           |
| `unitOfMeasureName`     | String          | The name of the unit of measure of the material in the inventory lot.                         |
| `unitOfMeasureSymbol`   | String          | The symbol of the unit of measure of the material in the inventory lot.                       |
| `expirationDate`        | Instant         | The expected expiration date of the inventory lot.                                            |
| `closedDate`            | Instant         | The date that this inventory lot was closed.                                                  |
| `createdDate`           | Instant         | The date that this inventory lot was created.                                                 |

## Code Examples

```python
# Retrieve inventory lots for a material
lots_for_material = system.mes.inventory.getLotsForMaterial('Bottle/Milk')

# Output the inventory lots
print(lots_for_material)
```
