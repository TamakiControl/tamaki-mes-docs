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

| Key               | Type            | Description                                                        | Default Value |
|-------------------|-----------------|--------------------------------------------------------------------|--------------|
| `name`            | String          | The name of the inventory lot.                                     | `null`       |
| `materialId`      | String (ULID)   | The id of the material in the inventory lot.                       | `null`       |
| `status`          | LotStatus       | The status of the inventory lot.                                   | `OPEN`       |
| `totalQuantity`   | Double          | The total quantity of material added to the inventory lot.         | `0.0`        |
| `unitOfMeasureId` | String (ULID)   | The id of the unit of measure of the material in the inventory lot.| `null`       |
| `expirationDate`  | Instant         | The expected expiration date of the inventory lot.                 | `null`       |
| `closedDate`      | Instant         | The date that this inventory lot was closed.                       | `null`       |
| `supplierId`      | String (ULID)   | The id of the supplier for the inventory lot.                      | `null`       |
| `id`              | String (ULID)   | Unique identifier for the inventory lot.                           | `null`       |
| `notes`           | String          | Notes associated with the inventory lot.                           | `null`       |
| `enabled`         | Boolean         | Indicates whether the inventory lot is enabled.                    | `true`       |
| `spare1`          | String          | Extra field 1 for additional context.                              | `null`       |
| `spare2`          | String          | Extra field 2 for additional context.                              | `null`       |
| `spare3`          | String          | Extra field 3 for additional context.                              | `null`       |

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
