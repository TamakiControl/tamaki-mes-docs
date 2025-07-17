---
sidebar_position: 42
title: "validateInventoryLotRecord"
description: "Validates the specified parameters for a new inventory lot record and returns any validation errors."
---

# system.mes.inventory.validateInventoryLotRecord

Validates the specified parameters for an inventory lot record and returns any validation errors. This only checks if the inventory lot record can be saved based on the attributes given, without actually creating or modifying any inventory lot records. Use this function to verify your parameters before executing a save inventory lot records request.

## Syntax

```python
system.mes.inventory.validateInventoryLotRecord(**lot_record_data)
```

## Parameters

| Parameter                   | Type            | Description                                                                                          |
| --------------------------- | --------------- | ---------------------------------------------------------------------------------------------------- |
| `lotRecordType`             | `String`        | The type of change for the record.                                                                   |
| `inventoryLotId`            | `String` (ULID) | The ULID of the primary inventory lot for the inventory lot record.                                  |
| `inventoryLotName`          | `String`        | The name of the primary inventory lot for the inventory lot record.                                  |
| `secondaryInventoryLotId`   | `String` (ULID) | The ULID of the secondary inventory lot for the inventory lot record.                                |
| `secondaryInventoryLotName` | `String`        | The name of the secondary inventory lot for the inventory lot record.                                |
| `operationRecordId`         | `String` (ULID) | The ULID of the operation record for the inventory lot record.                                       |
| `inventoryOperationId`      | `String` (ULID) | The ULID of the inventory operation for the inventory lot record.                                    |
| `productionOrderId`         | `String` (ULID) | The ULID of the production order for the inventory lot record.                                       |
| `materialReasonCodeId`      | `String` (ULID) | The ULID of the material reason code for the inventory lot record.                                   |
| `sourceLocationId`          | `String` (ULID) | The source location of the inventory or lot being operated.                                          |
| `destinationLocationId`     | `String` (ULID) | The destination location of the inventory or lot being operated.                                     |
| `lotStatus`                 | `String`        | The status of the inventory lot.                                                                     |
| `quantity`                  | `Double`        | The quantity of units being changed depending on the lotRecordType.                                  |
| `startDate`                 | `Instant`       | The beginning timestamp of the inventory lot change.                                                 |
| `endDate`                   | `Instant`       | The end timestamp of the inventory lot change.                                                       |
| `status`                    | `String`        | The status of the inventory lot record (e.g. Running, Completed, Faulted).                           |
| `id`                        | `String` (ULID) | The ULID of the inventory lot record (optional, used for updating an existing inventory lot record). |
| `notes`                     | `String`        | Notes related to the inventory lot.                                                                  |
| `enabled`                   | `Boolean`       | Indicates if the inventory lot is active and enabled.                                                |
| `spare1`                    | `String`        | Additional field for user-defined context.                                                           |
| `spare2`                    | `String`        | Additional field for user-defined context.                                                           |
| `spare3`                    | `String`        | Additional field for user-defined context.                                                           |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new inventory lot record object
new_lot_record = system.mes.inventory.newInventoryLotRecord()

# Set basic attributes for the new inventory lot record
new_lot_record['lotRecordType'] = 'CONSUME'
new_lot_record['inventoryLotId'] = '01JE6F0CE9-T94PZD8R-TH9J01TJ'
new_lot_record['status'] = 'COMPLETED'
# (You can continue setting other properties as needed here)

# Validate inventory lot parameters
validation_errors = system.mes.inventory.validateInventoryLotRecord(**new_lot_record)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Lot parameters are valid.')
```
