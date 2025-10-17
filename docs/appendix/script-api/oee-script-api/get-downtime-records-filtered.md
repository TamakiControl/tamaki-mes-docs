---
title: getDowntimeRecordsFiltered
description: Retrieve filtered downtime records with comprehensive analysis and reporting capabilities.
sidebar_position: 49
---

# system.mes.oee.getDowntimeRecordsFiltered

Retrieves filtered downtime records for a location within a specified time range.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getDowntimeRecordsFiltered(locationPath, startDate, endDate, downtimeReasonPath=None, microstopThreshold=None, microstopThresholdTimeUnits='SECONDS')
```

## Parameters

| Parameter                     | Type      | Nullable | Description                                                           |
| ----------------------------- | --------- | -------- | --------------------------------------------------------------------- |
| `locationPath`                | `String`  | False    | The path of the location to retrieve records for.                     |
| `startDate`                   | `Date`    | False    | The start of the time range for record retrieval.                     |
| `endDate`                     | `Date`    | False    | The end of the time range for record retrieval.                       |
| `downtimeReasonPath`          | `String`  | True     | An optional path to a specific downtime reason to filter by.          |
| `microstopThreshold`          | `Integer` | True     | A duration to filter out records shorter than this value.             |
| `microstopThresholdTimeUnits` | `String`  | True     | The time units for `microstopThreshold` (e.g., `SECONDS`, `MINUTES`). |

## Returns

A list of `OeeStateRecordDTO` objects, each representing a recorded downtime event that matches the filter criteria.

| Name                       | Type                      | Nullable | Description                                                                | Default Value   |
| -------------------------- | ------------------------- | -------- | -------------------------------------------------------------------------- | --------------- |
| `id`                       | `String`                  | `True`   | The id of the OEE State Record                                             | `null`          |
| `code`                     | `Integer`                 | `False`  | Integer state number                                                       | `null`          |
| `locationId`               | `String`                  | `False`  | Identifier of the associated location where this state record was recorded | `null`          |
| `locationName`             | `String`                  | `True`   | Name of the associated location                                            | `null`          |
| `locationPath`             | `String`                  | `True`   | Path of the location where this state record was recorded                  | `null`          |
| `name`                     | `String`                  | `False`  | Name of the recorded state                                                 | `null`          |
| `calculationType`          | `OeeStateCalculationType` | `False`  | Specifies how this state contributes to OEE calculations                   | `DOWNTIME`      |
| `color`                    | `String`                  | `False`  | Hex color code representing the state visually                             | `"#000000"`     |
| `status`                   | `Status`                  | `False`  | Status of the OEE record (e.g., running, faulted, canceled, complete)      | `UNKNOWN`       |
| `startDate`                | `Instant`                 | `False`  | Start date and time of the state record                                    | `Instant.now()` |
| `endDate`                  | `Instant`                 | `True`   | End date and time of the state record                                      | `null`          |
| `duration`                 | `Double`                  | `False`  | Duration of the state record in seconds                                    | `0.0`           |
| `downtimeReasonId`         | `String`                  | `True`   | Identifier of the associated downtime reason, if applicable                | `null`          |
| `downtimeReason`           | `String`                  | `True`   | Title of the downtime reason. (Name - Code) For display purposes only      | `null`          |
| `downtimeReasonPath`       | `String`                  | `True`   | Path to the current downtime reason                                        | `null`          |
| `interruptionLocationId`   | `String`                  | `True`   | Location id that caused the blocked/starved state on the machine           | `null`          |
| `interruptionLocationName` | `String`                  | `True`   | Name of the interruption location that caused the blocked/starved state    | `null`          |
| `interruptionLocationPath` | `String`                  | `True`   | Location path that caused the blocked/starved state on the machine         | `null`          |
| `acknowledged`             | `Boolean`                 | `False`  | Boolean indicating whether the state record has been acknowledged          | `false`         |
| `acknowledgedBy`           | `String`                  | `True`   | Acknowledged By. This is the user who acknowledged the state record        | `null`          |
| `acknowledgedDate`         | `Instant`                 | `True`   | Acknowledged Date. This is the date when the state record was acknowledged | `null`          |
| `notes`                    | `String`                  | `True`   | Notes associated with the OEE State Record                                 | `null`          |
| `enabled`                  | `boolean`                 | `True`   | Indicates whether the OEE State Record is enabled                          | `true`          |
| `spare1`                   | `String`                  | `True`   | Extra field 1                                                              | `null`          |
| `spare2`                   | `String`                  | `True`   | Extra field 2                                                              | `null`          |
| `spare3`                   | `String`                  | `True`   | Extra field 3                                                              | `null`          |

## Code Examples

```python
from java.util import Date
from java.util.concurrent import TimeUnit

# Get all downtime records longer than 5 minutes in the last 24 hours
location = "Enterprise/Site/Area/Line1"
end_time = Date()
start_time = Date(end_time.getTime() - TimeUnit.HOURS.toMillis(24))

downtime_records = system.mes.oee.getDowntimeRecordsFiltered(
    locationPath=location,
    startDate=start_time,
    endDate=end_time,
    microstopThreshold=5,
    microstopThresholdTimeUnits='MINUTES'
)

for record in downtime_records:
    print record.name, record.duration
```
