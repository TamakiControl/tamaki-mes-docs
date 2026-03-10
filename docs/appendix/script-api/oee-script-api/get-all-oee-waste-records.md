---
sidebar_position: 54
title: 'getAllOeeWasteRecords'
description: 'Retrieves all OEE waste records for a location within a specified time range.'
---

# system.mes.oee.getAllOeeWasteRecords

## Description

Retrieves all [OEE Waste Records](../../data-model/oee-model/oee-waste-record) for a specific location within a given 
time range.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getAllOeeWasteRecords(locationIdOrPath, startDate, endDate)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                          |
|--------------------|----------|----------|----------------------------------------------------------------------|
| `locationIdOrPath` | `String` | False    | The location ID (ULID) or path to retrieve OEE waste records for.   |
| `startDate`        | `Date`   | False    | The start date/time for the query range.                             |
| `endDate`          | `Date`   | True     | The end date/time for the query range. If null, uses current time.   |

## Returns

A list of JSON representations of `OeeWasteRecordDTO` objects for the specified location and time range.

Each object has the following properties:

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
from java.util.concurrent import TimeUnit

# Get all OEE waste records for the last 24 hours
locationPath = "Enterprise/Site/Production/Line1"
endTime = Date()
startTime = Date(endTime.getTime() - TimeUnit.HOURS.toMillis(24))

wasteRecords = system.mes.oee.getAllOeeWasteRecords(locationPath, startTime, endTime)

for record in wasteRecords:
    print record['wasteCount'], record['qualityReasonName']
```

