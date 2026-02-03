---
sidebar_position: 58
title: "newInventoryLotRecord"
description: "Generates an empty non-persisted inventory lot record object to provide the structure to retrieve records from the database."
---

# system.mes.inventory.newInventoryLotRecord

Generates an empty non-persisted [Inventory Lot Records](../../data-model/inventory-operation-model/inventory-lot-record) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveInventoryLotRecord](./save-inventory-lot-record) method in order to persist the record.

## Syntax

```python
system.mes.inventory.newInventoryLotRecord()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Inventory Lot Record object. The following is a list of keys and default values:

| Key                         | Default Value |
|-----------------------------|---------------|
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
newLotRecord = system.mes.inventory.newInventoryLotRecord()

# Set basic attributes for the new inventory lot record
newLotRecord['lotRecordType'] = 'CONSUME'
newLotRecord['inventoryLotId'] = '01JE6F0CE9-T94PZD8R-TH9J01TJ'
newLotRecord['status'] = 'COMPLETED'
# (You can continue setting other properties as needed here)

# Save the new inventory lot record to the system
savedLotRecord = system.mes.inventory.saveInventoryLotRecord(**newLotRecord)

# Output the JSON representation of the saved inventory lot record
print(savedLotRecord)
```
