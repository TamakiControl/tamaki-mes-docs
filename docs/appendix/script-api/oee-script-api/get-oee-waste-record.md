---
sidebar_position: 53
title: 'getOeeWasteRecord'
description: 'Retrieves a specific OEE waste record by ID.'
---

# system.mes.oee.getOeeWasteRecord

## Description

Retrieves a specific [OEE Waste Record](../../data-model/oee-model/oee-waste-record) by its ID.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getOeeWasteRecord(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                                   |
|-----------|-----------------|----------|-----------------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the OEE waste record to retrieve.   |

## Returns

Returns a JSON representation of the `OeeWasteRecordDTO` object. Returns nothing if no record is found.

| Name                            | Type      | Nullable | Description                                                                    | Default Value   |
|---------------------------------|-----------|----------|--------------------------------------------------------------------------------|-----------------|
| `id`                            | `String`  | `True`   | The id of the OEE Waste Record                                                 | `null`          |
| `locationId`                    | `String`  | `False`  | Identifier of the associated location where this OEE waste record was captured | `null`          |
| `locationPath`                  | `String`  | `True`   | Path of the location where this OEE waste record was captured                  | `null`          |
| `locationName`                  | `String`  | `True`   | Name of the associated location                                                | `null`          |
| `startDate`                     | `Instant` | `False`  | Start date and time of the OEE waste record                                    | `Instant.now()` |
| `endDate`                       | `Instant` | `True`   | End date and time of the OEE waste record                                      | `null`          |
| `totalDurationSec`              | `Double`  | `False`  | Total duration of the OEE waste record in seconds                              | `0.0`           |
| `qualityReasonId`               | `String`  | `True`   | Identifier of the associated quality reason, if applicable                     | `null`          |
| `qualityReasonName`             | `String`  | `True`   | Name of the associated quality reason. (Name - Code) For display purposes only | `null`          |
| `qualityReasonPath`             | `String`  | `True`   | Path to the current quality reason                                             | `null`          |
| `qualityReasonCode`             | `String`  | `True`   | Code of the associated quality reason                                          | `null`          |
| `wasteCount`                    | `Double`  | `False`  | Total number of waste units recorded during this period                        | `0.0`           |
| `wasteCountUnitOfMeasureId`     | `String`  | `True`   | Identifier of the unit of measure for the waste count                          | `null`          |
| `wasteCountUnitOfMeasureName`   | `String`  | `True`   | Name of the unit of measure for the waste count                                | `null`          |
| `wasteCountUnitOfMeasureSymbol` | `String`  | `True`   | Symbol of the unit of measure for the waste count                              | `null`          |
| `notes`                         | `String`  | `True`   | Notes associated with the OEE Waste Record                                     | `null`          |
| `enabled`                       | `boolean` | `True`   | Indicates whether the OEE Waste Record is enabled                              | `true`          |
| `spare1`                        | `String`  | `True`   | Extra field 1                                                                  | `null`          |
| `spare2`                        | `String`  | `True`   | Extra field 2                                                                  | `null`          |
| `spare3`                        | `String`  | `True`   | Extra field 3                                                                  | `null`          |

## Code Examples

```python
# Retrieve an OEE waste record by ID
wasteRecord = system.mes.oee.getOeeWasteRecord('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')

# Output the record
print(wasteRecord)
```

