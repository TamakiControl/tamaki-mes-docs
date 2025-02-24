---
sidebar_position: 55
title: "validateLot"
description: "Validates the specified parameters for an inventory lot."
---

# system.mes.inventory.validateLot

## Description

Validates the specified parameters for an [Inventory Lots](../../data-model/inventory-model/inventory-lot) record and returns any validation errors. 
This only checks if the inventory lot object can be saved based on the attributes given.

## Syntax
```python
system.mes.inventory.validateLot(**lot_data)
```

## Parameters

| Parameter          | Type            | Description                                                                            |
|--------------------|-----------------|----------------------------------------------------------------------------------------|
| `name`             | `String`        | The name of the inventory lot.                                                         |
| `materialId`       | `String` (ULID) | The ULID of the material associated with this inventory lot.                           |
| `status`           | `String`        | The status of the inventory lot.                                                       |
| `totalQuantity`    | `Double`        | The total quantity of material in the inventory lot.                                   |
| `unitOfMeasureId`  | `String` (ULID) | The ULID of the unit of measure for the quantity of the inventory lot.                 |
| `expirationDate`   | `Instant`       | The expected expiration date of the inventory lot.                                     |
| `closedDate`       | `Instant`       | The date that the inventory lot was closed.                                            |
| `supplierId`       | `String` (ULID) | The ULID of the supplier for the inventory lot.                                        |
| `id`               | `String` (ULID) | The ULID of the inventory lot (optional, used for updating an existing inventory lot). |
| `notes`            | `String`        | Notes related to the inventory lot.                                                    |
| `enabled`          | `Boolean`       | Indicates if the inventory lot is active and enabled.                                  |
| `spare1`           | `String`        | Additional field for user-defined context.                                             |
| `spare2`           | `String`        | Additional field for user-defined context.                                             |
| `spare3`           | `String`        | Additional field for user-defined context.                                             |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new inventory lot object
lot_data = system.mes.inventory.newLot()

# Set basic attributes for the new inventory lot
lot_data['name'] = 'L2824L9CO'
lot_data['materialId'] = '01JCH3GRA3-5ZYFZV5V-RW3FKFJX'
lot_data['unitOfMeasureId'] = '01JCH3T85P-KVCB8ZR5-0B83A3SX'
# (You can continue setting other properties as needed here)

# Validate inventory lot parameters
validation_errors = system.mes.inventory.validateLot(**lot_data)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Lot parameters are valid.')
```