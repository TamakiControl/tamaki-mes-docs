---
sidebar_position: 43
title: "getInventoryByLotAndLocation"
description: "Retrieves the inventory based on the inventory lot and location."
---

# system.mes.inventory.getInventoryByLotAndLocation

## Description

Retrieves the [Inventories](../../data-model/inventory-model/inventory) record based on the inventory lot and location.

## Syntax

```python
system.mes.inventory.getInventoryByLotAndLocation(lotIdOrName, materialIdOrPath, locationIdOrPath)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                         |
|--------------------|----------|----------|---------------------------------------------------------------------|
| `lotIdOrName`      | `String` | False    | The ID or name of the inventory lot associated with the inventory.  |
| `materialIdOrPath` | `String` | False    | The ID or path of the material associated with the inventory's lot. |
| `locationIdOrPath` | `String` | False    | The ID or path of the location associated with the inventory.       |

## Returns

Returns a JSON representation of an inventory with the following properties:

| Name                  | Type            | Description                                                                               |
| --------------------- | --------------- | ----------------------------------------------------------------------------------------- |
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
# Retrieve inventory at a lot and location
inventory_lot_location = system.mes.inventory.getInventoryByLotAndLocation('425e29ed-2780-430a-95cf-79431ec0e3e5', 'Bottle/Milk', 'DairyCo')

# Output the inventory
print(inventory_lot_location)
```
