---
title: getTopInterruptionLocationsByCount
description: Retrieves the top interruption locations by occurrence count for a specified parent location and time range.
sidebar_position: 70
---

# system.mes.oee.getTopInterruptionLocationsByCount

## Description

Retrieves the top interruption locations, ranked by the number of downtime occurrences, for a specified parent location and time range. This helps identify which child locations are causing the most frequent interruptions.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getTopInterruptionLocationsByCount(locationIdOrPath, startDate, endDate, count)
```

## Parameters

| Parameter          | Type      | Nullable | Description                                             |
| ------------------ | --------- | -------- | ------------------------------------------------------- |
| `locationIdOrPath` | `String`  | False    | The parent location path or ID to analyze.              |
| `startDate`        | `Date`    | False    | The start time for the analysis period.                 |
| `endDate`          | `Date`    | False    | The end time for the analysis period.                   |
| `count`            | `Integer` | False    | The maximum number of interruption locations to return. |

## Returns

A list of JSON representations of `DowntimeByInterruptionLocationDTO` objects, each representing an interruption location and its aggregated data.

Each object has the following properties:

| Name                       | Type     | Nullable | Description                                                       | Default Value |
| -------------------------- | -------- | -------- | ----------------------------------------------------------------- | ------------- |
| `interruptionLocationPath` | `String` | `True`   | Path of the interruption location                                 | `null`        |
| `interruptionLocationName` | `String` | `True`   | Name of the interruption location                                 | `null`        |
| `duration`                 | `Double` | `True`   | Duration of downtime caused by the interruption location          | `0.0`         |
| `count`                    | `Long`   | `True`   | Count of downtime events caused by the interruption location      | `null`        |
| `durationPercent`          | `Double` | `True`   | Percentage of total duration caused by this interruption location | `0.0`         |
| `countPercent`             | `Double` | `True`   | Percentage of total count caused by this interruption location    | `0.0`         |

## Code Examples

```python
from java.util import Date
from java.util.concurrent import TimeUnit

# Get the top 5 most frequent interruption locations for a production line in the last 24 hours
line_location = "Enterprise/Site/Area/Line1"
end_time = Date()
start_time = Date(end_time.getTime() - TimeUnit.DAYS.toMillis(1))

top_locations = system.mes.oee.getTopInterruptionLocationsByCount(
    line_location,
    start_time,
    end_time,
    5
)

print "Top 5 Interruption Locations by Count:"
for location in top_locations:
    print "  - {}: {} interruptions, Total Duration: {:.2f} min".format(
        location['interruptionLocationName'],
        location['count'],
        location['duration'] / 60.0
    )
```
