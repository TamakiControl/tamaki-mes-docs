---
sidebar_position: 48
title: "saveLot"
description: "Creates or updates an inventory lot with specified parameters."
---

# system.mes.inventory.saveLot

## Description

Creates or updates an [Inventory Lots](../../data-model/inventory-model/inventory-lot) record in the system based on the provided parameters.

## Syntax

```python
system.mes.inventory.saveLot(**lotData)
```

## Parameters

| Parameter         | Type            | Nullable | Description                                                                             |
|-------------------|-----------------|----------|-----------------------------------------------------------------------------------------|
| `name`            | `String`        | False    | The name of the inventory lot.                                                          |
| `materialId`      | `String` (ULID) | False    | The ULID of the material associated with this inventory lot.                            |
| `status`          | `String`        | True     | The status of the inventory lot.                                                        |
| `totalQuantity`   | `Double`        | False    | The total quantity of material in the inventory lot. Must be greater than or equal to 0 |
| `unitOfMeasureId` | `String` (ULID) | False    | The ULID of the unit of measure for the quantity of the inventory lot.                  |
| `expirationDate`  | `Instant`       | True     | The expected expiration date of the inventory lot.                                      |
| `closedDate`      | `Instant`       | True     | The date that the inventory lot was closed.                                             |
| `supplierId`      | `String` (ULID) | True     | The ULID of the supplier for the inventory lot.                                         |
| `id`              | `String` (ULID) | True     | The ULID of the inventory lot (optional, used for updating an existing inventory lot).  |
| `notes`           | `String`        | True     | Notes related to the inventory lot.                                                     |
| `enabled`         | `Boolean`       | True     | Indicates if the inventory lot is active and enabled.                                   |
| `spare1`          | `String`        | True     | Additional field for user-defined context.                                              |
| `spare2`          | `String`        | True     | Additional field for user-defined context.                                              |
| `spare3`          | `String`        | True     | Additional field for user-defined context.                                              |

## Returns

Returns a JSON representation of the saved inventory lot.

## Code Examples

```python
# Generate the object structure for a new inventory lot object, set the initial arguments and save it
newLot = system.mes.inventory.newLot()
newLot['name'] = 'L2824L9CO'
newLot['materialId'] = '01JCH3GRA3-5ZYFZV5V-RW3FKFJX'
newLot['unitOfMeasureId'] = '01JCH3T85P-KVCB8ZR5-0B83A3SX'
savedLot = system.mes.inventory.saveLot(**newLot)

# Output the JSON representation of the saved inventory lot
print(savedLot)

# Generate the object structure for another new inventory lot object to update the previous inventory lot
lotData = system.mes.inventory.newLot()

# Set basic attributes for the updated inventory lot
lotData['id'] = savedLot.id
lotData['name'] = 'L2824L9CO'
lotData['materialId'] = '01JCH3GRA3-5ZYFZV5V-RW3FKFJX'
lotData['unitOfMeasureId'] = '01JCH3T85P-KVCB8ZR5-0B83A3SX'
lotData['totalQuantity'] = 100
# (You can continue setting other properties as needed here)

# Save the inventory lot to update it in the system
updatedLot = system.mes.inventory.saveLot(**lotData)

# Output the JSON representation of the updated inventory lot
print(updatedLot)
```
