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

Returns a JSON representation of an inventory with the following properties:

| Name              | Type            | Description                                                            |
|-------------------|-----------------|------------------------------------------------------------------------|
| `name`            | `String`        | The name of the inventory lot.                                         |
| `materialId`      | `String` (ULID) | The ULID of the material associated with this inventory lot.           |
| `status`          | `String`        | The status of the inventory lot.                                       |
| `totalQuantity`   | `Double`        | The total quantity of material in the inventory lot.                   |
| `unitOfMeasureId` | `String` (ULID) | The ULID of the unit of measure for the quantity of the inventory lot. |
| `expirationDate`  | `Instant`       | The expected expiration date of the inventory lot.                     |
| `closedDate`      | `Instant`       | The date that the inventory lot was closed.                            |
| `supplierId`      | `String` (ULID) | The ULID of the supplier for the inventory lot.                        |
| `id`              | `String` (ULID) | The ULID of the inventory lot.                                         |
| `notes`           | `String`        | Notes related to the inventory lot.                                    |
| `enabled`         | `Boolean`       | Indicates if the inventory lot is active and enabled.                  |
| `spare1`          | `String`        | Additional field for user-defined context.                             |
| `spare2`          | `String`        | Additional field for user-defined context.                             |
| `spare3`          | `String`        | Additional field for user-defined context.                             |

## Example Usage

```python
# Retrieve inventory lot by name and material
lot_by_name_and_material = system.mes.inventory.getLotByIdOrNameAndMaterial('21220', 'Bottle/Milk')

# Output the inventory lot
print(lot_by_name_and_material)
```
