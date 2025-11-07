---
sidebar_position: 51
title: "getLotByIdOrNameAndMaterial"
description: "Retrieves an inventory lots record by its ID or name and by the material ID or path. If no material ID or path is provided, retrieves an inventory lots record by its ID or name."
---

# system.mes.inventory.getLotByIdOrNameAndMaterial

## Description

Retrieves an [Inventory Lots](../../data-model/inventory-model/inventory-lot) record by its ID or name and by the material ID or path.
If no material ID or path is provided, retrieves an [Inventory Lots](../../data-model/inventory-model/inventory-lot) record by its ID or name.

## Syntax

```python
system.mes.inventory.getLotByIdOrNameAndMaterial(idOrName, materialIdOrPath)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                         |
|--------------------|----------|----------|---------------------------------------------------------------------|
| `idOrName`         | `String` | False    | The ID or name of the inventory lot associated with the inventory.  |
| `materialIdOrPath` | `String` | True     | The ID or path of the material associated with the inventory's lot. |

## Returns

Returns a JSON representation of an inventory lot with the following properties:

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

## Example Usage

```python
# Retrieve inventory lot by name and material
lot_by_name_and_material = system.mes.inventory.getLotByIdOrNameAndMaterial('21220', 'Bottle/Milk')

# Output the inventory lot
print(lot_by_name_and_material)
```
