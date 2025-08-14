---
sidebar_position: 42
title: "getInventoryForMaterial"
description: "Retrieves all inventory for a specific material."
---

# system.mes.inventory.getInventoryForMaterial

## Description

Retrieves the [Inventories](../../data-model/inventory-model/inventory) records for a specific material.

## Syntax

```python
system.mes.inventory.getInventoryForMaterial(materialIdOrPath)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                         |
|--------------------|----------|----------|---------------------------------------------------------------------|
| `materialIdOrPath` | `String` | False    | The ID or path of the material associated with the inventory's lot. |

## Returns

Returns a list of JSON objects representing all inventories for a specific material.
Each JSON object has the following properties:

| Name                  | Type            | Description                                                                               |
|-----------------------|-----------------|-------------------------------------------------------------------------------------------|
| `locationId`          | `String` (ULID) | The ULID of the storage location of the inventory.                                        |
| `locationPath`        | `String`        | The path of the storage location of the inventory.                                        |
| `lotId`               | `String` (ULID) | The ULID of the inventory lot.                                                            |
| `lotName`             | `String`        | The name of the inventory lot.                                                            |
| `lotStatus`           | `String`        | The status of the inventory lot (e.g OPEN, AVAILABLE, QA_HOLD, EXPIRED, SHIPPED, CLOSED). |
| `quantity`            | `Double`        | The current quantity of material in the inventory.                                        |
| `unitOfMeasureId`     | `String` (ULID) | The ULID of the unit of measure associated with the material.                             |
| `unitOfMeasureName`   | `String`        | The name of the unit of measure associated with the material.                             |
| `name`                | `String`        | The name of the inventory.                                                                |
| `productionOrderId`   | `String` (ULID) | The ULID of the production order associated with the inventory.                           |
| `productionOrderName` | `String`        | The name of the production order associated with the inventory.                           |
| `materialId`          | `String` (ULID) | The ULID of the material associated with the inventory's lot.                             |
| `materialPath`        | `String`        | The path of the material associated with the inventory's lot.                             |
| `materialDescription` | `String`        | The description of the material associated with the inventory's lot.                      |
| `materialImage`       | `Byte[]`        | The image of the material associated with the inventory's lot.                            |
| `materialClassId`     | `String` (ULID) | The ULID of the material class associated with the inventory's lot.                       |
| `materialClassPath`   | `String`        | The path of the material class associated with the inventory's lot.                       |
| `id`                  | `String` (ULID) | The ULID of the inventory.                                                                |
| `notes`               | `String`        | Notes related to the inventory.                                                           |
| `enabled`             | `Boolean`       | Indicates if the inventory is active and enabled.                                         |
| `spare1`              | `String`        | Additional field for user-defined context.                                                |
| `spare2`              | `String`        | Additional field for user-defined context.                                                |
| `spare3`              | `String`        | Additional field for user-defined context.                                                |

## Example Usage

```python
# Retrieve inventory for a material
inventory_for_material = system.mes.inventory.getInventoryForMaterial('Bottle/Milk')

# Output the list of inventories
print(inventory_for_material)
```
