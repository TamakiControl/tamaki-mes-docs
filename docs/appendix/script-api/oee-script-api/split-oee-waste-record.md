---
sidebar_position: 55
title: "splitOeeWasteRecord"
description: "Splits an OEE waste record at a specific time."
---

# system.mes.oee.splitOeeWasteRecord

## Description

Splits an [OEE Waste Record](../../data-model/oee-model/oee-waste-record) at a specified time. This action modifies the 
original record, shortening its duration, and creates a new record for the remaining time.

If `newWasteCount` is provided, the new record will be assigned that waste count and the original record's waste count 
will be reduced by the same amount. If `newWasteCount` is not provided, the waste count is distributed proportionally
based on the duration of each resulting record.

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.splitOeeWasteRecord(oeeWasteRecordId, splitDate, newWasteCount=None)
```

## Parameters

| Parameter          | Type            | Nullable | Description                                                                                                          |
|--------------------|-----------------|----------|----------------------------------------------------------------------------------------------------------------------|
| `oeeWasteRecordId` | `String` (ULID) | False    | The ID of the OEE waste record to split.                                                                             |
| `splitDate`        | `Date`          | False    | The date and time at which to split the record.                                                                      |
| `newWasteCount`    | `Double`        | True     | The waste count to assign to the new record. If `None`, waste count is distributed proportionally by duration.       |

## Returns

Returns a JSON representation of the new `OeeWasteRecordDTO` object that was split off from the original OEE waste record.

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
# Split an OEE waste record at a specific date
splitDate = "2025-09-05 14:58:30"
splitDate = system.date.parse(splitDate, "yyyy-MM-dd HH:mm:ss")

system.mes.oee.splitOeeWasteRecord(
    '01JAP8RJBN-8ZTPXSGY-J9GSDPE1',
    splitDate
)

# Split an OEE waste record and assign a specific waste count to the new record
system.mes.oee.splitOeeWasteRecord(
    '01JAP8RJBN-8ZTPXSGY-J9GSDPE1',
    splitDate,
    newWasteCount=5.0
)
```

