---
title: getTopInterruptionLocationsByDuration
description: Retrieves the top interruption locations by total duration for a specified parent location and time range.
sidebar_position: 59
---

# system.mes.oee.getTopInterruptionLocationsByDuration

Retrieves the top interruption locations, ranked by their total accumulated downtime duration, for a specified parent location and time range. This helps identify which child locations are contributing the most to total downtime.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getTopInterruptionLocationsByDuration(locationIdOrPath, startDate, endDate, count)
```

## Parameters

| Parameter          | Type      | Nullable | Description                                             |
| ------------------ | --------- | -------- | ------------------------------------------------------- |
| `locationIdOrPath` | `String`  | False    | The parent location path or ID to analyze.              |
| `startDate`        | `Date`    | False    | The start time for the analysis period.                 |
| `endDate`          | `Date`    | False    | The end time for the analysis period.                   |
| `count`            | `Integer` | False    | The maximum number of interruption locations to return. |

## Returns

A list of `DowntimeByInterruptionLocationDTO` objects, each representing an interruption location and its aggregated data.

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

# Get the top 3 interruption locations by duration for a production line in the last week
line_location = "Enterprise/Site/Area/Line1"
end_time = Date()
start_time = Date(end_time.getTime() - TimeUnit.DAYS.toMillis(7))

top_locations = system.mes.oee.getTopInterruptionLocationsByDuration(
    locationIdOrPath=line_location,
    startDate=start_time,
    endDate=end_time,
    count=3
)

print "Top 3 Interruption Locations by Duration:"
for location in top_locations:
    print "  - {}: {:.2f} hours, {} interruptions".format(
        location.interruptionLocationName,
        location.duration / 3600.0,
        location.count
    )
```
