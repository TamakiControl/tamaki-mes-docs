---
sidebar_position: 47
title: "newLot"
description: "Generates an empty non-persisted inventory lot object to provide the structure to retrieve records from the database."
---

# system.mes.inventory.newLot

Generates an empty non-persisted [Inventory Lots](../../data-model/inventory-model/inventory-lot) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveLot](./save-lot) method in order to persist the record.

## Syntax

```python
system.mes.inventory.newLot()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Inventory Lot object. The following is a list of keys and default values:

| Key               | Default Value |
|-------------------|--------------|
| `name`            | `null`       |
| `materialId`      | `null`       |
| `status`          | `OPEN`       |
| `totalQuantity`   | `0.0`        |
| `unitOfMeasureId` | `null`       |
| `expirationDate`  | `null`       |
| `closedDate`      | `null`       |
| `supplierId`      | `null`       |
| `id`              | `null`       |
| `notes`           | `null`       |
| `enabled`         | `true`       |
| `spare1`          | `null`       |
| `spare2`          | `null`       |
| `spare3`          | `null`       |

## Code Examples

```python
# Generate the object structure for a new inventory lot object with no initial arguments
newLot = system.mes.inventory.newLot()

# Set basic attributes for the new inventory lot
newLot['name'] = 'L2824L9CO'
newLot['materialId'] = '01JCH3GRA3-5ZYFZV5V-RW3FKFJX'
newLot['unitOfMeasureId'] = '01JCH3T85P-KVCB8ZR5-0B83A3SX'
# (You can continue setting other properties as needed here)

# Save the new inventory lot to the system
savedLot = system.mes.inventory.saveLot(**newLot)

# Output the JSON representation of the saved inventory lot
print(savedLot)
```
