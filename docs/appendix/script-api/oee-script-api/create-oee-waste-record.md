---
sidebar_position: 52
title: 'createOeeWasteRecord'
description: 'Creates a new OEE waste record for a location.'
---

# system.mes.oee.createOeeWasteRecord

## Description

Creates a new [OEE Waste Record](../../data-model/oee-model/oee-waste-record) for a specific location.

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.createOeeWasteRecord(locationIdOrPath, startDate, endDate, wasteCount, wasteCountUnitOfMeasureIdOrName, qualityReasonId=None)
```

## Parameters

| Parameter                          | Type     | Nullable | Description                                                                    |
|------------------------------------|----------|----------|--------------------------------------------------------------------------------|
| `locationIdOrPath`                 | `String` | False    | The location ID (ULID) or path to create the OEE waste record for.             |
| `startDate`                        | `Date`   | False    | The start date/time of the waste record.                                       |
| `endDate`                          | `Date`   | False    | The end date/time of the waste record.                                         |
| `wasteCount`                       | `Double` | False    | The number of waste units recorded.                                            |
| `wasteCountUnitOfMeasureIdOrName`  | `String` | False    | The ID (ULID) or name of the unit of measure for the waste count.              |
| `qualityReasonId`                  | `String` | True     | The ID of the quality reason to assign to the waste record. Defaults to `None`. |

## Returns

Returns a JSON representation of the newly created `OeeWasteRecordDTO` object.

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
from java.util import Date

# Create a new OEE waste record
locationPath = "Enterprise/Site/Production/Line1"
endTime = Date()
startTime = Date(endTime.getTime() - TimeUnit.HOURS.toMillis(24))

wasteRecord = system.mes.oee.createOeeWasteRecord(
    locationIdOrPath=locationPath,
    startDate=startTime,
    endDate=endTime,
    wasteCount=15.0,
    wasteCountUnitOfMeasureIdOrName='Units',
    qualityReasonId='01JAP8RJBN-8ZTPXSGY-J9GSDPE1'
)

print "Created waste record:", wasteRecord['id']
print "Waste Count:", wasteRecord['wasteCount']
```

