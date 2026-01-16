---
sidebar_position: 42
title: "validateInventoryLotRecord"
description: "Validates the specified parameters for a new inventory lot record and returns any validation errors."
---

# system.mes.inventory.validateInventoryLotRecord

Validates the specified parameters for an inventory lot record and returns any validation errors. This only checks if the inventory lot record can be saved based on the attributes given, without actually creating or modifying any inventory lot records. Use this function to verify your parameters before executing a save inventory lot records request.

## Syntax

```python
system.mes.inventory.validateInventoryLotRecord(**lotRecordData)
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

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new inventory lot record object
newLotRecord = system.mes.inventory.newInventoryLotRecord()

# Set basic attributes for the new inventory lot record
newLotRecord['lotRecordType'] = 'CONSUME'
newLotRecord['inventoryLotId'] = '01JE6F0CE9-T94PZD8R-TH9J01TJ'
newLotRecord['status'] = 'COMPLETED'
# (You can continue setting other properties as needed here)

# Validate inventory lot parameters
validationErrors = system.mes.inventory.validateInventoryLotRecord(**newLotRecord)

if len(validationErrors) > 0:
    print('Validation errors found:', validationErrors)
else:
    print('Lot parameters are valid.')
```
