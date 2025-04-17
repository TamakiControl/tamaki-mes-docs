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

| Parameter | Type            | Description                               |
| --------- | --------------- | ----------------------------------------- |
| `id`      | `String` (ULID) | The ID of the inventory lots to retrieve. |

## Returns

Returns a JSON representation of the inventory lot. Returns nothing if no inventory lot is found.

| Name              | Type            | Description                                                            |
| ----------------- | --------------- | ---------------------------------------------------------------------- |
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

## Code Examples

```python
# Retrieve a inventory lot by ID
lot = system.mes.inventory.getLot('01JE6F0CE9-T94PZD8R-TH9J01TJ')

# Output the inventory lot
print(lot)
```
