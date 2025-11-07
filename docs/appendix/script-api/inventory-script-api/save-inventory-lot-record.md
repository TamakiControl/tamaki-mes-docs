---
sidebar_position: 59
title: "saveInventoryLotRecord"
description: "Creates or updates an inventory lot record with specified parameters."
---

# system.mes.inventory.saveInventoryLotRecord

## Description

Creates or updates an [Inventory Lot Records](../../data-model/inventory-operation-model/inventory-lot-record) object in the system based on the provided parameters.

## Syntax

```python
system.mes.inventory.saveInventoryLotRecord(**lot_record_data)
```

## Parameters

| Parameter                   | Type            | Nullable | Description                                                                                          |
|-----------------------------|-----------------|----------|------------------------------------------------------------------------------------------------------|
| `lotRecordType`             | `String`        | False    | The type of change for the record.                                                                   |
| `inventoryLotId`            | `String` (ULID) | False    | The ULID of the primary inventory lot for the inventory lot record.                                  |
| `inventoryLotName`          | `String`        | True     | The name of the primary inventory lot for the inventory lot record.                                  |
| `secondaryInventoryLotId`   | `String` (ULID) | True     | The ULID of the secondary inventory lot for the inventory lot record.                                |
| `secondaryInventoryLotName` | `String`        | True     | The name of the secondary inventory lot for the inventory lot record.                                |
| `operationRecordId`         | `String` (ULID) | True     | The ULID of the operation record for the inventory lot record.                                       |
| `inventoryOperationId`      | `String` (ULID) | True     | The ULID of the inventory operation for the inventory lot record.                                    |
| `productionOrderId`         | `String` (ULID) | True     | The ULID of the production order for the inventory lot record.                                       |
| `materialReasonCodeId`      | `String` (ULID) | True     | The ULID of the material reason code for the inventory lot record.                                   |
| `sourceLocationId`          | `String` (ULID) | True     | The source location of the inventory or lot being operated.                                          |
| `destinationLocationId`     | `String` (ULID) | True     | The destination location of the inventory or lot being operated.                                     |
| `lotStatus`                 | `String`        | True     | The status of the inventory lot.                                                                     |
| `quantity`                  | `Double`        | True     | The quantity of units being changed depending on the lotRecordType.                                  |
| `startDate`                 | `Instant`       | False    | The beginning timestamp of the inventory lot change. Default value is `Current Instant`.             |
| `endDate`                   | `Instant`       | True     | The end timestamp of the inventory lot change.                                                       |
| `status`                    | `String`        | False    | The status of the inventory lot record (e.g. Running, Completed, Faulted).                           |
| `id`                        | `String` (ULID) | True     | The ULID of the inventory lot record (optional, used for updating an existing inventory lot record). |
| `notes`                     | `String`        | True     | Notes related to the inventory lot.                                                                  |
| `enabled`                   | `Boolean`       | True     | Indicates if the inventory lot is active and enabled.                                                |
| `spare1`                    | `String`        | True     | Additional field for user-defined context.                                                           |
| `spare2`                    | `String`        | True     | Additional field for user-defined context.                                                           |
| `spare3`                    | `String`        | True     | Additional field for user-defined context.                                                           |

## Returns

Returns a JSON representation of the saved inventory lot record.

## Code Examples

```python
# Generate the object structure for a new inventory lot record object, set the initial arguments and save it
new_lot_record = system.mes.inventory.newInventoryLotRecord()
new_lot_record['lotRecordType'] = 'CONSUME'
new_lot_record['inventoryLotId'] = '01JE6F0CE9-T94PZD8R-TH9J01TJ'
new_lot_record['status'] = 'COMPLETED'
saved_lot_record = system.mes.inventory.saveInventoryLotRecord(**new_lot_record)

# Output the JSON representation of the saved inventory lot record
print(saved_lot_record)

# Generate the object structure for another new inventory lot record object to update the previous inventory lot
lot_record_data = system.mes.inventory.newInventoryLotRecord()

# Set basic attributes for the updated inventory lot record
lot_record_data['id'] = saved_lot_record.id
lot_record_data['lotRecordType'] = 'CONSUME'
lot_record_data['inventoryLotId'] = '01JE6F0CE9-T94PZD8R-TH9J01TJ'
lot_record_data['status'] = 'COMPLETED'
lot_record_data['lotStatus'] = 'OPEN'
# (You can continue setting other properties as needed here)

# Save the inventory lot record to update it in the system
updated_lot_record = system.mes.inventory.saveInventoryLotRecord(**lot_record_data)

# Output the JSON representation of the updated inventory lot
print(updated_lot_record)
```
