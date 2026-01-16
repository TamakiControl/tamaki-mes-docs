---
sidebar_position: 52
title: "getAllLots"
description: "Retrieves all inventory lots."
---

# system.mes.inventory.getAllLots

## Description

Retrieves a list of all [Inventory Lots](../../data-model/inventory-model/inventory-lot) records in the system.

## Syntax

```python
system.mes.inventory.getAllLots()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a list of JSON objects representing all inventory lots.

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
# Retrieve all inventory lots
all_lots = system.mes.inventory.getAllLots()

# Output the list of inventory lots
print(all_lots)
```
