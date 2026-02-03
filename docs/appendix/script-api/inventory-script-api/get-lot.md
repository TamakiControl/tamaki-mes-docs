---
sidebar_position: 50
title: "getLot"
description: "Retrieves the inventory lots with the given ID."
---

# system.mes.inventory.getLot

## Description

Retrieves an [Inventory Lots](../../data-model/inventory-model/inventory-lot) record by its ID.

## Syntax

```python
system.mes.inventory.getLot(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                               |
|-----------|-----------------|----------|-------------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the inventory lots to retrieve. |

## Returns

Returns a JSON representation of the inventory lot. Returns nothing if no inventory lot is found.

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
# Retrieve a inventory lot by ID
lot = system.mes.inventory.getLot('01JE6F0CE9-T94PZD8R-TH9J01TJ')

# Output the inventory lot
print(lot)
```
