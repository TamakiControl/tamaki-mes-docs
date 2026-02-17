---
title: getModeRecordsGroupedByMode
description: Retrieve and group OEE mode records by mode type.
sidebar_position: 56
---

# system.mes.oee.getModeRecordsGroupedByMode

## Description

Retrieves OEE mode records for a location and time period, grouped by mode type.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getModeRecordsGroupedByMode(locationIdOrPath, startDate, endDate)
```

## Parameters

| Parameter          | Type     | Nullable | Description                             |
| ------------------ | -------- | -------- | --------------------------------------- |
| `locationIdOrPath` | `String` | False    | The location path or ID to analyze.     |
| `startDate`        | `Date`   | False    | The start time for the analysis period. |
| `endDate`          | `Date`   | False    | The end time for the analysis period.   |

## Returns

A list of JSON representations of `OeeModeRecordsGroupedByModeDTO` objects, each representing the aggregated data for a specific mode.

Each object has the following properties:

| Name         | Type      | Nullable | Description                                                            | Default Value |
| ------------ | --------- | -------- |------------------------------------------------------------------------| ------------- |
| `locationId` | `String`  | `True`   | Identifier of the associated location where this mode was recorded     | `null`        |
| `code`       | `Integer` | `True`   | The integer code associated with the mode                              | `null`        |
| `name`       | `String`  | `True`   | The name of the mode, such as "Production", "Scheduled Downtime", etc. | `null`        |
| `color`      | `String`  | `True`   | The color code for displaying this mode                                | `null`        |
| `duration`   | `Double`  | `True`   | The total aggregated duration of this mode in seconds                  | `null`        |
| `count`      | `Long`    | `True`   | The number of occurrences of this mode                                 | `null`        |

## Code Examples

```python
from java.util import Date
from java.util.concurrent import TimeUnit

# Get mode records grouped by mode for the last day
location = "Enterprise/Site/Area/Line1"
endTime = Date()
startTime = Date(endTime.getTime() - TimeUnit.DAYS.toMillis(1))

groupedRecords = system.mes.oee.getModeRecordsGroupedByMode(location, startTime, endTime)

for group in groupedRecords:
    print "Mode:", group['name'], "Total Duration (sec):", group['duration'], "Count:", group['count']
```
