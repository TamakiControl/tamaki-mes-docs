---
sidebar_position: 58
title: "newInventoryLotRecord"
description: "Generates an empty non-persisted inventory lot record object to provide the structure to retrieve records from the database."
---

# system.mes.inventory.newInventoryLotRecord

Generates an empty non-persisted [Inventory Lot Records](../../data-model/inventory-model/inventory-lot-record) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveInventoryLotRecord](./save-inventory-lot-record) method in order to persist the record.

## Syntax

```python
system.mes.inventory.newInventoryLotRecord()
```

## Parameters

| Parameter | Type | Description                               |
| --------- | ---- | ----------------------------------------- |
| None      | -    | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Inventory Lot Record object. The following is a list of keys and default values:

| Key                         | Default Value |
| --------------------------- | ------------- |
| `lotRecordType`             | `null`        |
| `inventoryLotId`            | `null`        |
| `inventoryLotName`          | `null`        |
| `secondaryInventoryLotId`   | `null`        |
| `secondaryInventoryLotName` | `null`        |
| `operationRecordId`         | `null`        |
| `inventoryOperationId`      | `null`        |
| `productionOrderId`         | `null`        |
| `materialReasonCodeId`      | `null`        |
| `sourceLocationId`          | `null`        |
| `destinationLocationId`     | `null`        |
| `lotStatus`                 | `null`        |
| `quantity`                  | `null`        |
| `startDate`                 | Current Time  |
| `endDate`                   | `null`        |
| `status`                    | `null`        |
| `id`                        | `null`        |
| `notes`                     | `null`        |
| `enabled`                   | `true`        |
| `spare1`                    | `null`        |
| `spare2`                    | `null`        |
| `spare3`                    | `null`        |

## Code Examples

```python
# Generate the object structure for a new inventory lot record object with no initial arguments
new_lot_record = system.mes.inventory.newInventoryLotRecord()

# Set basic attributes for the new inventory lot record
new_lot_record['lotRecordType'] = 'CONSUME'
new_lot_record['inventoryLotId'] = '01JE6F0CE9-T94PZD8R-TH9J01TJ'
new_lot_record['status'] = 'COMPLETED'
# (You can continue setting other properties as needed here)

# Save the new inventory lot record to the system
saved_lot_record = system.mes.inventory.saveInventoryLotRecord(**new_lot_record)

# Output the JSON representation of the saved inventory lot record
print(saved_lot_record)
```
